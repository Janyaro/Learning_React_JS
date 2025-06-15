import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      
<nav className={`navbar navbar-expand-lg navbar-${this.props.mode==="black"?'light':'dark'} bg-${this.props.mode==="black"?'light':'dark'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{this.props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input"  type="checkbox" onClick={this.props.toogleMode} role="switch" id="switchCheckDefault" />
  <label className={`form-check-label text-${this.props.mode==="black"?'dark':'light'}`}  htmlFor="switchCheckDefault">{this.props.mode ==="black" ? "Dark mode enable" :"Light mode enable"
    }</label>
</div>
    </div>
  </div>
</nav>
    )
  }
}

export default Navbar
