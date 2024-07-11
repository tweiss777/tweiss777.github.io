import "../../scss/DetailedWorkExperience.scss";
interface IProps {
  name: string;
  position: string;
  date: string;
  company_img: string;
  description?: string[];
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
        <div className="description-container">
          <ul>
            <li>
              Collaborated within a team of 4 full-stack developers,
              contributing to the development of a fintech platform for capital
              market dealers combining algorithms systems.
            </li>
            <li>
              Improved performance and scalability by seamlessly migrating a
              large legacy codebase to Node.JS, Express, React, Vue.JS,
              Javascript, and Typescript, enhancing code integrity, and
              facilitating streamlined maintenance of complex systems.
            </li>
            <li>
              Managed SQL and NoSQL databases, proficiently navigating between
              MongoDB and MySQL to tailor solutions to project-specific
              requirements.
            </li>
            <li>
              Utilized AWS Lambda; Revamp existing payment processors;
              seamlessly integrating diverse payment APIs, resulting in enhanced
              post-payment functionality.
            </li>
            <li>
              Implemented efficient deployment pipelines using AWS CI/CD,
              Docker, using Jira for task management, S3 for cloud storage, and
              GIT for version control, enhancing the reliability of software
              releases.
            </li>
            <li>
              Increased customer base from 40,000 to 60,000 after revamping key
              features.
            </li>
          </ul>
        </div>
      </div>
      <p>{props.description}</p>
    </div>
  );
}
