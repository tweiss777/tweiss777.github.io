import "../../scss/ProgressBar.scss";
interface IProps {
  complete: number;
  name: string;
}
export default function ProgressBar({ complete, name }: IProps) {
  return (
    <div className="progress-bar-wrapper">
      {name && (
        <div className="skill">
          <h2>{name}</h2>
          <span className="percentage">{complete}%</span>
        </div>
      )}
      <div className="progress-bar-container">
        <div 
          style={{ width: `${complete}%` }} 
          className="progress"
          data-value={complete}
        ></div>
      </div>
    </div>
  );
}
