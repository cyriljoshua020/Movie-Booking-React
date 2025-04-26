import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => (
  <div className={styles.Menu}>
    <nav>
      <NavLink exact activeClassName='active_nav' to='/'>
        Home
      </NavLink>
      <span> | </span>
      <NavLink exact activeClassName='active_nav' to='/movies'>
        Movies
      </NavLink>
    </nav>
  </div>
)

export default Menu
