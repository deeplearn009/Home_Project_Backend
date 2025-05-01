import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className={styles.container}>
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/basket'>Basket</Link>
                <Link to='/wishlist'>Wishlist</Link>
            </nav>
        </header>
    </div>
  )
}

export default Header
