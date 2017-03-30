'use strict'

import React, { Component } from 'react'
import AppContent from './components/AppContent'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userSummary: {
        username: 'Willian Ribeiro',
        html_url: 'https://github.com/willianribeiro',
        avatar_url: 'https://avatars2.githubusercontent.com/u/3102551?v=3',
        repos: 19,
        followers: 10,
        following: 11,
      },
      repos: [{
        name: 'My Repo',
        link: ''
      }],
      starred: [{
        name: 'My Favorite Repo',
        link: ''
      }]
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
      />
    )
  }
}

export default App
