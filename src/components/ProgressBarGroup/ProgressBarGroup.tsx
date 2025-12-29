import '../../scss/ProgressBarGroup.scss';
import { JSX } from "react";
interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function ProgressBarGroup({ children }: IProps) {
  return <div className="progressbar-container">{children}</div>;
}
