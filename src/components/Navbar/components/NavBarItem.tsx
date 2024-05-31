import { Link } from "react-router-dom";
interface IProps{
    name: string;
    path: string;
    selected: boolean
}
export default function NavBarItem({ selected, path, name }: IProps) {
    return (<li className={selected ? "selected" : ""}>
            <Link key={path} to={path} className="nav-link">
              {name}
            </Link>
          </li>);
}
