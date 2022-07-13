import './App.css';
import { Routes, Route } from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import particles from './utils.js/particles';


function App() {
const handleInit=async(main)=>{
  await loadFull(main)
}

  return (
    <div className="App">
      {/* partciles js */}
      <Particles id="particles" options={particles} init={handleInit}/>

      {/* navbar */}
<Navbar/>
      {/* main page content */}
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/skills' element={<Skills/>} />

      </Routes>
    </div>
  );
}

export default App;
