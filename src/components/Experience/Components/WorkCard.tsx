import "../../../scss/WorkCard.scss";
import { JSX } from "react";
import useScrollTrigger from "../../../hooks/useScrollTrigger.ts";
import {CSSTransition} from "react-transition-group";
interface IProps {
  index: number;
  name: string;
  position: string;
  date: string;
  company_img: string;
  cardMargin?: string;
  description?: JSX.Element | JSX.Element[];
  handleOnClick: (work: any) => void;
}

export default function WorkCard({
  index,
  name,
  position,
  date,
  company_img,
  cardMargin = "right",
  description,
  handleOnClick,
}: IProps) {
  function onClickExperience() {
    const work = {
      name,
      position,
      date,
      company_img,
      description: description ?? null,
    };
    handleOnClick(work);
  }
  const { ref, isVisible} = useScrollTrigger()
  return (
      <CSSTransition
          timeout={400}
          in={isVisible}
          nodeRef={ref}
          classNames="slide"
          >
       <div ref={ref} className='content'>
         <div onClick={onClickExperience} className="work-card-container">
           <div className="work-card-dot"></div>
           <div className={`work-card-date date-${cardMargin}`}>
             <h2>{date}</h2>
           </div>
           <div className={`work-card position-${cardMargin}`}>
             <div className="work-card-content">
               <div className="work-card-img">
                 <img src={company_img} alt={name} />
               </div>
               <div className="work-card-text">
                 <div className="work-card-number">{String(index).padStart(2, "0")}</div>
                 <h1>{name}</h1>
                 <h2>{position}</h2>
               </div>
             </div>
           </div>
         </div>
       </div>
      </CSSTransition>
  );
}
