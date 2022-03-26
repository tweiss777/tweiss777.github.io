// import React, { useState } from "react";
import './styles/main.css'

// Components 
import { Header } from './Header';
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Contact } from "./Contact";
import {Skills}  from './Skills';
import { About } from './About';

// React Bootstrap imports
import {NavigationBar} from "./Navbar";
import { library } from '@fortawesome/fontawesome-svg-core';

// Font awesome
import {fas} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Projects } from './Projects';


// add icons to library where we can use it in all of our application 
library.add(fab,fas);


export const Main = () =>
{

    // the first var is for darkMode 
    // the second is our eventHandler for darkmode
    // create an event handler on changing the state of darkMode
    // const [darkMode, setDarkMode] = useState(false);

    return(
        <div id="main-container" >
                {/* navbar */}
                <NavigationBar/>
                <div>
                    {/* header section */}
                    <Header />
                    
                    {/* About  */}
                    <About />

                    {/* Experience */}
                    <Experience />
                    
                    {/* skills */}
                    <Skills />
                    
                    {/* Education */}
                    <Education />
                    
                    {/* projects */}
                    <Projects />
                    
                    {/* contact */}
                    <Contact />
                </div>
            </div>
    );
}

