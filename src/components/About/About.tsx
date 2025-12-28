import "../../scss/About.scss";
import Info from "./components/Info";
import TechStack from "./components/TechStack";
import TechStackCard from "./components/TechStackCard";
import ProgressBarGroup from "../ProgressBarGroup/ProgressBarGroup";
import ProgressBar from "../ProgressBar/ProgressBar";
import techStack from "../../data/techStack";
import skills from "../../data/skills";
export default function About() {
  return (
    <>
      <Info
        name="Tal Weiss"
        title="Full Stack Developer"
        about="Full-stack engineer with 5 years of experience helping startups and growing teams design and build scalable, high-performance web applications. I translate complex business requirements into clean, intuitive user experiences and reliable, cloud-native systems using React, Node.js, and AWS—enabling teams to ship faster and scale with confidence."
      />
      <TechStack>
        {techStack.map(({img, name}, index) => (
          <TechStackCard
            key={index}
            name={name} 
            img={img}
          />
        ))}
      </TechStack>
      <ProgressBarGroup>
        {skills.map(({ name, complete }, index) => (
        <div className="progress-bar-col">
          <ProgressBar key={index} complete={complete} name={name} />
        </div>))}
          
      </ProgressBarGroup>
    </>
  );
}
