import React, { Component, PropTypes } from 'react'

import Search from './Search'
import UserSummary from './UserSummary'
import Actions from './Actions'
import Repos from './Repos'

class AppContent extends Component {
  render () {
    const {
      userSummary,
      repos,
      starred,
      handleSearch,
      loadRepos,
      loadStarred
    } = this.props

    return (
      <div className='app'>
        <Search handleSearch={handleSearch} />
        {!!userSummary && <UserSummary userSummary={userSummary} />}
        {!!userSummary &&
          <Actions
            loadRepos={loadRepos}
            loadStarred={loadStarred}
          />
        }

        {!!repos.length && !starred.length &&
          <Repos
            title='Repositórios:'
            className='repos'
            repos={repos}
          />
        }

        {!!starred.length && !repos.length &&
          <Repos
            title='Favoritos:'
            className='starred'
            repos={starred}
          />
        }
      </div>
    )
  }
}

AppContent.propTypes = {
  userSummary: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
