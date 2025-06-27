
import Note from './Note';

import React, { useContext } from 'react'
import NoteContext from '../Context/notes/noteContext'
import AddNotes from './AddNotes';
export default function Home() {
const context = useContext(NoteContext);
  const {note } = context;

  return (
    <>
    <AddNotes/>
      <h4>Your Note</h4>
     <div className="row">
  {note.map((note, index) => (
    <Note  index={index} note={note}/>
  ))}
</div>

    </>
  )
}
