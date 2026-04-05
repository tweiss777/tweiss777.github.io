type Service = {
    title: string;
    description: string;
    bullets?: string[];
};

type ServicesSection = {
    title: string;
    services: Service[];
    closing: string;
};

export const servicesOffered: ServicesSection = {
    title: "Services I Offer",
    services: [
        {
            title: "Front-End Development",
            description:
                "Building modern, responsive user interfaces using React, TypeScript, and modern UI libraries.",
            bullets:[
                "Performanced focused",
                "Clean and reponsive design",
                "Intuitive user experiences that scale across devices."

            ]
        },
        {
            title: "Back-End Development & APIs",
            description:
                "Designing and developing robust backend systems and APIs to handle business logic, integrations, and data processing. Built for:",
            bullets: [
                "Reliability",
                "Scalability",
                "Long-term maintainability."
            ]
        },
        {
            title: "Full-Stack Application Development",
            description:
                "End-to-end development from concept to deployment. I build complete applications with clean architecture, seamless frontend/backend integration, and production-ready performance."
        },
        {
            title: "Cloud & DevOps Support",
            description:
                "Supporting development with hands-on experience in cloud infrastructure and DevOps practices.",
            bullets: [
                "Deploying containerized applications using AWS ECS",
                "Configuring Application Load Balancers (ALB)",
                "Working within VPCs (networking, security, infrastructure)",
                "Managing Docker-based environments"
            ]
        },
        {
            title: "Integrations & Automation",
            description:
                "Building integrations between third-party services and automating workflows to improve efficiency and reduce manual overhead."
        },
        {
            title: "Internal Tools & Dashboards",
            description:
                "Developing custom admin panels, dashboards, and internal tools to support business operations and decision-making."
        }
    ],
    closing:
        "I focus on delivering clean, scalable solutions that are built to run reliably in real-world production environments."
};