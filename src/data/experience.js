// Professional experience and career timeline data
export const experience = [
    {
        id: "esspl-fullstack",
        company: "ESSPL",
        companyLogo: "/images/esspl-logo.png",
        position: "Full-Stack Developer",
        duration: "2023 - Present",
        startDate: "January 2023",
        location: "India",
        type: "Full-time",
        current: true,
        companySize: "50-100 employees",
        industry: "Software Development",
        description: "Leading full-stack development projects using React.js and Python technologies, specializing in modern web applications and API development for diverse client requirements.",
        responsibilities: [
            "Develop and maintain web applications using React.js and Python",
            "Collaborate with cross-functional teams on project delivery and requirements analysis",
            "Implement responsive designs with Tailwind CSS ensuring mobile-first approach",
            "Build scalable backend APIs with FastAPI and Django frameworks",
            "Manage database operations with SQL Server including optimization and performance tuning",
            "Code review and mentoring junior developers on best practices",
            "Participate in client meetings and technical requirement discussions",
            "Implement testing strategies and maintain code quality standards",
            "Deploy applications using modern DevOps practices and CI/CD pipelines"
        ],
        achievements: [
            "Successfully delivered 15+ client projects on time and within budget with 98% client satisfaction",
            "Improved application performance by 40% through code optimization and database tuning",
            "Mentored 3 junior developers on React.js and Python best practices, improving team productivity",
            "Led the migration of 5 legacy systems to modern tech stack, reducing maintenance costs by 50%",
            "Implemented CI/CD pipelines reducing deployment time by 60% and eliminating manual errors",
            "Developed reusable component library used across 8+ projects, improving development efficiency",
            "Established coding standards and documentation practices adopted company-wide",
            "Contributed to winning 3 new client contracts through technical presentations and demos"
        ],
        keyProjects: [
            {
                name: "E-commerce Platform",
                role: "Lead Developer",
                impact: "Biggest project showcasing full-stack expertise",
                technologies: ["React.js", "Python", "FastAPI", "SQL Server"]
            },
            {
                name: "Digiaayam Startup Platform",
                role: "Full-Stack Developer",
                impact: "Rapid MVP development and deployment",
                technologies: ["React.js", "Python", "FastAPI", "PostgreSQL"]
            },
            {
                name: "BookMart Marketplace",
                role: "Solo Developer",
                impact: "Community-driven platform with 500+ users",
                technologies: ["React.js", "Django", "SQL Server"]
            },
            {
                name: "KiitHub Social Platform",
                role: "Frontend Lead",
                impact: "University platform with 1000+ students",
                technologies: ["React.js", "FastAPI", "WebSocket"]
            }
        ],
        technologies: [
            "React.js",
            "Python",
            "FastAPI",
            "Django",
            "SQL Server",
            "PostgreSQL",
            "Tailwind CSS",
            "JavaScript",
            "Git",
            "Vite",
            "Docker",
            "Redis"
        ],
        skills: [
            "Full-Stack Development",
            "API Design & Development",
            "Database Design & Optimization",
            "Responsive Web Design",
            "Code Review & Mentoring",
            "Client Communication",
            "Project Management",
            "Performance Optimization"
        ],
        projects: [
            "ecommerce-platform",
            "digiaayam",
            "bookmart",
            "kiithub"
        ],
        workEnvironment: {
            teamSize: "8-12 developers",
            methodology: "Agile/Scrum",
            tools: ["Jira", "Slack", "GitHub", "VS Code"],
            clientTypes: ["Startups", "SMEs", "Educational Institutions"]
        },
        professionalGrowth: [
            "Advanced from junior to mid-level developer within 18 months",
            "Expanded expertise from frontend-only to full-stack development",
            "Developed leadership skills through mentoring and project management",
            "Enhanced client communication and business requirement analysis skills"
        ]
    },
    {
        id: "freelance-developer",
        company: "Freelance",
        companyLogo: "/images/freelance-logo.png",
        position: "Freelance Full-Stack Developer",
        duration: "2022 - 2023",
        startDate: "June 2022",
        endDate: "December 2022",
        location: "Remote",
        type: "Freelance",
        current: false,
        description: "Provided full-stack development services to small businesses and startups, focusing on React.js frontend and Python backend solutions.",
        responsibilities: [
            "Developed custom web applications for small businesses",
            "Provided technical consulting and solution architecture",
            "Managed complete project lifecycle from requirements to deployment",
            "Maintained direct client relationships and project communication"
        ],
        achievements: [
            "Completed 8 successful freelance projects with 100% client satisfaction",
            "Built long-term relationships with 3 recurring clients",
            "Developed expertise in rapid prototyping and MVP development",
            "Established personal brand and professional network"
        ],
        technologies: [
            "React.js",
            "Python",
            "Django",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Git"
        ],
        skills: [
            "Client Management",
            "Project Estimation",
            "Rapid Prototyping",
            "Business Analysis",
            "Independent Problem Solving"
        ]
    }
];

// Career timeline for visual representation
export const timeline = [
    {
        year: "2021",
        month: "September",
        title: "Started Learning Web Development",
        description: "Began journey with HTML, CSS, and JavaScript fundamentals",
        type: "education",
        icon: "📚",
        color: "bg-blue-500"
    },
    {
        year: "2022",
        month: "March",
        title: "Mastered React.js",
        description: "Completed advanced React.js course and built first portfolio projects",
        type: "skill",
        icon: "⚛️",
        color: "bg-cyan-500"
    },
    {
        year: "2022",
        month: "June",
        title: "Started Freelancing",
        description: "Began freelance career providing web development services",
        type: "career",
        icon: "💼",
        color: "bg-green-500"
    },
    {
        year: "2022",
        month: "August",
        title: "Learned Python & Backend Development",
        description: "Expanded skills to full-stack with Python, Django, and FastAPI",
        type: "skill",
        icon: "🐍",
        color: "bg-yellow-500"
    },
    {
        year: "2022",
        month: "November",
        title: "First Major Freelance Success",
        description: "Delivered complex e-commerce solution for local business",
        type: "achievement",
        icon: "🏆",
        color: "bg-purple-500"
    },
    {
        year: "2023",
        month: "January",
        title: "Joined ESSPL as Full-Stack Developer",
        description: "Started professional career focusing on React.js and Python development",
        type: "career",
        icon: "🚀",
        color: "bg-indigo-500"
    },
    {
        year: "2023",
        month: "April",
        title: "First Major Project - E-commerce Platform",
        description: "Led development of comprehensive e-commerce solution at ESSPL",
        type: "project",
        icon: "🛒",
        color: "bg-red-500"
    },
    {
        year: "2023",
        month: "August",
        title: "Team Leadership Role",
        description: "Started mentoring junior developers and leading project teams",
        type: "career",
        icon: "👥",
        color: "bg-orange-500"
    },
    {
        year: "2023",
        month: "November",
        title: "Digiaayam Startup Project",
        description: "Contributed to innovative startup platform development",
        type: "project",
        icon: "🌟",
        color: "bg-pink-500"
    },
    {
        year: "2024",
        month: "February",
        title: "BookMart Marketplace Launch",
        description: "Successfully launched community-driven book trading platform",
        type: "project",
        icon: "📚",
        color: "bg-teal-500"
    },
    {
        year: "2024",
        month: "June",
        title: "KiitHub Social Platform",
        description: "Developed university social platform serving 1000+ students",
        type: "project",
        icon: "🤝",
        color: "bg-emerald-500"
    },
    {
        year: "2024",
        month: "September",
        title: "Senior Developer Recognition",
        description: "Promoted to senior role with increased responsibilities",
        type: "achievement",
        icon: "🎖️",
        color: "bg-violet-500"
    },
    {
        year: "2024",
        month: "December",
        title: "Portfolio Website Launch",
        description: "Launched comprehensive portfolio showcasing professional journey",
        type: "milestone",
        icon: "🌐",
        color: "bg-rose-500"
    }
];

// Professional metrics and statistics
export const professionalMetrics = {
    projectsCompleted: 23,
    clientSatisfaction: 98,
    codeCommits: 2500,
    yearsExperience: 3,
    technologiesMastered: 12,
    teamMembersLed: 5,
    linesOfCode: "50,000+",
    clientsServed: 15,
    successfulDeployments: 20,
    bugFixRate: 95,
    onTimeDelivery: 100,
    codeReviewsCompleted: 200
};

// Career progression milestones
export const careerMilestones = [
    {
        title: "Web Development Foundation",
        period: "2021-2022",
        description: "Built strong foundation in HTML, CSS, JavaScript, and React.js",
        skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
        achievement: "First portfolio website and freelance projects"
    },
    {
        title: "Full-Stack Expertise",
        period: "2022-2023",
        description: "Expanded to backend development with Python, Django, and FastAPI",
        skills: ["Python", "Django", "FastAPI", "SQL Server"],
        achievement: "Successful freelance career and complex project delivery"
    },
    {
        title: "Professional Growth",
        period: "2023-Present",
        description: "Professional role at ESSPL with leadership and mentoring responsibilities",
        skills: ["Team Leadership", "Project Management", "Client Communication"],
        achievement: "Senior developer role and successful project deliveries"
    }
];

// Professional development and learning
export const professionalDevelopment = [
    {
        category: "Technical Skills",
        items: [
            "Advanced React.js patterns and performance optimization",
            "Python backend development with FastAPI and Django",
            "Database design and optimization techniques",
            "Modern CSS frameworks and responsive design",
            "Version control and collaborative development"
        ]
    },
    {
        category: "Soft Skills",
        items: [
            "Team leadership and mentoring capabilities",
            "Client communication and requirement analysis",
            "Project management and delivery coordination",
            "Problem-solving and critical thinking",
            "Agile development methodologies"
        ]
    },
    {
        category: "Business Skills",
        items: [
            "Understanding of business requirements and user needs",
            "Cost estimation and project planning",
            "Quality assurance and testing strategies",
            "Performance optimization and scalability planning",
            "Documentation and knowledge sharing"
        ]
    }
];

// Current role highlights
export const currentRoleHighlights = {
    company: "ESSPL",
    position: "Full-Stack Developer",
    keyResponsibilities: [
        "Leading full-stack development projects",
        "Mentoring junior developers",
        "Client interaction and requirement analysis",
        "Code review and quality assurance",
        "Technology stack decisions and architecture"
    ],
    majorProjects: [
        "E-commerce Platform (Lead Developer)",
        "Digiaayam Startup Platform",
        "BookMart Marketplace",
        "KiitHub University Platform"
    ],
    technicalLeadership: [
        "Established coding standards and best practices",
        "Implemented CI/CD pipelines and deployment strategies",
        "Led migration from legacy systems to modern stack",
        "Mentored 5+ junior developers on modern web technologies"
    ]
};

// Helper functions
export const getCurrentExperience = () => {
    return experience.find(exp => exp.current);
};

export const getExperienceByCompany = (company) => {
    return experience.filter(exp => exp.company === company);
};

export const getTotalExperienceYears = () => {
    const startYear = 2022; // First freelance work
    const currentYear = new Date().getFullYear();
    return currentYear - startYear + 1;
};

export const getTimelineByType = (type) => {
    return timeline.filter(item => item.type === type);
};

export const getTimelineByYear = (year) => {
    return timeline.filter(item => item.year === year);
};

export const getLatestMilestones = (count = 5) => {
    return timeline.slice(-count).reverse();
};

// Professional summary for quick reference
export const professionalSummary = {
    title: "Full-Stack Developer at ESSPL",
    experience: "3+ years",
    specialization: "React.js Frontend & Python Backend Development",
    currentFocus: "Modern web applications, API development, and team leadership",
    availability: "Open for freelance projects",
    location: "India",
    workStyle: "Remote-friendly, Agile methodology",
    keyStrengths: [
        "Full-stack development expertise",
        "Strong problem-solving skills",
        "Team leadership and mentoring",
        "Client communication and project delivery",
        "Modern technology stack proficiency"
    ]
};