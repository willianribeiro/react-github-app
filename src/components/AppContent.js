import React, { Component } from 'react'

import Search from './Search'
import UserSummary from './UserSummary'
import Actions from './Actions'
import Repos from './Repos'

class AppContent extends Component {
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

export default AppContent
