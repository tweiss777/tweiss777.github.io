import "../../../scss/Services.scss";

interface IProps {
    title: string;
    closing: string;
    children: React.ReactNode;
}

export default function ServicesGroup({ title, closing, children }: IProps) {
    return (
        <section className="services-section">
            <h2 className="services-title">{title}</h2>
            <div className="services-grid">
                {children}
            </div>
            <p className="services-closing">{closing}</p>
        </section>
    );
}
