interface IProps {
    routes: any[];
}
import { Link } from "react-router-dom";
export default function Navbar({ routes }: IProps) {
    return (
        <>
            <ul>
                {routes.map((route: any) => (
                    <li key={route.key}>
                        <Link to={route.path}>
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
