import '../../../scss/Services.scss'
import {JSX} from "react";

type ServicesGroupProps = {
    children: JSX.Element | JSX.Element[]
}

export default function ServicesGroup({children}: ServicesGroupProps){
    return <div className="services-card-group">{children}</div>
}