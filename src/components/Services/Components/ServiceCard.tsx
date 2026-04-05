import "../../../scss/Services.scss";

interface IProps {
    index: number;
    title: string;
    description: string;
    bullets?: string[];
}

export default function ServiceCard({ index, title, description, bullets }: IProps) {
    return (
        <div className="service-card">
            <div className="service-card-number">{String(index + 1).padStart(2, "0")}</div>
            <h2 className="service-card-title">{title}</h2>
            <p className="service-card-description">{description}</p>
            {bullets && bullets.length > 0 && (
                <ul className="service-card-bullets">
                    {bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
