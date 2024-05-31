import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NavBarItem from "./components/Navbar/components/NavBarItem";
import { routes } from "./routes/router";
import { useOutlet } from "react-router";
import { createRef, useEffect } from "react";
import { useAppDispatch } from "./hooks/redux.hooks";
import { setWidth } from "./slices/dimension.slice";
import TransitionWrapper from "./components/TransitionWrapper";
function App() {
  const dispatch = useAppDispatch();
  const outlet = useOutlet();
  const { nodeRef } = routes.find(
    (route) => route.path === location.pathname,
  ) ?? { nodeRef: createRef() };

  function onSetWidth() {
    dispatch(setWidth());
  }

  useEffect(() => {
    window.addEventListener("resize", onSetWidth);
  }, []);

  return (
    <>
      <Navbar>
        {routes.map((route) => (
          <NavBarItem selected={route.path === location.pathname} key={route.path} path={route.path} name={route.name} /> 
        ))}
      </Navbar>
      <TransitionWrapper
        routeName={location.pathname}
        nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
        outlet={outlet}
      />
    </>
  );
}

export default App;
