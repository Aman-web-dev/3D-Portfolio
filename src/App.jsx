
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Contact,Experience,Hero,Navbar,Tech,Works} from './components';

import About from "./components/About";

const  App=()=> {
  return (

    <BrowserRouter>

    <div className="relative z-0   bg-primary">


    <Navbar/>
    <Hero/> 
    <About/> 
    <Experience/>
    <Tech/>
    <Works/>
    <Contact/>

    <Routes>

        {/* <Route path="/" element={ } /> */}
      
        {/* <Route  path="about" element={} />
        <Route  path="experience" element= {} />
        <Route  path="tech" element={} />
        <Route  path="work" element={} />
        <Route  path="contact" element={} /> */}



      </Routes>
      </div>
    </BrowserRouter>
  ) 
}

export default App
