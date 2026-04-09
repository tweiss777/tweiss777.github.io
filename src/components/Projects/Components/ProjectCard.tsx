import "../../../scss/ProjectCard.scss";
import { useState } from "react";
import {GITHUB_ICON, WEBSITE_ICON} from "../../../data/iconLinks.ts";

interface IProps {
    index: number;
    title: string;
    description: string;
    link: string;
    linkText?: string;
    bullets?: string[];
}

export default function ProjectCard({
    index,
    title,
    description,
    link,
    linkText,
    bullets,
}: IProps) {
    const [hover, setHover] = useState<boolean>(false);
    const linkIcon = link.includes('github') ?
        GITHUB_ICON :
        WEBSITE_ICON ;
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="project-card"
        >
            {hover && (
                <a href={link}>
                    <div className="hover-message">{linkText ?? "Go to project."}</div>
                </a>
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
            <>
                {link && (
                    <div className='link-container'>
                        <img
                            alt='link-icon'
                            className='link'
                            src={linkIcon}
                        />
                    </div>
                )}
            </>
        </div>
    );
}
