import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
let [mode , setMode] = useState("black")

const toogleMode = () =>{
  if(mode === "black"){
    setMode("white");
  console.log('Toogle mode update')
  }
  else{
    setMode("black");
  }
}
  return (
   
   <div style={{
    backgroundColor:mode === "black" ? "white" : "black",
    color:mode === "black"?"white" : "black"
   }}>
   <Navbar toogleMode={toogleMode} mode={mode} title="Navigation"/>
   <News mode={mode}/>
   </div>
  );
}

export default App;
