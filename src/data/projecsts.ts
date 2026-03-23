interface Project {
    title: string;
    description: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: 'Salesforce MCP Server',
        description: 'Developed a salesforce mcp server in python that connects to your Salesforce organization and performs CRUD operations for your lead, opportunity, contact, and account records. Custom fields are also supported',
        link: 'https://github.com/tweiss777/salesforce-mcp'
    },
    {
        title: 'SmartJobs (Python Program W/ Dotnet Web App)',
        description: 'Developed a .Net Core MVC based web application using bootstrap that analyzes job descriptions against a resume, determining which job is a good fit, and recommends what skills are missing or needs improvement based on matching and missing keywords.',
        link: 'https://github.com/tweiss777/CapstoneAPI/tree/master'
    },
    {
        title: 'TypeOff (iOS Game)',
        description: 'A type-racing game that measures a user\'s typing speed and accuracy.',
        link: 'https://bitbucket.org/tweiss777/typeoff/src/master/'
    },
    {
        title: 'Admin Dashboard',
        description: 'A basic admin dashboard with user authentication and authorization, CRUD operations, and filtering using React for the frontend and Fastify for the backend',
        link: 'https://github.com/tweiss777/ReactAdminDashboard'
    },
    {
        title: 'Web calculator',
        description: 'A calculator web app mimicking a real calculator based on HTML, CSS, and JavaScript and the iOS theme.',
        link: 'https://github.com/tweiss777/basic-calculator'
    }
];