import { useContext } from "react"
import NoteContext from "../Context/notes/noteContext"
export default function Note({note}) {
      const context = useContext(NoteContext);
      const {deleteNote} = context;
  return (
    <div className="col-md-3 mb-4" >
      <div className="card h-100" key={note._id}>
        <div className="card-body" >
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button type="button" className="btn btn-danger mx-2" onClick={()=>{deleteNote(note._id)}}>Delete</button>
          <button type="button" className="btn btn-success">Update</button>
        </div>
      </div>
    </div>
  )
}
