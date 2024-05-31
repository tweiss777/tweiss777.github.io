import { Link } from "react-router-dom";
interface IProps{
    name: string;
    path: string;
}
export default function NavBarItem({ path, name }: IProps) {
    return (<li>
            <Link key={path} to={path} className="nav-link">
              {name}
            </Link>
          </li>);
}
