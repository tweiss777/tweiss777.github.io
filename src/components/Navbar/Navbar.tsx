import "../../scss/Navbar.scss";
import "../../scss/NavbarTransitions.scss";
import '../../scss/grid.scss';
import { useState, useRef } from "react"
import { CSSTransition } from "react-transition-group";
import  { useDimensions }  from "../../hooks/useDimensions";
import LinkCard from "../About/components/LinkCard";
import Links from "../About/components/Links";
interface IProps {
  children: JSX.Element | JSX.Element[];
}
export default function Navbar({ children }: IProps) {
  const { width } = useDimensions();
  const isMobile = width <= 600;
  const navbarRef = useRef(null);
  const [collapsed, setCollapsed] = useState<boolean>(false);
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
              <>
                <ul ref={navbarRef}>{children}</ul>
                <div className="link-container">
                  <Links>
                    <LinkCard
                      link="https://github.com/tweiss777"
                      name="Github"
                      img="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF"
                    />
                    <LinkCard
                      link="https://www.linkedin.com/in/teeweiss/"
                      name="LinkedIn"
                      img="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"
                    />
                  </Links>
                </div>
              </>
            </CSSTransition>
          </nav>
        </>
      )}

      {!isMobile && (
        <nav>
          <div className="row justify-between">
            <div>
              <ul>{children}</ul>
            </div>
            <div className="link-container">
              <Links>
                <LinkCard
                  link="https://github.com/tweiss777"
                  name="Github"
                  img="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF"
                />
                <LinkCard
                  link="https://www.linkedin.com/in/teeweiss/"
                  name="LinkedIn"
                  img="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"
                />
              </Links>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
