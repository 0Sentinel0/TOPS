import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container-md ps-3 ps-lg-5">
      <a className="navbar-brand" href="/">TOPS</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/Planner">Planner</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Onboarder">Onboarder</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Goals">Goals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Activities">Activity</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
