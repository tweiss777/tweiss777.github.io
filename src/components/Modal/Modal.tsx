import { useEffect, useState } from "react";
import "../../scss/Modal.scss";
import { JSX } from "react";

interface IProps {
    children: JSX.Element | JSX.Element[];
    header?: string;
    footer?: JSX.Element | JSX.Element[];
    onClose: () => void;
}

export default function Modal({ onClose, header, children }: IProps) {
    const [state, setState] = useState<"enter" | "enter-active" | "exit">("enter");

    function closeModal() {
        setState("exit");
        setTimeout(onClose, 250);
    }

    function closeOnEscape(e: KeyboardEvent) {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", closeOnEscape);

        requestAnimationFrame(() => {
            setState("enter-active");
        });

        return () => document.removeEventListener("keydown", closeOnEscape);
    }, []);

    return (
        <div
            onClick={closeModal}
            className={`modal-container ${state}`}
        >
            <div className="modal" >
                <button onClick={closeModal} className="close-btn">
                    ✖
                </button>

                <div className="modal-content">
                    {header && (
                        <>
                            <div className="modal-header">
                                <h1>{header}</h1>
                            </div>
                            <hr />
                        </>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}