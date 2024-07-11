import WorkCard from "./Components/WorkCard";
import WorkCardGroup from "./Components/WorkCardGroup";
import ExperienceHeader from "./Components/ExperienceHeader";
import workExperience from "../../data/workExperience";
import { useState } from "react";
import Modal from "../Modal/Modal";
export default function Experience() {
  const [currentWork, setCurrentWork] = useState<any>(null);
  function handleOnClick(work: any) {
      setCurrentWork(work);
    }

  return (
    <>
      <ExperienceHeader />
      {currentWork && (
        <Modal
          header={currentWork?.name}
          onClose={() => setCurrentWork(null)}
        >
        </Modal>
      )}
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
