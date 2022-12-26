import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <a href="/" className="title">
                {/* add icon */}
                Abstract | Help Center
            </a>
            
            <ul>
                <li>
                    
                        <a href="/submitrequest" className="submitrequest">Submit request</a>
                    
                    
                </li>
                <li>
                   
                        <a href="/singin" className="singin">Sign In</a>
                    
                    
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar