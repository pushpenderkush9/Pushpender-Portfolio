import { useEffect } from "react"
import Typewriter from 'react-typewriter-effect';
import Front from "./Front";

import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Dashboard () {
    
    return (
        <>
        <div className=" text-white bg-black ">
        <div className="font-extrabold text-5xl ">

         <Typewriter
                        text="Pushpender"
                        delay={500}
                        cursor
                        cursorStyle="_"
                        typeSpeed={150}
                        deleteSpeed={50}
                        loop={false}
                      /></div>
                    
                      <Front />
                      <About />
                      <Skills />
                      <Services />
                      <Projects />
                      <Contact />
                      </div>
        </>
    )
}