import "../../scss/Navbar.scss";
import "../../scss/NavbarTransitions.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/redux.hooks";
import { useState, useRef, useEffect } from "react"
import { CSSTransition } from "react-transition-group";
import { setWidth } from "../../slices/dimension.slice";
interface IProps {
  children: JSX.Element | JSX.Element[];
}
export default function Navbar({ children }: IProps) {
  const dispatch = useAppDispatch(); 
  const { width } = useAppSelector((state) => state.dimensions);
  const isMobile = width < 450;
  const navbarRef = useRef(null);
  const [collapsed, setCollapsed] = useState<boolean>(false);
    useEffect(() => {
        dispatch(setWidth());
    }, [width])
  function handleMenuCollapse() {
    setCollapsed(!collapsed);
  }
  return (
    <>
      {isMobile && (
        <>
          <nav>
            <button onClick={handleMenuCollapse}>☰</button>
            <CSSTransition
              in={collapsed}
              timeout={300}
              classNames="menu-collapse"
              nodeRef={navbarRef}
              unmountOnExit
            >
              <ul ref={navbarRef}>{children}</ul>
            </CSSTransition>
          </nav>
        </>
      )}

      {!isMobile && (
        <nav>
          <ul>{children}</ul>
        </nav>
      )}
    </>
  );
}
