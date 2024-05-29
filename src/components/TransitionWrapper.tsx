import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../scss/TransitionStyles.scss";
import { useOutlet } from "react-router";
interface IProps {
  nodeRef: React.RefObject<HTMLDivElement>;
    routeName: string
}

export default function TransitionWrapper({ routeName, nodeRef }: IProps) {
  const outlet = useOutlet();
  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={routeName}
          timeout={300}
          classNames="my-transition"
          nodeRef={nodeRef}
          unmountOnExit
        >
          {(_state) => (
            <div className="my-transition" ref={nodeRef}>
              {outlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
