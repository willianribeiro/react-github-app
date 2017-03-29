'use strict'

import React from 'react'

const UserSummary = ({ children }) => (
  <div className='user-summary'>
    <img src='https://avatars2.githubusercontent.com/u/3102551?v=3' alt='Foto de perfil' />
    <h1>
      <a href='https://github.com/willianribeiro'>Willian Ribeiro</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 19</li>
      <li>Seguidores: 20</li>
      <li>Seguindo: 36</li>
    </ul>
  </div>
)

export default UserSummary
