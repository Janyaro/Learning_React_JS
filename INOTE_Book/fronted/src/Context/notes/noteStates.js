import { useState } from "react";
import NoteContext from "./noteContext";
import { data } from "react-router-dom";


const NoteState = (props) =>{
 const noteInitial = [
    {
        "_id": "6857d01094c0f3a7351912eb",
        "user": "6857ac723e1cc5f67cf5b17b",
        "title": "myfirsttitle",
        "description": "main hoon kon",
        "tag": "personal",
        "timeStamp": "2025-06-22T09:42:40.901Z",
        "__v": 0
    },
    {
        "_id": "6857d01094c0f3a73519dd12eb",
        "user": "6857ac723e1cc5f67cf5b17b",
        "title": "my second note",
        "description": "kya howa hai ",
        "tag": "personal",
        "timeStamp": "2025-06-22T09:42:40.901Z",
        "__v": 0
    }
]
const [note , setNote] = useState(noteInitial);
const addNote = (title , description , tag)=>{
    const notedata =  {
        "_id": "6857d01094c0f3a73519dd12eb",
        "user": "6857ac723e1cc5f67cf5b17b",
        "title": title,
        "description": description,
        "tag": tag,
        "timeStamp": "2025-06-22T09:42:40.901Z",
        "__v": 0
    }
   setNote(prevNotes => [...prevNotes, notedata]);
    
}
const deleteNote = (id)=>{
    const newNote = note.filter((note) =>note._id !== id)
    setNote(newNote);
}
const editNote = (id , title , description , tag)=>{
    // fetch notes 
    const response = fetch (URL, {
        method:'POST',
       headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
    })
    //   return response.JSON();
    
    // logic to edit a note 
    for (let index = 0; index < note.length; index++) {
        const element = note[index];
        if(element._id === id){
            element.title = title;
            element.description = description;
            element.tag = tag
        }
    }
}
return (
        <NoteContext.Provider value={{note , addNote , deleteNote , editNote}}>
         {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;