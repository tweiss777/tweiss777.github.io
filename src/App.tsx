import "./App.css";
import Navbar from "./components/Navbar";
import { routes } from "./routes/router";
import { createRef } from "react";
import TransitionWrapper from "./components/TransitionWrapper";
function App() {
  const { nodeRef } = routes.find(
    (route) => route.path === location.pathname,
  ) ?? { nodeRef: createRef() };
  return (
    <>
      <Navbar routes={routes} />
      <TransitionWrapper
        routeName={location.pathname}
        nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
      />
    </>
  );
}

export default App;
