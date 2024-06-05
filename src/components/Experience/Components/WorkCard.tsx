import '../../../scss/WorkCard.scss';
// This will house the work card
interface IProps {
  name: string;
  position: string;
  date: string;
  company_img: string;
}

export default function WorkCard({ name, position, date, company_img }: IProps) {
  return (
    <div className="work-card">
      <div className="work-card-content">
        <div className="work-card-img">
          <img src={company_img} alt={name} />
        </div>
        <div className="work-card-text">
          <h1>{name}</h1>
          <h2>{position}</h2>
        </div>
      </div>
      <div className="work-card-date">
        <h2>{date}</h2>
      </div>
    </div>
  );
}
