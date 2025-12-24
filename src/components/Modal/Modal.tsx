import { useEffect } from "react";
import '../../scss/Modal.scss';
interface IProps {
    children: JSX.Element | JSX.Element[];
    header?: string;
    footer?: JSX.Element | JSX.Element[];
    onClose: () => void;
}

export default function Modal({ onClose, header, children }: IProps) {
    function closeOnEscape(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closeOnEscape);
        return () => document.removeEventListener('keydown', closeOnEscape);
         

    },[]);

    return (
        <div onClick={onClose} className="modal-container">
            <div className="modal">
                <button onClick={onClose} className="close-btn">
                    <span>✖</span>
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
