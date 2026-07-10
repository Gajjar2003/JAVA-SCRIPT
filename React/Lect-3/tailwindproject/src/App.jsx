import Navbar from "./Component/Navbar";
import "./App.css";
import Hero from "./Component/Hero";
import Project from "./Component/Project";
import Education from "./Component/Education";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;