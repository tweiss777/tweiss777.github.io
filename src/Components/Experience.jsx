import { ExperienceItem } from "./SubComponents/ExperienceItem";
import { jobs } from "../Information/jobs";
import "./styles/Experience.css"
import { Fade } from "react-reveal";
import "./styles/globalStyles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Experience component 
export function Experience()
{


	const experiences = jobs.map(job =>
			<ExperienceItem key={job.title} bulletPoints = {job.description} titleName = {job.title} date = {job.date} />
			
		);


	return(
			<section id="experience">
				<Fade bottom>
					<h2>Experience</h2>
					<div className="section-grid">
						<div>
							{experiences}							
						</div>
						
						<div className="div-fontawesome">
							<FontAwesomeIcon className="fontawesome-icon" icon={['fas','briefcase']}  size="10x"/ >
						</div>
					</div>
					
				</Fade>
				
			</section>

		
	)
}