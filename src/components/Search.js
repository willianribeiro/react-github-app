'use strict'

import React, {PropTypes} from 'react'

const Search = ({ handleSearch, disabled }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no Github'
      onKeyUp={handleSearch}
      disabled={disabled}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default Search
