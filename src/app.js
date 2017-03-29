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

        <div className='starred'>
          <h2>Favoritos:</h2>
          <ul>
            <li>
              <a href=''>Nome do repositório</a>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default App
