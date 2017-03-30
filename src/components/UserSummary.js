'use strict'

import React, { PropTypes } from 'react'

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

UserSummary.propTypes = {
  userSummary: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserSummary
