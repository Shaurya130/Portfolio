import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience,  Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import herobg from "./assets/herobg.png";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div 
          className='bg-cover bg-no-repeat bg-center'
          style={{
            backgroundImage: `url(${herobg})`
          }}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;