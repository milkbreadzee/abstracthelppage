import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
        <div className="container">
            <h1 className='helptitle'>How can we help?</h1>
            <div className="searchbar">
            <input className='searchb' type="search" id="site-search" name="q" placeholder='search'/>
            </div>
        </div>
    </div>
  )
}

export default Header