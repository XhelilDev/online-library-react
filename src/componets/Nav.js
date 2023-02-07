import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const logo = '/images/librarylogo.jpg';
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
        <Link to="/" className="navbar-brand"><img src={logo} alt="Logo" style={{ height: '100px', width: 'auto' }} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item" style={{fontSize:'18px',fontWeight:'600'}}>
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item"style={{fontSize:'18px',fontWeight:'600'}}>
                <Link to="/books" className="nav-link">Books</Link>
            </li>
            <li className="nav-item"style={{fontSize:'18px',fontWeight:'600'}}>
                <Link to="/bookbyauthoryear" className="nav-link">Authors</Link>
            </li>
            <li className="nav-item"style={{fontSize:'18px',fontWeight:'600'}}>
                <Link to="/bookbygenre" className="nav-link">Topics</Link>
            </li>
            <li className="nav-item"style={{fontSize:'18px',fontWeight:'600'}}>
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Nav