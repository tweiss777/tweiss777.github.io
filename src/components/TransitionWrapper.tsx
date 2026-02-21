import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../scss/TransitionStyles.scss";
import { useLocation } from 'react-router-dom'
interface IProps {
    nodeRef: React.RefObject<HTMLDivElement>;
    outlet: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
}

export default function TransitionWrapper({ outlet, nodeRef }: IProps) {
    const location = useLocation();
    return (
        <>
            <SwitchTransition>
                <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="my-transition"
                    nodeRef={nodeRef}
                    unmountOnExit
                >
                    {(_state) => (
                        <div className="wrapper-container my-transition" ref={nodeRef}>
                            {outlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </>
    );
}
