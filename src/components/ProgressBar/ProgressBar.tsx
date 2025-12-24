import "../../scss/ProgressBar.scss";
interface IProps {
  complete: number;
  name: string;
}
export default function ProgressBar({ complete, name }: IProps) {
  return (
    <>
      {name && (
        <div className="skill">
          <h2>{name}</h2>
        </div>
      )}
      <div className="progress-bar-container">
        <div style={{ width: `${complete}%` }} className="progress"></div>
      </div>
    </>
  );
}
