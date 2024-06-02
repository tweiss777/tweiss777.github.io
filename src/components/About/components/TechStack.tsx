import '../../../scss/Techstack.scss';
interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function TechStack({ children }: IProps) {
  return (
    <div className='tech-stack-container'>
      <p>
        Tech stack that I use to build and bridge the gap between front and back
      </p>
        <div className='carousel-container'>

            <div className="tech-stack">{children}</div>
            <div className="tech-stack">{children}</div>
        </div>
      
    </div>
  );
}
