import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import serialize from "serialize-javascript"
import App from '../shared/App'
import routes from '../shared/routes'
const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.resolve(process.cwd(), 'public/index.html'), 'utf-8');

const app = express()

app.use(cors())
app.use(express.static("public"))

app.get("*", (req, res, next) => {
  console.log('aa');
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise.then((data) => {
    const context = { data }

    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )

    res.send(
      template
        .replace('<!-- SCRIPT_PLACEHOLDER -->', `<script>window.__INITIAL_DATA__ = ${serialize(data)}</script>`)
        .replace('<!-- HTML_PLACEHOLDER -->', markup)
      );

    // res.send(`
    //   <!DOCTYPE html>
    //   <html>
    //     <head>
    //       <title>SSR with RR</title>
    //       <script src="/bundle.js" defer></script>
    //       <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
    //     </head>

    //     <body>
    //       <div id="root">${markup}</div>
    //     </body>
    //   </html>
    // `);
  }).catch(next)
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/