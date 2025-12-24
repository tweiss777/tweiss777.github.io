import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NavBarItem from "./components/Navbar/components/NavBarItem";
import { routes } from "./routes/router";
import { useOutlet } from "react-router";
import { createRef } from "react";
import TransitionWrapper from "./components/TransitionWrapper";
import DimensionProvider from "./Contexts/DimensionProvider";
function App() {
  const outlet = useOutlet();
  const { nodeRef } = routes.find(
    (route) => route.path === location.pathname,
  ) ?? { nodeRef: createRef() };


  return (
    <>
      <DimensionProvider>
        <Navbar>
          {routes.map((route) => (
            <NavBarItem
              selected={route.path === location.pathname}
              key={route.path}
              path={route.path}
              name={route.name}
            />
          ))}
        </Navbar>
      </DimensionProvider>
      <TransitionWrapper
        routeName={location.pathname}
        nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
        outlet={outlet}
      />
    </>
  );
}

export default App;
