import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Contact, Experience, Hero, Navbar, Tech, Works } from "./components";

import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0   bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        <Contact />

        <Routes></Routes>
      </div>
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-blue-500/30"></div>
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-blue-500/30"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-blue-500/30"></div>
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-blue-500/30"></div>
    </BrowserRouter>
  );
};

export default App;
