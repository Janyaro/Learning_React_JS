import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) =>{
   const s1 ={
    name :"Waseem Akram Janyaro",
    age:13

}
const [state , setState] = useState(s1);
const update = () =>{
    setTimeout(() => {
        setState({
            name : "Wasayo",
            age:33
        })
    }, 1000);
} 
return (
        <NoteContext.Provider value={{
            state:state,
            update:update
            }}>
         {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;