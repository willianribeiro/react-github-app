'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='search'>
          <input
            type='search'
            placeholder='Digite o nome do usuário no Github'
          />
        </div>

        <div className='user-info'>
          <img src='https://avatars2.githubusercontent.com/u/3102551?v=3' alt='Foto de perfil' />
          <h1>
            <a href='https://github.com/willianribeiro'>Willian Ribeiro</a>
          </h1>

          <ul className='repos-info'>
            <li>Repositórios: 19</li>
            <li>Seguidores: 20</li>
            <li>Seguindo: 36</li>
          </ul>

          <div className='actions'>
            <button>Ver repositórios</button>
            <button>Ver favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositórios:</h2>
            <ul>
              <li>
                <a href=''>Nome do repositório</a>
              </li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favoritos:</h2>
            <ul>
              <li>
                <a href=''>Nome do repositório</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default App
