import "../../scss/About.scss";
import Info from "./components/Info";
import TechStack from "./components/TechStack";
import TechStackCard from "./components/TechStackCard";
import Links from "./components/Links";
import LinkCard from "./components/LinkCard";
import ProgressBarGroup from "../ProgressBarGroup/ProgressBarGroup";
import ProgressBar from "../ProgressBar/ProgressBar";
export default function About() {
  return (
    <>
      <Info
        name="Tal Weiss"
        title="Full Stack Developer"
        about="A seasoned full stack developer with 3+ leveraging cutting-edge technologies to develop innovative, smooth, and highly scalable web applications"
      />
      <TechStack>
        <TechStackCard
          name="React"
          img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
        <TechStackCard img="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />
        <TechStackCard
          name="Typescript"
          img="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
        />
        <TechStackCard img="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" />
        <TechStackCard name="Express.js" />
        <TechStackCard img="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg" />
        <TechStackCard
          name="Nest.js"
          img="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"
        />
      </TechStack>
      <ProgressBarGroup>
        <div className="progress-bar-col">
          <ProgressBar complete={100} name="HTML" />
        </div>
        <div className="progress-bar-col">
          <ProgressBar complete={95} name="CSS" />
        </div>
        <div className="progress-bar-col">
          <ProgressBar complete={95} name="JavaScript" />
        </div>
        <div className="progress-bar-col">
          <ProgressBar complete={90} name="SASS" />
        </div>
        <div className="progress-bar-col">
          <ProgressBar complete={90} name="TypeScript" />
        </div>
        <div className="progress-bar-col">
          <ProgressBar complete={85} name="React" />
        </div>
        <div className="progress-bar-col">
          <ProgressBar complete={90} name="Node.JS" />
        </div>
        <div className="progress-bar-col">
          <ProgressBar complete={87} name="MySQL" />
        </div>
        <div className="progress-bar-col">
          <ProgressBar complete={88} name="MongoDB" />
        </div>
      </ProgressBarGroup>
      <Links>
        <LinkCard
          link="https://github.com/tweiss777"
          name="Github"
          img="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        />
        <LinkCard
          link="https://www.linkedin.com/in/teeweiss/"
          name="LinkedIn"
          img="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        />
      </Links>
    </>
  );
}
