/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/App */ "./src/shared/App.js");
/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/routes */ "./src/shared/routes.js");









var fs = __webpack_require__(/*! fs */ "fs");

var path = __webpack_require__(/*! path */ "path");

var template = fs.readFileSync(path.resolve(process.cwd(), 'public/index.html'), 'utf-8');
var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]("public"));
app.get("*", function (req, res, next) {
  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_7__["default"].find(function (route) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["matchPath"])(req.url, route);
  }) || {};
  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();
  promise.then(function (data) {
    var context = {
      data: data
    };
    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"], {
      location: req.url,
      context: context
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
    res.send(template.replace('<!-- SCRIPT_PLACEHOLDER -->', "<script>window.__INITIAL_DATA__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data), "</script>")).replace('<!-- HTML_PLACEHOLDER -->', markup));
    res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR with RR</title>\n          <script src=\"/bundle.js\" defer></script>\n          <script>window.__INITIAL_DATA__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data), "</script>\n        </head>\n\n        <body>\n          <div id=\"root\">").concat(markup, "</div>\n        </body>\n      </html>\n    "));
  })["catch"](next);
});
app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});
/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/shared/routes.js");
/* harmony import */ var _NoMatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NoMatch */ "./src/shared/NoMatch.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar */ "./src/shared/NavBar.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (_ref) {
        var path = _ref.path,
            exact = _ref.exact,
            Component = _ref.component,
            rest = _objectWithoutProperties(_ref, ["path", "exact", "component"]);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          key: path,
          path: path,
          exact: exact,
          render: function render(props) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, rest));
          }
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoMatch__WEBPACK_IMPORTED_MODULE_3__["default"], props);
        }
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/shared/Grid.js":
/*!****************************!*\
  !*** ./src/shared/Grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Grid_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid.less */ "./src/shared/Grid.less");
/* harmony import */ var _Grid_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Grid_less__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Grid =
/*#__PURE__*/
function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    var _this;

    _classCallCheck(this, Grid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Grid).call(this, props));

    _this.fetchRepos = function (lang) {
      _this.setState({
        loading: true
      });

      _this.props.fetchInitialData(lang).then(function (data) {
        _this.setState({
          loading: false,
          repos: data
        });
      })["catch"](function () {
        _this.setState({
          loading: false
        });
      });
    };

    var repos;

    if (false) {} else {
      repos = _this.props.staticContext.data;
    }

    _this.state = {
      repos: repos,
      loading: !Array.isArray(repos) || !repos.length
    };
    return _this;
  }

  _createClass(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!Array.isArray(this.state.repos) || !this.state.repos.length) {
        this.fetchRepos(this.props.match.params.id);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.match.params.id !== this.props.match.params.id) {
        this.fetchRepos(this.props.match.params.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          repos = _this$state.repos,
          loading = _this$state.loading;

      if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "LOADING");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }, repos.map(function (_ref) {
        var name = _ref.name,
            owner = _ref.owner,
            stargazers_count = _ref.stargazers_count,
            html_url = _ref.html_url;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: name,
          style: {
            margin: 30
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: html_url
        }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "@", owner.login), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "star"
        }, stargazers_count, " stars")));
      }));
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/shared/Grid.less":
/*!******************************!*\
  !*** ./src/shared/Grid.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/Home.js":
/*!****************************!*\
  !*** ./src/shared/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Select a language");
});

/***/ }),

/***/ "./src/shared/NavBar.js":
/*!******************************!*\
  !*** ./src/shared/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


function Navbar() {
  var languages = [{
    name: 'All',
    param: 'all'
  }, {
    name: 'JavaScript',
    param: 'javascript'
  }, {
    name: 'Ruby',
    param: 'ruby'
  }, {
    name: 'Python',
    param: 'python'
  }, {
    name: 'Java',
    param: 'java'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, languages.map(function (_ref) {
    var name = _ref.name,
        param = _ref.param;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: param
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      activeStyle: {
        fontWeight: 'bold'
      },
      to: "/popular/".concat(param)
    }, name));
  }));
}

/***/ }),

/***/ "./src/shared/NoMatch.js":
/*!*******************************!*\
  !*** ./src/shared/NoMatch.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoMatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NoMatch() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Four Oh Four");
}

/***/ }),

/***/ "./src/shared/api.js":
/*!***************************!*\
  !*** ./src/shared/api.js ***!
  \***************************/
/*! exports provided: fetchPopularRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPopularRepos", function() { return fetchPopularRepos; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

function fetchPopularRepos() {
  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
  var encodedURI = encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(language, "&sort=stars&order=desc&type=Repositories"));
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(encodedURI).then(function (data) {
    return data.json();
  }).then(function (repos) {
    return repos.items;
  })["catch"](function (error) {
    console.warn(error);
    return null;
  });
}

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/shared/Home.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "./src/shared/Grid.js");
/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api */ "./src/shared/api.js");



var routes = [{
  path: '/',
  exact: true,
  component: _Home__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/popular/:id',
  exact: true,
  component: _Grid__WEBPACK_IMPORTED_MODULE_1__["default"],
  fetchInitialData: function fetchInitialData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return Object(_shared_api__WEBPACK_IMPORTED_MODULE_2__["fetchPopularRepos"])(path.split('/').pop());
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9HcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL05vTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCJcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCBzZXJpYWxpemUgZnJvbSBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcbmltcG9ydCBBcHAgZnJvbSAnLi4vc2hhcmVkL0FwcCdcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vc2hhcmVkL3JvdXRlcydcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmNvbnN0IHRlbXBsYXRlID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAncHVibGljL2luZGV4Lmh0bWwnKSwgJ3V0Zi04Jyk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAudXNlKGNvcnMoKSlcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWNcIikpXG5cbmFwcC5nZXQoXCIqXCIsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBhY3RpdmVSb3V0ZSA9IHJvdXRlcy5maW5kKChyb3V0ZSkgPT4gbWF0Y2hQYXRoKHJlcS51cmwsIHJvdXRlKSkgfHwge31cblxuICBjb25zdCBwcm9taXNlID0gYWN0aXZlUm91dGUuZmV0Y2hJbml0aWFsRGF0YVxuICAgID8gYWN0aXZlUm91dGUuZmV0Y2hJbml0aWFsRGF0YShyZXEucGF0aClcbiAgICA6IFByb21pc2UucmVzb2x2ZSgpXG5cbiAgcHJvbWlzZS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHsgZGF0YSB9XG5cbiAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICA8QXBwIC8+XG4gICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICApXG5cbiAgICByZXMuc2VuZChcbiAgICAgIHRlbXBsYXRlXG4gICAgICAgIC5yZXBsYWNlKCc8IS0tIFNDUklQVF9QTEFDRUhPTERFUiAtLT4nLCBgPHNjcmlwdD53aW5kb3cuX19JTklUSUFMX0RBVEFfXyA9ICR7c2VyaWFsaXplKGRhdGEpfTwvc2NyaXB0PmApXG4gICAgICAgIC5yZXBsYWNlKCc8IS0tIEhUTUxfUExBQ0VIT0xERVIgLS0+JywgbWFya3VwKVxuICAgICAgKTtcblxuICAgIHJlcy5zZW5kKGBcbiAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT5TU1Igd2l0aCBSUjwvdGl0bGU+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvYnVuZGxlLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdD53aW5kb3cuX19JTklUSUFMX0RBVEFfXyA9ICR7c2VyaWFsaXplKGRhdGEpfTwvc2NyaXB0PlxuICAgICAgICA8L2hlYWQ+XG5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPGRpdiBpZD1cInJvb3RcIj4ke21hcmt1cH08L2Rpdj5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIGApO1xuICB9KS5jYXRjaChuZXh0KVxufSlcblxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6IDMwMDBgKVxufSlcblxuLypcbiAgMSkgSnVzdCBnZXQgc2hhcmVkIEFwcCByZW5kZXJpbmcgdG8gc3RyaW5nIG9uIHNlcnZlciB0aGVuIHRha2luZyBvdmVyIG9uIGNsaWVudC5cbiAgMikgUGFzcyBkYXRhIHRvIDxBcHAgLz4gb24gc2VydmVyLiBTaG93IGRpZmYuIEFkZCBkYXRhIHRvIHdpbmRvdyB0aGVuIHBpY2sgaXQgdXAgb24gdGhlIGNsaWVudCB0b28uXG4gIDMpIEluc3RlYWQgb2Ygc3RhdGljIGRhdGEgbW92ZSB0byBkeW5hbWljIGRhdGEgKGdpdGh1YiBnaXN0cylcbiAgNCkgYWRkIGluIHJvdXRpbmcuXG4qLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBOb01hdGNoIGZyb20gJy4vTm9NYXRjaCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2QmFyIC8+XG5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICB7cm91dGVzLm1hcCgoeyBwYXRoLCBleGFjdCwgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgICAgICAgICAgPFJvdXRlIGtleT17cGF0aH0gcGF0aD17cGF0aH0gZXhhY3Q9e2V4YWN0fSByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gey4uLnJlc3R9IC8+XG4gICAgICAgICAgICApfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxSb3V0ZSByZW5kZXI9eyhwcm9wcykgPT4gPE5vTWF0Y2ggey4uLnByb3BzfSAvPiB9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vR3JpZC5sZXNzJztcblxuY2xhc3MgR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCByZXBvcztcblxuICAgIGlmIChfX2lzQnJvd3Nlcl9fKSB7XG4gICAgICByZXBvcyA9IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fO1xuICAgICAgZGVsZXRlIHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXBvcyA9IHRoaXMucHJvcHMuc3RhdGljQ29udGV4dC5kYXRhO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVwb3MsXG4gICAgICBsb2FkaW5nOiAhQXJyYXkuaXNBcnJheShyZXBvcykgfHwgIXJlcG9zLmxlbmd0aCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuc3RhdGUucmVwb3MpIHx8ICF0aGlzLnN0YXRlLnJlcG9zLmxlbmd0aCkge1xuICAgICAgdGhpcy5mZXRjaFJlcG9zKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMubWF0Y2gucGFyYW1zLmlkICE9PSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCApIHtcbiAgICAgIHRoaXMuZmV0Y2hSZXBvcyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gICAgfVxuICB9XG5cbiAgZmV0Y2hSZXBvcyA9IChsYW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHNcbiAgICAgIC5mZXRjaEluaXRpYWxEYXRhKGxhbmcpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCByZXBvczogZGF0YSB9KTtcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZXBvcywgbG9hZGluZyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8ZGl2PkxPQURJTkc8L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJ319PlxuICAgICAgICB7cmVwb3MubWFwKCh7IG5hbWUsIG93bmVyLCBzdGFyZ2F6ZXJzX2NvdW50LCBodG1sX3VybCB9KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0gc3R5bGU9e3ttYXJnaW46IDMwfX0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPXtodG1sX3VybH0+e25hbWV9PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Ae293bmVyLmxvZ2lufTwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdGFyXCI+e3N0YXJnYXplcnNfY291bnR9IHN0YXJzPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gPGRpdj5TZWxlY3QgYSBsYW5ndWFnZTwvZGl2PjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyICgpIHtcbiAgY29uc3QgbGFuZ3VhZ2VzID0gW3tcbiAgICBuYW1lOiAnQWxsJyxcbiAgICBwYXJhbTogJ2FsbCdcbiAgfSwge1xuICAgIG5hbWU6ICdKYXZhU2NyaXB0JyxcbiAgICBwYXJhbTogJ2phdmFzY3JpcHQnLFxuICB9LCB7XG4gICAgbmFtZTogJ1J1YnknLFxuICAgIHBhcmFtOiAncnVieScsXG4gIH0sIHtcbiAgICBuYW1lOiAnUHl0aG9uJyxcbiAgICBwYXJhbTogJ3B5dGhvbicsXG4gIH0sIHtcbiAgICBuYW1lOiAnSmF2YScsXG4gICAgcGFyYW06ICdqYXZhJyxcbiAgfV1cblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtsYW5ndWFnZXMubWFwKCh7IG5hbWUsIHBhcmFtIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17cGFyYW19PlxuICAgICAgICAgIDxOYXZMaW5rIGFjdGl2ZVN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0gdG89e2AvcG9wdWxhci8ke3BhcmFtfWB9PlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm9NYXRjaCAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEZvdXIgT2ggRm91clxuICAgIDwvZGl2PlxuICApXG59IiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvcHVsYXJSZXBvcyAobGFuZ3VhZ2UgPSAnYWxsJykge1xuICBjb25zdCBlbmNvZGVkVVJJID0gZW5jb2RlVVJJKGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1zdGFyczo+MStsYW5ndWFnZToke2xhbmd1YWdlfSZzb3J0PXN0YXJzJm9yZGVyPWRlc2MmdHlwZT1SZXBvc2l0b3JpZXNgKVxuXG4gIHJldHVybiBmZXRjaChlbmNvZGVkVVJJKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAudGhlbigocmVwb3MpID0+IHJlcG9zLml0ZW1zKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvcilcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSk7XG59IiwiaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZCc7XG5cbmltcG9ydCB7IGZldGNoUG9wdWxhclJlcG9zIH0gZnJvbSAnLi4vc2hhcmVkL2FwaSc7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWUsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3BvcHVsYXIvOmlkJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEdyaWQsXG4gICAgZmV0Y2hJbml0aWFsRGF0YTogKHBhdGggPSAnJykgPT4gZmV0Y2hQb3B1bGFyUmVwb3MocGF0aC5zcGxpdCgnLycpLnBvcCgpKSxcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQU1BO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQWpCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBQ0E7QUFDQSxpQkFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFjQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBTEE7QUFXQTs7OztBQTVEQTtBQUNBO0FBOERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFTQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFRQTs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==