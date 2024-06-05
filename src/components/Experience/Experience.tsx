import WorkCard from "./Components/WorkCard";
import WorkCardGroup from "./Components/WorkCardGroup";
export default function Experience() {
  return (
    <>
      <div>
        <h1>Experience</h1>
      </div>
      <div>
        <WorkCardGroup>
          <WorkCard
            name="Google"
            position="Software Engineer"
            date="2022 - Present"
            company_img="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
          />
        </WorkCardGroup>
      </div>
    </>
  );
}
