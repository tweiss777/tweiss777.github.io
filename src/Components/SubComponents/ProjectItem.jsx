import '../styles/ProjectItem.css';



export const ProjectItem = (props) =>
{
    var bulletPoints = props.bulletPoints;
    
    bulletPoints = bulletPoints.map(content => 
        <li>{content}</li>)

    const projectLink = props.projectLink? <a className="project-link" href={props.projectLink}>Link To Project</a>: "";
    
    return(
            <section id="projectItem">
                <div className="item-right-section">
                    <p clasName="date">{props.date}</p>
                    {projectLink}
                </div>
                
                <h3>{props.titleName}</h3>

                <ul>
                    {bulletPoints}
                </ul>
            </section>
    )
}