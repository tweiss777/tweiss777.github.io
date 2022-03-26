import './styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-reveal';

export function Header(){
	return(

		<div style={{padding: '0 0'}}>
		
		{/* boxes here */}
		<div id='box1' className='box'></div>
		<div id='box2' className='box reverse-floating'></div>
		<div id='box3' className='box'></div>
		<div id='box4' className='box reverse-floating'></div>
		<section id="header">
			{/* box for showing my linkedin and github */}
			<Fade bottom>
				<div className="dashboard">
					<h1>Tal Weiss</h1>
					<div className="link-container">
						<a className={'link'} href="https://github.com/tweiss777"><FontAwesomeIcon style={{color:'purple '}} icon={['fab','github']} size='2x'/>Github</a>
						<a className={'link'} href="https://bitbucket.org/tweiss777/"><FontAwesomeIcon style={{color: '#205081'}} icon={['fab','bitbucket']} size='2x'/>Bitbucket</a>
						<a className={'link'} href="https://linkedin.com/in/teeweiss"><FontAwesomeIcon style={{color: '#0e76a8'}} icon={['fab','linkedin']} size='2x'/>LinkedIn</a>
						<a className={'link'} href="#projects"><FontAwesomeIcon style={{color: '#ffd800'}} icon={['fas','pen']} size='2x'/>Projects</a>
					</div>
					
				</div>
				{/* <FontAwesomeIcon icon={['fa','desktop']} size='10x' /> */}
			</Fade>
			
		</section>
		</div>
	);
}