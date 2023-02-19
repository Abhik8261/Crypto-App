import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Crypto</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/exchanges">Exchanges</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/coins">Coins</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header