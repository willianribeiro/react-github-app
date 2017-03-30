'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = ({ children }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no Github'
      onKeyUp={(e) => {
        const ENTER = 13
        const key = e.which || e.keyCode
        const value = e.target.value

        if (key === ENTER) {
          ajax()
            .get(`https://api.github.com/users/${value}`)
            .then((result) => console.log(result))
        }
      }}
    />
  </div>
)

export default Search
