import React from 'react'

export default function projectCard() {
  return (
    <div className="card" style= {{width: "18rem;"}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  <div className='tags'>
    <a className="btn btn-primary" href="/" role="button">Link</a>
<button className="btn btn-primary" type="submit">Button</button>
<input className="btn btn-primary" type="button" value="Input" />
<input className="btn btn-primary" type="submit" value="Submit" />
<input className="btn btn-primary" type="reset" value="Reset" />
  </div>
  <div className="card-body">
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
</div>
  )
}
