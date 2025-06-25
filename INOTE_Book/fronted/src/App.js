import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ use react-router-dom
import User from "./Components/User";
import NoteState from "./Context/notes/noteStates";

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
        <Routes>
          <Route exact path='/home' element={<Home />} />
          
          <Route exact path='/user' element={<User />} />
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
