import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../scss/TransitionStyles.scss";
interface IProps {
    nodeRef: React.RefObject<HTMLDivElement>;
    routeName: string;
    outlet: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
}

export default function TransitionWrapper({ outlet, routeName, nodeRef }: IProps) {
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
                        <div className="wrapper-container my-transition" ref={nodeRef}>
                            {outlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </>
    );
}
