import './styles/projects.css';
import { projects } from '../Information/projects';
import { Fade } from 'react-reveal';
import { ProjectItem } from './SubComponents/ProjectItem';
export const Projects = () =>
{

    const projs = projects.map(proj =>
        {

            return <ProjectItem key={proj.Title} bulletPoints={proj.Description} titleName={proj.Title} date={proj.Date} projectLink={proj.Link} />
        });


        return(
            <section id="projects">
                <Fade botttom>
                    <h2>Academic Projects</h2>
                    {projs}
                </Fade>
            </section>
        );

}