import React, { useContext , useEffect } from 'react'
import NoteContext from '../Context/notes/noteContext'

export default function Home() {
  const context = useContext(NoteContext);
  const {note , setNote} = context;
  




  return (
    <>
      <div className='container my-3'>
      <h4>Add Note</h4>
<form>
  <div class="mb-3 my-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
      <h4>Your Note</h4>
      {note.map((note , index) =>{
        return (
          <div class="card my-3 " style= {{width: "100%"}}  key={index}> 
  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{note.tag} - {note.timeStamp}</h6>
    <p class="card-text">{note.description}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        )
      })}
    </>
  )
}
