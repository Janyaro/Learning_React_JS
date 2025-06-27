import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar sticky-top  navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
  </div>
   <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/skill">Skill</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='/project'>Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='/contact'>Contact</a>
        </li>
      </ul>
    </div>
</nav>
  )
}
