import '../../../scss/BlogCard.scss';
import { useState } from 'react';
interface IProps {
  index: number;
  title: string;
  img?: string;
  link: string;
  description: string;
}

export default function BlogCard({ index, title, description, img, link }: IProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="blog-card"
    >
      {hover && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="hover-message">
            <h2>Click here to read</h2>
          </div>
        </a>
      )}
      <div className="blog-info">
        <div className="blog-info-number">{String(index).padStart(2, "0")}</div>
        {img && (
          <div className="blog-info-img">
            <img src={img} alt={title} />
          </div>
        )}
        <h3 className="blog-info-title">{title}</h3>
        <p className="blog-info-description">{description}</p>
      </div>
    </div>
  );
}
