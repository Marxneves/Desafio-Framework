import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Navbar() {
  return (
    <header>
      <nav>
        <Link to={ '/albums' }>Álbuns</Link>
        <Link to={ '/posts' }>Postagens</Link>
        <Link to={ '/todos' }>To-Dos</Link>
      </nav>
    </header>
  )
}

export default Navbar
