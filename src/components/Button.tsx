import {JSX} from "react";
import '../scss/Button.scss'
type ButtonProps<T = JSX.Element | JSX.Element[] | string> = {
    children: T,
    onOk: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <button className="btn-get-in-touch" onClick={props.onOk}>
            {props.children}
        </button>
    )
}


