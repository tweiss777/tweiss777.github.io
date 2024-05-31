import { createBrowserRouter } from "react-router-dom";
import { createRef } from "react";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Blog from "../components/Blog";
import About from "../components/About/About";
import App from "../App";

export const routes = [
    {
        path: "/",
        element: <About />,
        name: "About",
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
        name: "Blog",
        nodeRef: createRef(),
    },
    {
        path: "/experience",
        element: <Experience />,
        name: "Experience",
        nodeRef: createRef(),
    },
];
export const router = createBrowserRouter([
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
