import "../../../scss/BlogCard.scss";
import { useState } from "react";
interface IProps {
    title: string;
    img?: string;
    link: string;
    description: string;
}
export default function BlogCard({ title, description, img, link }: IProps) {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="blog-card-container"
        >
            {hover && (

                <a href={link}>
                    <div className="hover-message">
                        <h2>Click here to read</h2>
                    </div>

                </a>
            )}
            <div className="blog-card">
                <div className="blog-card-title">
                    <h1>{title}</h1>
                </div>
                <div className="blog-card-body">
                    <div className="blog-card-img">
                        <img src={img} alt="blog img" />
                    </div>
                    <div className="blog-card-text">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
