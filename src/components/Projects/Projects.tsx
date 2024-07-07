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
                            <ul>
                                <li>
                                    Developed a .Net Core MVC based web application using
                                    bootstrap that analyzes job descriptions against a resume,
                                    determining which job is a good fit, and recommends what
                                    skills are missing or needs improvement based on matching and
                                    missing keywords.
                                </li>
                                <li>
                                    Utilized Python for handling natural language processing and
                                    text mining, Redis Queue and Flask framework for handling
                                    deployment of the algorithm as a restful api to heroku.
                                </li>
                            </ul>
                        }
                        link="https://github.com/tweiss777/CapstoneAPI/tree/master"
                    />
                    <ProjectCard
                        title="TypeOff (iOS Game)"
                        description={
                            <ul>
                                <li>
                                    Collaborated with a team of seven to develop a type-racing
                                    game that measures a user’s typing speed and accuracy.
                                </li>

                                <li>
                                    Demonstrated strong analytical and problem solving skills
                                    assisting the project manager in implementing the in-game
                                    algorithm in Swift using xCode.
                                </li>
                                <li>
                                    Coordinated development between iOS and Android dev teams to
                                    deliver a coherent UX across both platforms
                                </li>
                            </ul>
                        }
                        link="https://bitbucket.org/tweiss777/typeoff/src/master/"
                    />
                </ProjectCardGroup>
            </div>
        </>
    );
}
