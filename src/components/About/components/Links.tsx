import "../../../scss/Links.scss";
import { JSX } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function Links({ children }: IProps) {
  return (
    <div id="contact" className="links">
      <div className="links-wrapper">{children}</div>
    </div>
  );
}
