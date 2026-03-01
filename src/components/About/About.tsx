import "../../scss/About.scss";
import Info from "./components/Info";
import TechStack from "./components/TechStack";
import TechStackCard from "./components/TechStackCard";
import ProgressBarGroup from "../ProgressBarGroup/ProgressBarGroup";
import ProgressBar from "../ProgressBar/ProgressBar";
import techStack from "../../data/techStack";
import skills from "../../data/skills";
import { CSSTransition } from "react-transition-group";
import '../../scss/TransitionStyles.scss'
import  useScrollTrigger from '../../hooks/useScrollTrigger'

export default function About() {
  const { ref: infoRef, isVisible: infoVisible } = useScrollTrigger();
  const { ref: techRef, isVisible: techVisible } = useScrollTrigger();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollTrigger();

  return (
    <>
      <CSSTransition
          timeout={400}
          classNames='slide'
          nodeRef={infoRef}
          in={infoVisible}
      >
        <div className={'content'} ref={infoRef}>
        <Info
            name="Tal Weiss"
            title="Full Stack Developer"
            about="I'm a full-stack engineer with 5 years of experience helping startups and growing teams design and build scalable, high-performance web applications. I translate complex business requirements into clean, intuitive user experiences and reliable, cloud-native systems using React, Node.js, and AWS—enabling teams to ship faster and scale with confidence."
        />

        </div>
      </CSSTransition>
      <CSSTransition
          timeout={400}
          classNames='slide'
          nodeRef={techRef}
          in={techVisible}
      >
        <div ref={techRef} className={'content'}>
          <TechStack>
            {techStack.map(({img, name}, index) => (
                <TechStackCard
                    key={index}
                    name={name}
                    img={img}
                />
            ))}
          </TechStack>
        </div>
      </CSSTransition>
      <CSSTransition
          timeout={400}
          classNames='slide'
          nodeRef={skillsRef}
          in={skillsVisible}
      >
        <div ref={skillsRef} className={'content'}>
          <ProgressBarGroup>
            {skills.map(({ name, complete }, index) => (
                <div className="progress-bar-col">
                  <ProgressBar key={index} complete={complete} name={name} />
                </div>))}

          </ProgressBarGroup>
        </div>
      </CSSTransition>
    </>
  );
}
