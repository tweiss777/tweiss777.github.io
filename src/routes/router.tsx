import { createHashRouter } from "react-router-dom";
import { createRef } from "react";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Blog from "../components/Blog/Blog";
import About from "../components/About/About";
import App from "../App";
import Resume from "../components/Resume/Resume";

export const routes = [
    {
        path: "/",
        element: <About />,
        name: "About",
        nodeRef: createRef(),
    },
    {
        path: "/experience",
        element: <Experience />,
        name: "Experience",
        nodeRef: createRef(),
    },
    {
        path: "/projects",
        element: <Projects />,
        name: "Projects",
        nodeRef: createRef(),
    },
    {
        path: "/blog",
        element: <Blog />,
        name: "Dev Blog",
        nodeRef: createRef(),
    },
    {
        path: "resume",
        element: <Resume />,
        name: "Resume",
        nodeRef: createRef(),
    },
];
export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: routes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element,
        })),
    },
]);
