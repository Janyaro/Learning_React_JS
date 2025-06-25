import { useState } from "react";
import NoteContext from "./noteContext";


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
        "_id": "6857d01094c0f3a7351912eb",
        "user": "6857ac723e1cc5f67cf5b17b",
        "title": "my second note",
        "description": "kya howa hai ",
        "tag": "personal",
        "timeStamp": "2025-06-22T09:42:40.901Z",
        "__v": 0
    }
]
const [note , setNote] = useState(noteInitial);

return (
        <NoteContext.Provider value={{
            note,setNote
            }}>
         {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;