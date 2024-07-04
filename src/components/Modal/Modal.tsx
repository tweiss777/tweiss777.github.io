
interface IProps {
    width: number;
    height: number;
    children: JSX.Element | JSX.Element[];
}

export default function Modal({ width, height, children }: IProps) {
    return (
        <div
            className="modal"
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <div>Close</div>
            {/* Modal content */}
            <div className="modal-conten">
                {children}
            </div>
        </div>
    )


}
