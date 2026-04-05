import ProjectCard from "./Components/ProjectCard";
import ProjectCardGroup from "./Components/ProjectCardGroup";
import ProjectsHeader from "./Components/ProjectsHeader";
import { projects } from '../../data/projecsts.ts'
export default function Projects() {
    return (
        <>
            <ProjectsHeader />
            <div>
                <ProjectCardGroup>
                    {projects.map((project, i) => <ProjectCard index={i + 1} title={project.title} description={project.description}
                     link={project.link}
                    />)}
                </ProjectCardGroup>
            </div>
        </>
    );
}
