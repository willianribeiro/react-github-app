'use strict'

import React, { PropTypes } from 'react'

const Actions = ({ loadRepos, loadStarred }) => (
  <div className='actions'>
    <button onClick={loadRepos}>Ver repositórios</button>
    <button onClick={loadStarred}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  loadRepos: PropTypes.func.isRequired,
  loadStarred: PropTypes.func.isRequired
}

export default Actions
