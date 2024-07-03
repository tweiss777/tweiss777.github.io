import '../../../scss/workCardGroup.scss';

interface IProps {
  children: JSX.Element | JSX.Element[];
}
export default function WorkCardGroup({ children }: IProps) {
  return <div className='work-card-group'>{children}</div>;
}
