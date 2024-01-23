import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import About from "./components/about";
import Home from "./components/Home";
import Project from "./components/project";
import Resume from "./components/resume";
import Header from "./components/header";
import Footer from "./components/footer";
import "./style.css";
// import homebg from "./assets/home-bg.jpg";

function App() {

  return (
    <Router>
    {/* <div className="text-center"> */}
    <div className="home">
    {/* <div className="imgDiv">
        <img src={homebg} alt="bg">
        </img> */}
        <Header/>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
      </Routes>
      <Footer />
      {/* </div> */}
      
    </div>
  </Router>
  );
}

export default App;
