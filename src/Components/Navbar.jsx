import {Navbar,Nav} from 'react-bootstrap';
export const NavigationBar = props => 
{
	return(

		<Navbar style={{padding:'0 4.5rem 1.0rem'}} className='navbar-dark' expand="lg">
			<Navbar.Brand style={{fontSize:'2.5rem',fontWeight:'bold'}} href="#home">TW</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ms-auto">
				<Nav.Link style ={{padding: '0 18px', fontSize:'1.2rem'}} href="#about">About</Nav.Link>
				<Nav.Link style ={{padding: '0 18px', fontSize:'1.2rem'}} href="#experience">Experience</Nav.Link>
				<Nav.Link style ={{padding: '0 18px', fontSize:'1.2rem'}} href="#skills">Tech Stack</Nav.Link>
				<Nav.Link style ={{padding: '0 18px', fontSize:'1.2rem'}} href="#education">Education</Nav.Link>
				<Nav.Link style ={{padding: '0 18px', fontSize:'1.2rem'}} href="#contact">Contact</Nav.Link>
				
			</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}