'use strict'

import React, { PropTypes } from 'react'

const Actions = ({ loadRepos }) => (
  <div className='actions'>
    <button onClick={loadRepos}>Ver repositórios</button>
    <button>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  loadRepos: PropTypes.func.isRequired
}

export default Actions
