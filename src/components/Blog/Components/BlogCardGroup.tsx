import '../../../scss/BlogCardGroups.scss';
import { JSX } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function BlogCardGroup({ children }: IProps) {
  return <div className="blog-card-group">{children}</div>;
}
