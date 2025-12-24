import "../../../scss/WorkCard.scss";
interface IProps {
  name: string;
  position: string;
  date: string;
  company_img: string;
  cardMargin?: string;
  description?: JSX.Element | JSX.Element[];
  handleOnClick: (work: any) => void;
}

export default function WorkCard({
  name,
  position,
  date,
  company_img,
  cardMargin = "right",
  description,
  handleOnClick,
}: IProps) {
  function onClickExperience() { const work = { name, position, date, company_img, description: description ?? null, };
    handleOnClick(work);
  }
  return (
    <div onClick={onClickExperience} className="work-card-container">
      <div className="work-card-dot"></div>
      <div className={`work-card-date date-${cardMargin}`}>
        <h2>{date}</h2>
      </div>
      <div className={`work-card position-${cardMargin}`}>
        <div className="work-card-content">
          <div className="work-card-img">
            <img src={company_img} alt={name} />
          </div>
          <div className="work-card-text">
            <h1>{name}</h1>
            <h2>{position}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
