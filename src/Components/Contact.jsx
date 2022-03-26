import './styles/contact.css';

import { Fade } from 'react-reveal';

export function Contact() {


	return(
		<section id="contact">
			<Fade bottom>
				<div className="container-contact">
					<p>Get in touch via email</p>
					<a className='contact-link' href="mailto:tweiss747@gmail.com">tweiss747@gmail.com
					</a>
				</div>
			</Fade>
		</section>
		);
}