import "../../../scss/TechStackCard.scss";
interface IProps {
    name?: string;
    img?: string;
}
export default function TechStackCard({ name, img }: IProps) {
    return (
        <div className="card-container">
            {/* to be a column based card*/}
            <div>
                <h1>{name}</h1>
            </div>

           {img && <div>
                <img src={img} alt="techstack" />
            </div>}
        </div>
    );
}
