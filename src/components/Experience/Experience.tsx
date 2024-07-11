import WorkCard from "./Components/WorkCard";
import WorkCardGroup from "./Components/WorkCardGroup";
import ExperienceHeader from "./Components/ExperienceHeader";
import workExperience from "../../data/workExperience";
import { useState } from "react";
export default function Experience() {
    const [currentWork, setCurrentWork] = useState(null);
    function handleOnClick(work: any) {

    }
  return (
    <>
      <ExperienceHeader />
      <div>
        <WorkCardGroup>
          {workExperience.map((work, i) => (
            <WorkCard
              handleOnClick={handleOnClick} 
              key={i}
              name={work.name}
              position={work.position}
              date={work.date}
              company_img={work.company_img}
              cardMargin={work.cardMargin}
            />
          ))}
        </WorkCardGroup>
      </div>
    </>
  );
}
