
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Contact,Experience,Hero,Navbar,Tech,Works} from './components';

import About from "./components/About";

const  App=()=> {
  return (

    <BrowserRouter>

    <div className="relative z-0   bg-primary">


    <Navbar/>

    <Routes>

        <Route path="/" element={ <Hero/> } />
      
        <Route  path="about" element={<About/> } />
        <Route  path="experience" element= {<Experience/>} />
        <Route  path="tech" element={<Tech/>} />
        <Route  path="work" element={<Works/>} />
        <Route  path="contact" element={<Contact/>} />



      </Routes>
      </div>
    </BrowserRouter>
  ) 
}

export default App
