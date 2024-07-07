import "../../../scss/ProjectCard.scss";
import { useState } from "react";
interface IProps {
    title: string;
    description: JSX.Element | JSX.Element[];
    link: string;
    linkText?: string;
}

export default function ProjectCard({
    title,
    description,
    link,
    linkText,
}: IProps) {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="project-card-container"
        >
            {/* add the div for when mouse hovers over th card */}
            {hover && (
                <a href={link}>
                    <div className="hover-message">{linkText ?? "Go to project."}</div>
                </a>
            )}
            <div className="project-card">
                <div className="project-card-title">
                    <h1>{title}</h1>
                </div>
                <div className="project-card-body">
                    <div className="blog-card-text">{description}</div>
                </div>
            </div>
        </div>
    );
}
