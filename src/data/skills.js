// Skills and technology data for portfolio showcase
export const skills = {
    frontend: [
        {
            name: "React.js",
            level: 80,
            icon: "⚛️",
            description: "Building modern, interactive user interfaces with React hooks and context",
            experience: "3+ years",
            projects: ["E-commerce Platform", "Digiaayam", "BookMart", "KIITHub"],
            keyFeatures: ["Hooks", "Context API", "Component Libraries", "State Management"],
            color: "text-blue-500"
        },
        {
            name: "JavaScript",
            level: 80,
            icon: "🟨",
            description: "ES6+ features, async programming, and modern JavaScript development",
            experience: "1+ year",
            projects: ["All Projects"],
            keyFeatures: ["ES6+", "Async/Await", "DOM Manipulation", "API Integration"],
            color: "text-yellow-500"
        },
        {
            name: "Tailwind CSS",
            level: 90,
            icon: "🎨",
            description: "Utility-first CSS framework for rapid UI development",
            experience: "1+ years",
            projects: ["E-commerce Platform", "Digiaayam", "BookMart"],
            keyFeatures: ["Responsive Design", "Custom Components", "Dark Mode", "Animations"],
            color: "text-cyan-500"
        },
        {
            name: "HTML5 & CSS3",
            level: 90,
            icon: "🌐",
            description: "Semantic markup and modern CSS features for web development",
            experience: "2+ years",
            projects: ["All Projects"],
            keyFeatures: ["Semantic HTML", "Flexbox", "Grid", "Animations"],
            color: "text-orange-500"
        }
    ],
    backend: [
        {
            name: "Python",
            level: 85,
            icon: "🐍",
            description: "Backend development, data processing, and API development",
            experience: "6 months",
            projects: ["E-commerce Platform"],
            keyFeatures: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Web Development"],
            color: "text-green-500"
        },
        {
            name: "FastAPI",
            level: 80,
            icon: "⚡",
            description: "High-performance API development with automatic documentation",
            experience: "6 months",
            projects: ["E-commerce Platform", "Digiaayam"],
            keyFeatures: ["Async/Await", "Automatic Docs", "Type Hints", "High Performance"],
            color: "text-emerald-500"
        }
    ],
    database: [
        {
            name: "SQL Server",
            level: 75,
            icon: "🗄️",
            description: "Database design, optimization, and management",
            experience: "0",
            projects: ["E-commerce Platform", "BookMart", "KiitHub"],
            keyFeatures: ["T-SQL", "Stored Procedures", "Indexing", "Performance Tuning"],
            color: "text-red-500"
        },
        {
            name: "PostgreSQL",
            level: 70,
            icon: "🐘",
            description: "Advanced open-source relational database system",
            experience: "6 months",
            projects: ["Digiaayam", "E-commerce"],
            keyFeatures: ["ACID Compliance", "JSON Support", "Advanced Queries", "Scalability"],
            color: "text-blue-600"
        }
    ],
    tools: [
        {
            name: "Git",
            level: 80,
            icon: "📝",
            description: "Version control and collaborative development",
            experience: "2+ years",
            projects: ["All Projects"],
            keyFeatures: ["Branching", "Merging", "Collaboration", "GitHub"],
            color: "text-gray-600"
        },
        {
            name: "Vite",
            level: 75,
            icon: "⚡",
            description: "Modern build tool for fast development",
            experience: "1+ years",
            projects: ["Recent React Projects"],
            keyFeatures: ["Hot Reload", "Fast Builds", "ES Modules", "Plugin System"],
            color: "text-purple-500"
        },
        {
            name: "VS Code",
            level: 85,
            icon: "💻",
            description: "Primary development environment with extensions",
            experience: "4+ years",
            projects: ["All Projects"],
            keyFeatures: ["Extensions", "Debugging", "IntelliSense", "Integrated Terminal"],
            color: "text-blue-400"
        },
        {
            name: "Docker",
            level: 65,
            icon: "🐳",
            description: "Containerization for consistent development environments",
            experience: "6 months",
            projects: ["Deployment Projects"],
            keyFeatures: ["Containerization", "Docker Compose", "Image Management", "Deployment"],
            color: "text-blue-500"
        },
        {
            name: "Postman",
            level: 80,
            icon: "📮",
            description: "API development and testing tool",
            experience: "1+ years",
            projects: ["All Backend Projects"],
            keyFeatures: ["API Testing", "Collections", "Environment Variables", "Automation"],
            color: "text-orange-400"
        }
    ]
};

// Skill categories for organized display
export const skillCategories = [
    {
        title: "Frontend",
        skills: skills.frontend,
        icon: "🎨",
        description: "Creating engaging user interfaces and experiences",
        color: "bg-blue-50 border-blue-200",
        textColor: "text-blue-700"
    },
    {
        title: "Backend",
        skills: skills.backend,
        icon: "⚙️",
        description: "Building robust server-side applications and APIs",
        color: "bg-green-50 border-green-200",
        textColor: "text-green-700"
    },
    {
        title: "Database",
        skills: skills.database,
        icon: "🗄️",
        description: "Data modeling and database management",
        color: "bg-red-50 border-red-200",
        textColor: "text-red-700"
    },
    {
        title: "Tools",
        skills: skills.tools,
        icon: "🛠️",
        description: "Development tools and workflow optimization",
        color: "bg-purple-50 border-purple-200",
        textColor: "text-purple-700"
    }
];

// All skills flattened for easy access
export const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.database,
    ...skills.tools
];

// Core technologies for quick reference (matches project technologies)
export const coreTechnologies = [
    "React.js",
    "Python",
    "FastAPI",
    "JavaScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Node.js",
    "MongoDB"
];

// Skill levels for filtering and display
export const skillLevels = {
    expert: allSkills.filter(skill => skill.level >= 85),
    advanced: allSkills.filter(skill => skill.level >= 75 && skill.level < 85),
    intermediate: allSkills.filter(skill => skill.level >= 65 && skill.level < 75),
    beginner: allSkills.filter(skill => skill.level < 65)
};

// Skills statistics
export const skillStats = {
    totalSkills: allSkills.length,
    expertLevel: skillLevels.expert.length,
    advancedLevel: skillLevels.advanced.length,
    averageLevel: Math.round(allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length),
    totalExperience: "1+ years",
    primaryStack: ["React.js", "Python", "FastAPI", "SQL Server", "Tailwind CSS"]
};

// Helper functions
export const getSkillsByCategory = (category) => {
    return skills[category.toLowerCase()] || [];
};

export const getSkillByName = (name) => {
    return allSkills.find(skill => skill.name === name);
};

export const getSkillsByLevel = (minLevel) => {
    return allSkills.filter(skill => skill.level >= minLevel);
};

export const getSkillsByProject = (projectName) => {
    return allSkills.filter(skill =>
        skill.projects.includes(projectName) || skill.projects.includes("All Projects")
    );
};

// Skill progression data for timeline visualization
export const skillProgression = [
    {
        year: "2023",
        skills: ["HTML5 & CSS3", "JavaScript", "Git"],
        milestone: "Started web development journey"
    },
    {
        year: "2024",
        skills: ["React.js", "Python", "SQL Server"],
        milestone: "Learned modern frameworks and backend development"
    },
    {
        year: "2024",
        skills: ["FastAPI", "Django", "Tailwind CSS"],
        milestone: "Specialized in full-stack development"
    },
    {
        year: "2025",
        skills: ["PostgreSQL", "Docker", "Redis"],
        milestone: "Advanced tools and deployment technologies"
    }
];