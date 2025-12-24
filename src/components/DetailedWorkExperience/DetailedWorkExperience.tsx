import "../../scss/DetailedWorkExperience.scss";
import { JSX } from 'react'
interface IProps {
  name: string;
  position: string;
  date: string;
  company_img: string;
  children?: JSX.Element | JSX.Element[];
}

export default function DetailedWorkExperience(props: IProps) {
  return (
    <div>
      <div className="work-experience-container">
        <div className="work-experience-header">
          <h1 className="company-name">{props.name}</h1>
          <img
            className="company-logo"
            src={props.company_img}
            alt="company logo"
          />
        </div>
        <div className="position-date-container">
          <h2 className="position">{props.position}</h2>
          <h3 className="date">{props.date}</h3>
        </div>
        {/* conditionally render children */}
        <div className="description-container">
          {props.children}
        </div>
      </div>
    </div>
  );
}
