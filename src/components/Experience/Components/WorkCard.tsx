import "../../../scss/WorkCard.scss";
interface IProps {
    name: string;
    position: string;
    date: string;
    company_img: string;
    cardMargin?: string;
}

export default function WorkCard({
    name,
    position,
    date,
    company_img,
    cardMargin = "right",
}: IProps) {
    return (
        <div className="work-card-container">
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
