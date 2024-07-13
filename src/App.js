import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsHome from "./components/Projects/ProjectsHome";
import Navbar from "./components/Home/Navbar";
import { useState } from "react";
import Cursor from "./components/Home/Cursor";
import forbg1 from './assets/forbg1.png'
import forbg2 from './assets/forbg2.png'
import ForBg from "./components/Home/ForBg";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  const [value, setValue] = useState(-100);
  const [valueY, setValueY] = useState(-100);
  const [click, setClick] = useState(false);
  const [show,setShow] = useState(false)
  const [cursorClicked,setcursorClicked]=useState(false)
  
  return (
    <Router>
      <div
      
        onMouseEnter={function() {setClick(false)}}
        onMouseDown={()=>setcursorClicked(true)}
        onMouseUp={()=>setcursorClicked(false)}
        onMouseMove={function (e) {
          setValue(e.pageX);
          setValueY(e.pageY);
          setcursorClicked(false)
          
        }}
        className="App overflow-hidden cursor-none h-screen bg-gradient-to-tr from-[#090F13] to-[#153B47] font-font1 "
      >
        <div className="h-full relative bg-center p-14 ">
        <ForBg />
        <Cursor setcursorClicked={setcursorClicked} cursorClicked={cursorClicked} show={show} click={click} setClick={setClick} value={value} valueY={valueY} />
        <Navbar click={click} setClick={setClick} />
        <Routes>
          <Route path="/" element={<Home cursorClicked={cursorClicked} setcursorClicked={setcursorClicked} click={click} setClick={setClick} show={show} setShow={setShow} />}></Route>
          <Route path="/projects" element={<ProjectsHome setClick={setClick} />} />
          <Route path="/about" element={<About setClick={setClick} />} />
          <Route path="/contact" element={<Contact setClick={setClick} />} />
        </Routes>
        </div>

        
      </div>
    </Router>
  );
}

export default App;
