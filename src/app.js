'use strict'

import React, { Component } from 'react'

import Search from './components/Search'
import UserSummary from './components/UserSummary'
import Actions from './components/Actions'
import Repos from './components/Repos'

import './css/style.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Search />
        <UserSummary />
        <Actions />

        <Repos
          title='Repositórios:'
          className='repos'
          repos={[{
            name: 'Meu repositório',
            link: 'http://myrepo.com'
          }]}
        />

        <Repos
          title='Favoritos:'
          className='starred'
          repos={[{
            name: 'Meu repositório favorito',
            link: 'http://myfavoriterepo.com'
          }]}
        />
      </div>
    )
  }
}

export default App
