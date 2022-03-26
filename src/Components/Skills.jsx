// css imports
import './styles/Skills.css';
import './styles/globalStyles.css';

// js imports 
import {skills} from '../Information/skills';
import {Fade} from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Skills component 
export function Skills() 
{
    
    let backendSkills = skills.Backend.map(skill =>
    {
        return <li className='skills-point' key={skill}>{skill}</li>
    });
    
    
    let frontendSkills = skills.Frontend.map(skill =>
        {
            return <li className='skills-point' key={skill}>{skill}</li>
        });

    return(
        <section id="skills">
            <Fade bottom>
                <h2>Tech Stack</h2>
                
                <div className="section-grid">
                    <div className="div-fontawesome">
                        <FontAwesomeIcon style={{color:'white'}} className="fontawesome-icon" icon={['fab','stack-overflow']} size="10x" />
                    </div>
                    <div className={'skills-grid'}>
                        <ul className={'skills-proficient'}>
                            <h3 style={{textDecoration: 'underline'}}> Front End</h3>
                            {frontendSkills}
                        </ul>
                        <ul className={'skills-familiar'}>
                            <h3 style={{textDecoration:'underline'}}> Back end</h3>
                            {backendSkills}
                        </ul>
                    </div>
                    

                </div>
                
                
            </Fade>
            
        </section>


    );

    }