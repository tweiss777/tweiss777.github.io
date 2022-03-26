import { about } from '../Information/about';
import './styles/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-reveal';

export const About = () => {

	return (
		<section id="about">
			<Fade>
				<h2>About</h2>
				{/* make a flexbox where on one side you display a fontawesome icon and on the other side your text */}
				<div className='about_container'>
					<div className='fontawesome-container'>
						<FontAwesomeIcon className="fontawesome-icon" icon={['fa', 'question']} size="10x" />
					</div>
					<div>
						<p>{about.about}</p>
					</div>
				</div>
			</Fade>
			
		</section>
	);


}


