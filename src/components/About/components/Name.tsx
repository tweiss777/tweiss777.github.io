import "../../../scss/grid.scss";
import "../../../scss/Name.scss";
interface IProps {
  name: string;
  title: string;
  about: string;
}

export default function Name({ name, title, about }: IProps) {
  return (
    <div className="name-container column justify-center">
      <h1>
        {"<"}
        {name}
        {"/>"}
      </h1>
      <h2>
        {"<"}
        {title}
        {"/>"}
      </h2>
      <p>{about}</p>
    </div>
  );
}
