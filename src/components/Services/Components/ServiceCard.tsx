type ServiceCardProps = {
    title: string,
    description: string,
    bullets?: string[],
    align?: "left" | "right",
}
export default function ServiceCard({title, description, bullets, align}: ServiceCardProps) {

    return (
        <div className={`service-card ${align ? `card-${align}` : ''}`}>
            <h2>{title}</h2>
            <p>{description}</p>
            {bullets &&
                <ul>
                    {bullets.map(bullet => <li>{bullet}</li>)}
                </ul>
            }
        </div>
    )
}