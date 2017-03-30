'use strict'

import React from 'react'

const UserSummary = ({ userSummary }) => (
  <div className='user-summary'>
    <img src={userSummary.avatar_url} alt='Foto de perfil' />
    <h1>
      <a href={userSummary.html_url}>{userSummary.username}</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: {userSummary.repos}</li>
      <li>Seguidores: {userSummary.followers}</li>
      <li>Seguindo: {userSummary.following}</li>
    </ul>
  </div>
)

export default UserSummary
