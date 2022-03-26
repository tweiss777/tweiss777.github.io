import '../styles/ExperienceItem.css';

export function ExperienceItem(props)
{

    var bulletPoints = props.bulletPoints;
    
    bulletPoints = bulletPoints.map(content => 
        <li>{content}</li>)


    return(
            <section id="experienceItem">
                <p className="date">{props.date}</p>
                <h3>{props.titleName}</h3>
                 
                <ul>
                    {bulletPoints}
                </ul>
            </section>
			



    )


}