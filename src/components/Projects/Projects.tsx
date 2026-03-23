import ProjectCard from "./Components/ProjectCard";
import ProjectCardGroup from "./Components/ProjectCardGroup";
import ProjectsHeader from "./Components/ProjectsHeader";
export default function Projects() {
    return (
        <>
            <ProjectsHeader />
            <div>
                <ProjectCardGroup>
                    {projects.map((project) =>{ return <ProjectCard title={project.title} description={
                        <p>
                            {project.description}
                        </p>
                    } link={project.link}
                    />})}
                </ProjectCardGroup>
            </div>
        </>
    );
}
