import '../../../scss/Techstack.scss';
interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function TechStack({ children }: IProps) {
  return (
    <div className='tech-stack-container'>
      <h1>
        Tech stack I work with 
      </h1>
        <div className='carousel-container'>

            <div className="tech-stack">{children}</div>
            <div className="tech-stack">{children}</div>
        </div>
      
    </div>
  );
}
