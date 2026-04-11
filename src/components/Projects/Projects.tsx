import ProjectCard from "./Components/ProjectCard";
import ProjectCardGroup from "./Components/ProjectCardGroup";
import ProjectsHeader from "./Components/ProjectsHeader";
import {projects} from '../../data/projects.ts'

export default function Projects() {
    return (
        <>
            <ProjectsHeader/>
            <div>
                <ProjectCardGroup>
                    {projects.map((project, i) =>
                        <ProjectCard
                           index={i + 1} title={project.title}
                           description={project.description}
                           repo={project.repo ?? ''}
                           link={project.link ?? ''}
                        />
                    )}
                </ProjectCardGroup>
            </div>
        </>
    );
}
