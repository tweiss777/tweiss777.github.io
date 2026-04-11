import "../../../scss/ProjectCard.scss";
import "../../../scss/grid.scss"
import { useState } from "react";
import {GITHUB_ICON, WEBSITE_ICON} from "../../../data/iconLinks.ts";

interface IProps {
    index: number;
    title: string;
    description: string;
    repo?: string;
    link?: string
    linkText?: string;
    bullets?: string[];
}

export default function ProjectCard({
    index,
    title,
    description,
    repo,
    link,
    linkText,
    bullets,
}: IProps) {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="project-card"
        >
            {hover && (
                <div className={"hover-message"}>
                    {repo && <a href={repo}>
                        {linkText ?? "Go to Project"}
                    </a>}
                    {link && <a href={link}>
                        {linkText ?? "Go to Website"}
                    </a>}
                </div>
            )}
            <div className="project-info">
                <div className="project-info-number">{String(index).padStart(2, "0")}</div>
                <h3 className="project-info-title">{title}</h3>
                <p className="project-info-description">{description}</p>
                {bullets && bullets.length > 0 && (
                    <ul className="project-info-bullets">
                        {bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="row justify-end">
                {repo && (
                    <div className='link-container'>
                        <img
                            alt='repo-icon'
                            className='link'
                            src={GITHUB_ICON}
                        />
                    </div>
                )}
                {link && (
                    <div className='link-container'>
                        <img
                            alt='link-icon'
                            className='link'
                            src={WEBSITE_ICON}
                        />
                    </div>
                    )}
            </div>
        </div>
    );
}
