import Name from "./components/Name";
import TechStack from "./components/TechStack";
import TechStackCard from "./components/TechStackCard";
import Links from "./components/Links";
import LinkCard from "./components/LinkCard";
export default function About() {
    return (
        <>
            <Name
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
