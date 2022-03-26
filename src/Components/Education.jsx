import "./styles/Education.css";
import "./styles/globalStyles.css";
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Education = () => {

    // here you should render your education dynamically
    


    return (


        <section id="education">
            <Fade>
                <h2>Education</h2>
                <div className="section-grid education_grid">
                    <div style={{ margin: 'auto 2%' }}>
                        <div>
                            <h3><em>Israel Tech Challenge</em> Tel Aviv, Israel (2022 Cohort)</h3>
                            <ul>
                                <li>Full stack developer bootcamp</li>
                            </ul>
                            <h3><em>Hofstra University</em> Hempstead, NY</h3>
                            <ul>
                                <li>MSc in Computer Science (2017 – 2018)</li>
                                <li>BA in Computer Science (2013 – 2017)</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="div-fontawesome">
                        <FontAwesomeIcon className="fontawesome-icon" icon={['fas', 'graduation-cap']} size="10x" />
                    </div>
                </div>


            </Fade>

        </section>
    );


};