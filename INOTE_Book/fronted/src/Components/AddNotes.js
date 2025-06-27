import React, { useContext, useState } from 'react';
import NoteContext from '../Context/notes/noteContext';

export default function AddNotes() {
  const context = useContext(NoteContext); // ✅ useContext, not createContext
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", desc: "", tag: "default" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.desc, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className='container my-3'>
      <h4>Add Note</h4>
      <form>
        <div className="mb-3 my-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name='title'
            value={note.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name='desc'
            value={note.desc}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
