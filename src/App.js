import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home";
import './App.css';
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
const App=()=>{
  return(
    <div className="app">
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App;