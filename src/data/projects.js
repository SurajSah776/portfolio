// Project data for portfolio showcase
export const projects = [
    {
        id: "ecommerce-platform",
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with modern UI and robust backend",
        longDescription: "Comprehensive e-commerce platform built with React.js frontend and Python FastAPI backend. Features include product catalog management, shopping cart functionality, secure payment integration, user authentication, and admin dashboard for inventory management. This is my biggest and most complex project, showcasing full-stack development expertise.",
        image: "/images/ecommerce/hero.png",
        gallery: [
            "/images/ecommerce/hero.png",
            "/images/ecommerce/support.png",
            "/images/ecommerce/mobile.png"
        ],
        technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "FastAPI", "SQL Alchemy", "Alembic", "PostgreSQL", "JWT", "Docker", "CI/CD"],
        category: "Full-Stack",
        featured: true,
        status: "In Development",
        duration: "6 months",
        teamSize: "2 Developers",
        role: "Full-Stack Developer",
        liveUrl: "https://pozz-frontend.onrender.com",
        githubUrl: "https://github.com/SurajSah776",
        demoVideo: "#",
        problemStatement: "Modern businesses need robust e-commerce solutions that can handle complex inventory management, secure payments, and provide excellent user experience across all devices.",
        solutionApproach: "Built a comprehensive platform using React.js for dynamic frontend interactions and Python FastAPI for high-performance backend APIs, with PostgreSQL for reliable data management.",
        keyFeatures: [
            "Product catalog with advanced search and filtering",
            "Shopping cart with persistent sessions",
            "Secure payment processing with eSewa and Khalti integration",
            "User authentication and profile management",
            "Admin dashboard for inventory and order management",
            "Real-time notifications and updates",
            "Responsive design for all devices",
            "SEO-optimized product pages"
        ],
        technicalImplementation: [
            "React.js with Redux Toolkit for state management",
            "FastAPI with async/await for high-performance APIs",
            "PostgreSQL for reliable data storage with optimized queries and indexing",
            "JWT authentication with refresh token rotation",
            "Tailwind CSS for responsive design system"
        ],
        challenges: [
            "Payment integration with multiple gateways and handling edge cases",
            "Real-time inventory management across multiple product variants",
            "Scalable user authentication system with role-based access",
            "Performance optimization for large product catalogs",
            "Cross-browser compatibility and mobile responsiveness"
        ],
        solutions: [
            "Real-time stock updates using WebSocket connections with Redis caching",
            "JWT-based authentication with refresh token mechanism and role middleware",
            "Database query optimization and lazy loading for improved performance",
            "Progressive Web App features and responsive design testing"
        ],
        outcomes: [
            "Scalable architecture supporting 1000+ concurrent users",
            "Modern responsive design with 95% mobile usability score",
            "Reduced cart abandonment through UX improvements"
        ],
        learnings: [
            "Advanced React.js patterns and performance optimization techniques",
            "FastAPI best practices for building scalable APIs",
            "Payment gateway integration and security considerations",
            "Database design for e-commerce applications",
            "User experience design for conversion optimization"
        ],
        metrics: {
            linesOfCode: "25,000+",
            components: "100+",
            apiEndpoints: "280+",
            testCoverage: "75%"
        }
    },
    {
        id: "digiaayam",
        title: "DigiAayam",
        description: "Startup company platform with innovative digital solutions",
        longDescription: "Digital platform for DigiAayam startup focusing on innovative business solutions. Built with modern web technologies to provide scalable and efficient digital services for growing businesses. This project showcases my ability to work in fast-paced startup environments and deliver MVP solutions quickly.",
        image: "/images/digiaayam/digiaayam-hero.png",
        gallery: [
            "/images/digiaayam/digiaayam-hero.png",
            "/images/digiaayam/digiaayam-services.png",
            "/images/digiaayam/digiaayam-about.png",
            "/images/digiaayam/digiaayam-footer.png",
        ],
        technologies: ["React.js", "Tailwind CSS", "Docker", "CI/CD"],
        category: "Startup",
        featured: true,
        status: "Completed",
        duration: "1 month",
        teamSize: "Solo Project",
        role: "Lead Full-Stack Developer",
        liveUrl: "https://digiaayam.onrender.com",
        githubUrl: "https://github.com/SurajSah776",
        demoVideo: "#",
        problemStatement: "Digiaayam startup needed a comprehensive digital platform to showcase their services and manage client interactions efficiently while maintaining scalability for rapid growth.",
        solutionApproach: "Developed a modern web platform using React.js for dynamic user interfaces and FastAPI for robust backend services, focusing on rapid development and scalability.",
        keyFeatures: [
            "Service showcase with interactive elements",
            "Contact and inquiry management system",
            "Blog and content management",
            "Mobile-responsive design",
            "SEO optimization for better visibility"
        ],
        technicalImplementation: [
            "React.js with hooks and functional components",
            "Tailwind CSS for rapid UI development",
            "Mobile friendly responsive UI"
        ],
        challenges: [
            "Rapid prototyping and development within tight deadlines",
            "Scalable architecture for anticipated growth",
            "Modern user interface design that stands out",
            "Integration with third-party services",
            "Performance optimization for fast loading"
        ],
        solutions: [
            "Agile development methodology with weekly sprints and continuous feedback",
            "Component-based UI with React.js and Tailwind CSS for consistency",
            "Code splitting and lazy loading for optimal performance"
        ],
        outcomes: [
            "Successfully launched this platform within 1 month",
            "Achieved 99% uptime in production environment",
            "Positive user feedback on interface design and usability",
            "Platform ready for scaling with growing business needs"
        ],
        learnings: [
            "Startup development methodologies and MVP approach",
            "Rapid prototyping with modern web technologies",
            "Client communication and requirement gathering",
            "Performance optimization for production environments",
            "Agile project management and delivery"
        ],
        metrics: {
            linesOfCode: "2,000+",
            components: "20+",
            apiEndpoints: "5+",
            testCoverage: "80%"
        }
    },
    {
        id: "bookmart",
        title: "BookMart",
        description: "Book buy/sell marketplace platform connecting readers",
        longDescription: "Marketplace platform connecting book buyers and sellers with features for listing books, secure transactions, user ratings, and search functionality. Built to create a community-driven book trading ecosystem that promotes reading culture and sustainable book sharing.",
        image: "/images/bookmart/bookmart-hero.jpg",
        gallery: [
            "/images/bookmart/bookmart-hero.jpg",
            "/images/bookmart/bookmart-working.jpg",
            "/images/bookmart/bookmart-login.jpg",
        ],
        technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        category: "Marketplace",
        featured: true,
        status: "Completed",
        duration: "4 months",
        teamSize: "2 Developers",
        role: "Full-Stack Developer",
        liveUrl: "#",
        githubUrl: "https://github.com/SurajSah776/book-mart",
        demoVideo: "#",
        problemStatement: "Book lovers needed a trusted platform to buy, sell, and exchange books while building a community of readers and promoting sustainable book sharing practices.",
        solutionApproach: "Created a comprehensive marketplace using React.js for interactive user experience and Node.js for robust backend functionality, with focus on trust-building and community features.",
        keyFeatures: [
            "Book listing with detailed descriptions and images",
            "Advanced search and filtering by book-name, author, condition",
            "Secure messaging system between buyers and sellers",
            "Mobile-responsive design for on-the-go access"
        ],
        technicalImplementation: [
            "React.js with Redux for complex state management",
            "Node.js for backend",
            "WebSocket integration for real-time messaging",
            "Image upload and optimization for book photos",
        ],
        challenges: [
            "Building trust between buyers and sellers in online marketplace",
            "Efficient search and filtering system for large book database",
            "Real-time messaging system for user communication",
            "Image optimization and storage for book photos"
        ],
        solutions: [
            "Advanced search with multiple filters",
            "WebSocket-based real-time chat with message history"
        ],
        outcomes: ["Built active community of readers with regular engagement",
            "Reduced book waste by promoting reuse and sharing"
        ],
        learnings: [
            "Marketplace dynamics and trust-building mechanisms",
            "Real-time communication implementation with WebSockets",
            "Community building features and user engagement"
        ],
        metrics: {
            linesOfCode: "5,000+",
            components: "25+",
            apiEndpoints: "10+",
            testCoverage: "70%"
        }
    },
    {
        id: "kiithub",
        title: "KIITHub",
        description: "Minimal social media platform for KIIT University students",
        longDescription: "Social networking platform designed specifically for KIIT University students to connect, share academic resources, collaborate on projects, and build professional networks within the university community. Features a clean, minimal design focused on academic collaboration and student engagement.",
        image: "/images/kiithub/kiithub-hero.jpg",
        gallery: [
            "/images/kiithub-hero.jpg",
            "/images/kiithub/kiithub-message.jpg",
        ],
        technologies: ["React.js", "Context API", "Node.js", "Express.js", "MongoDB", "WebSocket"],
        category: "Social Media",
        featured: false,
        status: "Completed(with less features)",
        duration: "3 months",
        teamSize: "2 developers",
        role: "Frontend Lead & Backend Developer",
        liveUrl: "#",
        githubUrl: "https://github.com/SurajSah776/kiit-hub",
        demoVideo: "#",
        problemStatement: "KIIT University students needed a dedicated platform to connect with peers, share academic resources, collaborate on projects, and build professional networks within their university community.",
        solutionApproach: "Developed a minimal, focused social media platform using React.js for smooth user interactions and FastAPI for efficient backend services, emphasizing academic collaboration over general social features.",
        keyFeatures: [
            "Student profiles with academic information",
            "News feed with academic posts and updates",
            "Resource sharing for notes and materials",
            "Direct messaging for peer communication",
            "Minimal, distraction-free interface design"
        ],
        technicalImplementation: [
            "React.js with Context API for state management",
            "Node.js for backend",
            "MongoDB for user data and content storage",
            "WebSocket for real-time notifications and messaging",
        ],
        challenges: [
            "Creating engaging user experience without social media distractions",
            "Managing user-generated content and ensuring appropriate usage",
            "Building community features that promote academic collaboration",
            "Scalability for growing student user base",
        ],
        solutions: [
            "Intuitive interface with minimal design focused on academic content",
            "Efficient database design",
        ],
        outcomes: [
            "Not Deployed yet",
            "Some portions are not implemented",
        ],
        learnings: [
            "Social media platform architecture and user engagement strategies",
            "Content moderation and community management systems",
            "Real-time features implementation with WebSockets",
            "University system integration and academic workflows",
            "Minimal design principles for focused user experience"
        ],
        metrics: {
            linesOfCode: "10,000+",
            components: "35+",
            apiEndpoints: "20+",
            testCoverage: "70%"
        }
    }
];

// Featured projects for homepage showcase
export const featuredProjects = projects.filter(project => project.featured);

// Project categories for filtering
export const projectCategories = [
    "All",
    "Full-Stack",
    "Frontend",
    "Backend",
    "Startup",
    "Marketplace",
    "Social Media"
];

// All technologies used across projects
export const allTechnologies = [
    "React.js",
    "Redux Toolkit",
    "FastAPI",
    "PostgreSQL",
    "Tailwind CSS",
    "Python",
    "JWT",
    "Docker",
    "WebSocket",
    "Redis",
    "CI/CD",
    "SQL Alchemy",
    "Alembic"
];

// Project statistics for showcase
export const projectStats = {
    totalProjects: projects.length,
    completedProjects: projects.filter(p => p.status === "Completed").length,
    inDevelopment: projects.filter(p => p.status === "In Development").length,
    totalLinesOfCode: "40,000+",
    totalComponents: "200+",
    totalApiEndpoints: "280+"
};

// Helper functions
export const getProjectById = (id) => {
    return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category) => {
    if (category === "All") return projects;
    return projects.filter(project => project.category === category);
};

export const getProjectsByTechnology = (technology) => {
    return projects.filter(project =>
        project.technologies.includes(technology)
    );
};

export const getProjectsByStatus = (status) => {
    return projects.filter(project => project.status === status);
};