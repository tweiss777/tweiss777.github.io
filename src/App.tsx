import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NavBarItem from "./components/Navbar/components/NavBarItem";
import { routes } from "./routes/router";
import { useLocation, useOutlet } from "react-router-dom";
import { createRef } from "react";
import TransitionWrapper from "./components/TransitionWrapper";
import DimensionProvider from "./Contexts/DimensionProvider";
function App() {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const { nodeRef } = routes.find(
    (route) => route.path === pathname,
  ) ?? { nodeRef: createRef() };


  return (
    <>
      <DimensionProvider>
        <Navbar>
          {routes.map((route) => (
            <NavBarItem
              selected={route.path === pathname}
              key={route.path}
              path={route.path}
              name={route.name}
            />
          ))}
        </Navbar>
      </DimensionProvider>
      <TransitionWrapper
        nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
        outlet={outlet}
      />
    </>
  );
}

export default App;
