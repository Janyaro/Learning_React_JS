import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import './App.css';
import About from "./Components/About";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";

function App() {
  return (
  <>
  <Navbar />
  <Herosection />
  <About />
  <Skill />
  <Projects/>
  </>
  );
}

export default App;
