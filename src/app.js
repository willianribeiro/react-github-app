'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/AppContent'
import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userSummary: null,
      repos: [],
      starred: []
    }
  }

  handleSearch = (event) => {
    const ENTER = 13
    const key = event.which || event.keyCode
    const value = event.target.value

    if (key === ENTER) {
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userSummary: {
              username: result.name,
              html_url: result.html_url,
              avatar_url: result.avatar_url,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          })
        })
    }
  }

  render () {
    const {
      userSummary,
      repos,
      starred
    } = this.state

    return (
      <AppContent
        userSummary={userSummary}
        repos={repos}
        starred={starred}
        handleSearch={(event) => { this.handleSearch(event) }}
      />
    )
  }
}

export default App
