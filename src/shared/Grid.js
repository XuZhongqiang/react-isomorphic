import React, { Component } from 'react'
import './Grid.less';

class Grid extends Component {
  constructor(props) {
    super(props);
    let repos;

    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      repos = this.props.staticContext.data;
    }
    this.state = {
      repos,
      loading: !Array.isArray(repos) || !repos.length,
    };
  }

  componentDidMount() {
    if (!Array.isArray(this.state.repos) || !this.state.repos.length) {
      this.fetchRepos(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id ) {
      this.fetchRepos(this.props.match.params.id);
    }
  }

  fetchRepos = (lang) => {
    this.setState({loading: true});
    this.props
      .fetchInitialData(lang)
      .then(data => {
        this.setState({ loading: false, repos: data });
      }).catch(() => {
        this.setState({loading: false});
      })
  }

  render() {
    const { repos, loading } = this.state

    if (loading) {
      return <div>LOADING</div>;
    }

    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li><a href={html_url}>{name}</a></li>
              <li>@{owner.login}</li>
              <li className="star">{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

export default Grid