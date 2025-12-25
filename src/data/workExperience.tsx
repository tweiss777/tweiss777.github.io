import { JSX } from "react";

type WorkExperience = {
  name: string;
  position: string;
  date: string;
  company_img: string;
  cardMargin?: 'left' | 'right';
  description?: JSX.Element | JSX.Element[];
};

const workExperience: WorkExperience[] = [
  {
    name: 'Bigthink Capital',
    position: 'Fullstack Developer',
    date: '2024 - Present',
    company_img:
      'https://tals-assets.s3.us-east-1.amazonaws.com/portfolio-assets/Big-Think-Capital-Logo-2.png',
    cardMargin: 'left',
    description: (
      <>
        <h2>Frontend</h2>
        <ul>
          <li>
            Developed and maintained React components, pages, and custom hooks
            using SCSS and TypeScript.
          </li>
          <li>
            Wrote custom service functions to interact with a backend hosted on
            Azure.
          </li>
          <li>
            Leveraged Tailwind CSS to customize and style internal applications
            and responsive pages, prioritizing mobile-first usability and
            ensuring consistency across devices.
          </li>
          <li>
            Deployed and developed Lightning Web Components (LWC) on Salesforce
            using Salesforce’s UI libraries to create custom UIs, dashboards,
            and quick actions.
          </li>
        </ul>

        <h2>Backend</h2>
        <ul>
          <li>
            Migrated the financial market system’s backend from Azure Functions
            to AWS ECS and built a scalable API following the REST architecture
            using Node.js, NestJS, and MongoDB with Mongoose.
          </li>
          <li>
            Implemented routes, middleware, guards, validation, and database
            querying.
          </li>
          <li>
            Wrote and debugged serverless functions using AWS Lambda for cron
            jobs, webhooks, and third-party integrations.
          </li>
          <li>
            Enhanced automated Salesforce workflows by developing custom Apex
            classes and triggers, enabling seamless database event handling and
            integrating business logic with Lightning Web Components.
          </li>
          <li>
            Ensured codebase stability through JEST unit testing and achieved
            high code coverage.
          </li>
        </ul>

        <h2>Owned Features & Projects</h2>
        <ul>
          <li>
            Built an internal email app to fetch pre-built templates with
            dynamic parameters for personalized merchant responses.
          </li>
          <li>
            Replaced third-party document watermarking with an in-house solution
            using AWS S3 for file storage, reducing costs and increasing
            efficiency.
          </li>
          <li>
            Migrated authentication and authorization flows to Amazon Cognito by
            setting up user pools for profile management and developing webhooks
            to handle post-sign-up and post-login events.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'The5ers.com',
    position: 'Fullstack Developer',
    date: '2022 - 2024',
    company_img:
      'https://tals-assets.s3.us-east-1.amazonaws.com/portfolio-assets/5erslogo.svg',
    cardMargin: 'right',
    description: <ul>
      <li>Collaborated within a team of 4 full-stack developers, contributing to the development of a fintech platform for capital market dealers combining algorithmic systems.</li>
      <li>Improved performance and scalability by seamlessly migrating a large legacy codebase to Node.js, Express, React, Vue.js, and TypeScript, enhancing code integrity and facilitating streamlined maintenance of complex systems.</li>
      <li>Managed various databases, proficiently navigating between MongoDB and MySQL to tailor solutions to project-specific requirements.</li>
      <li>Utilized AWS Lambda; revamped existing payment processors; seamlessly integrated diverse payment APIs, resulting in enhanced post-payment functionality.</li>
      <li>Implemented efficient deployment pipelines using AWS CI/CD and Docker; used Jira for task management, S3 for cloud storage, and Git for version control, enhancing the reliability of software releases.</li>
      <li>Increased customer base by 50% within 6 months after revamping key features.</li>
    </ul>
  },
  {
    name: 'Israel Airforce',
    position: 'Backend Developer',
    date: '2020 - 2021',
    company_img:
      'https://tals-assets.s3.us-east-1.amazonaws.com/portfolio-assets/israeli_air_force_logo%3Fe%3D176iaf.jpeg',
    cardMargin: 'left',
  },
  {
    name: 'QA Engineer Intern',
    position: 'Blacknight Financial Services',
    date: '2018 - 2018',
    company_img:
      'https://tals-assets.s3.us-east-1.amazonaws.com/portfolio-assets/blackKnight.jpeg',
    cardMargin: 'right',
  },
];
export default workExperience;
