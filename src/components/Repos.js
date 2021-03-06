'use strict'

import React, { PropTypes } from 'react'

const Repos = ({ title, className, repos }) => (
  <div className={className}>
    <h2>{`${title} (${repos.length})`}</h2>
    <ul>
      {
        repos.map((item) => (
          <li key={item.url}>
            <a href={item.html_url}>{item.name}</a>
          </li>
        ))
      }
    </ul>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  repos: PropTypes.array
}

export default Repos
