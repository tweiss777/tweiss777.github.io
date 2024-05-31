interface IProps {
  routes: any[];
  children: JSX.Element | JSX.Element[];
}
import { Link } from "react-router-dom";
export default function Navbar({ routes, children }: IProps) {
  return (
    <>
      <nav>
        <ul>
            {children} 
        </ul>
      </nav>
    </>
  );
}
