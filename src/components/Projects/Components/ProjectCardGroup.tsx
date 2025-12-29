import '../../../scss/ProjectCardGroup.scss';
import { JSX } from "react";
interface IProps {
    children: JSX.Element | JSX.Element[];
}

export default function ProjectCardGroup({ children }: IProps) {
    return <div className="project-card-group">{children}</div>;
}
