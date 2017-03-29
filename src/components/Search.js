'use strict'

import React from 'react'

const Search = ({ children }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no Github'
    />
  </div>
)

export default Search
