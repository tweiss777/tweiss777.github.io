interface IProps {
  children: JSX.Element | JSX.Element[];
}
export default function WorkCardGroup({ children }: IProps) {
  return <div>{children}</div>;
}
