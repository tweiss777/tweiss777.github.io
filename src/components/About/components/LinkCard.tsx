import "../../../scss/LinkCard.scss";
interface IProps {
  link: string;
  name: string;
  img: string;
}

export default function LinkCard({ link, name, img }: IProps) {
  return (
    <div className="link-card">
      <a href={link} target="_blank_">
        <div>
          <img src={img} alt={name} />
        </div>
      </a>
    </div>
  );
}
