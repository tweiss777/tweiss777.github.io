import { createBrowserRouter } from "react-router-dom";
import { createRef } from "react";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Blog from "../components/Blog";
import About from "../components/About";
import App from "../App";

export const routes = [
    {
        path: "/",
        element: <About />,
        name: "about",
        nodeRef: createRef(),
    },
    {
        path: "/projects",
        element: <Projects />,
        name: "projects",
        nodeRef: createRef(),
    },
    {
        path: "/blog",
        element: <Blog />,
        name: "blog",
        nodeRef: createRef(),
    },
    {
        path: "/experience",
        element: <Experience />,
        name: "experience",
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
