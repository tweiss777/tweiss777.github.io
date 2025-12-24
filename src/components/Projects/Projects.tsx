import ProjectCard from "./Components/ProjectCard";
import ProjectCardGroup from "./Components/ProjectCardGroup";
import ProjectsHeader from "./Components/ProjectsHeader";
export default function Projects() {
    return (
        <>
            <ProjectsHeader />
            <div>
                <ProjectCardGroup>
                    <ProjectCard
                        title="SmartJobs (Python Program W/ Dotnet Web App)"
                        description={
                                <p>
                                    Developed a .Net Core MVC based web application using bootstrap
                                    that analyzes job descriptions against a resume, determining
                                    which job is a good fit, and recommends what skills are missing or
                                    needs improvement based on matching and missing keywords.
                                </p>
                        }
                        link="https://github.com/tweiss777/CapstoneAPI/tree/master"
                    />
                    <ProjectCard
                        title="TypeOff (iOS Game)"
                        description={
                            <p> A type-racing game that measures a user’s typing speed and accuracy.</p>
                        }
                        link="https://bitbucket.org/tweiss777/typeoff/src/master/"
                    />
                    <ProjectCard
                        title="Admin Dashboarrd"
                        description={
                            <p>
                            A basic admin dashboard with user authentication and authorization, CRUD operations, and filtering using React for the frontend and Fastify for the backend
                            </p>
                        }
                        link="https://github.com/tweiss777/ReactAdminDashboard"
                    />

                    <ProjectCard
                        title="Web calculator"
                        description={
                            <p>
                            A calculator web app mimicking a real calculator based on HTML, CSS, and JavaScript and the iOS theme. 
                            </p>
                        }
                        link="https://github.com/tweiss777/basic-calculator"
                    />
                </ProjectCardGroup>
            </div>
        </>
    );
}
