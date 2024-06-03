import "../../../scss/Links.scss";
interface IProps {
  children: JSX.Element | JSX.Element[];
}

export default function Links({ children }: IProps) {
  return (
    <div className="links">
      <p>
        I'm always looking for new opportunities. Feel free to reach out anytime
        andr check my github!
      </p>
      <div className="links-wrapper">{children}</div>
    </div>
  );
}
