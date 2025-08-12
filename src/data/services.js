// Freelance services and professional offerings
export const freelanceServices = [
    {
        id: "react-frontend",
        title: "React.js Frontend Development",
        description: "Modern, responsive web applications with React.js",
        icon: "⚛️",
        features: [
            "Single Page Applications (SPA)",
            "Responsive Design with Tailwind CSS",
            "State Management (Redux/Context)",
            "Performance Optimization",
            "Component Libraries",
            "Testing & Quality Assurance"
        ],
        technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
        deliverables: ["Source Code", "Documentation", "Deployment Guide", "Testing Suite"],
        timeline: "2-6 weeks",
        idealFor: "Startups, Small Businesses, Personal Projects",
        pricing: {
            starting: "$500",
            range: "$500 - $1000",
            note: "Based on project complexity and requirements"
        },
        complexity: "Medium",
        category: "frontend"
    },
    {
        id: "python-backend",
        title: "Python FastAPI Backend Development",
        description: "Scalable backend APIs with Python FastAPI",
        icon: "⚡",
        features: [
            "RESTful API Development",
            "Database Integration with SQL Server",
            "Authentication & Authorization",
            "Automatic API Documentation",
            "Performance Optimization",
            "Testing & Validation"
        ],
        technologies: ["Python", "FastAPI", "SQL Server", "JWT"],
        deliverables: ["API Endpoints", "Database Schema", "API Documentation", "Testing Suite"],
        timeline: "3-8 weeks",
        idealFor: "Web Applications, Mobile App Backends, Data APIs",
        pricing: {
            starting: "$800",
            range: "$800 - $1500",
            note: "Depends on API complexity and integrations"
        },
        complexity: "High",
        category: "backend"
    },
    {
        id: "fullstack-ecommerce",
        title: "Full-Stack E-commerce Solutions",
        description: "Complete e-commerce platforms from frontend to backend",
        icon: "🛒",
        features: [
            "Product Catalog Management",
            "Shopping Cart & Checkout",
            "Payment Integration",
            "User Authentication",
            "Admin Dashboard",
            "Order Management System"
        ],
        technologies: ["React.js", "Python", "FastAPI", "SQL Server", "Tailwind CSS"],
        deliverables: [
            "Complete Platform",
            "Admin Panel",
            "User Documentation",
            "Deployment Setup"
        ],
        timeline: "8-16 weeks",
        idealFor: "E-commerce Businesses, Online Marketplaces",
        pricing: {
            starting: "$2000",
            range: "$2000 - $5000",
            note: "Comprehensive solution with all features included"
        },
        complexity: "High",
        category: "fullstack"
    },
    {
        id: "web-application",
        title: "Custom Web Applications",
        description: "Tailored web solutions for specific business needs",
        icon: "🌐",
        features: [
            "Custom Business Logic",
            "Database Design & Integration",
            "User Management System",
            "Responsive Design",
            "API Integration",
            "Performance Optimization"
        ],
        technologies: ["React.js", "Python", "FastAPI", "SQL Server", "Tailwind CSS"],
        deliverables: [
            "Custom Application",
            "Database Setup",
            "User Manual",
            "Maintenance Guide"
        ],
        timeline: "4-12 weeks",
        idealFor: "Businesses, Organizations, Custom Requirements",
        pricing: {
            starting: "$1200",
            range: "$1200 - $3000",
            note: "Custom solution based on specific requirements"
        },
        complexity: "Medium-High",
        category: "fullstack"
    }
];

// Service categories for filtering
export const serviceCategories = [
    { id: "all", name: "All Services", icon: "🔧" },
    { id: "frontend", name: "Frontend", icon: "🎨" },
    { id: "backend", name: "Backend", icon: "⚙️" },
    { id: "fullstack", name: "Full-Stack", icon: "🌐" }
];

// Process and methodology
export const developmentProcess = [
    {
        step: 1,
        title: "Discovery & Planning",
        description: "Understanding requirements and creating detailed project plan",
        duration: "1-2 weeks",
        deliverables: ["Project Scope", "Technical Specification", "Timeline"]
    },
    {
        step: 2,
        title: "Design & Architecture",
        description: "Creating system architecture and user interface designs",
        duration: "1-2 weeks",
        deliverables: ["System Architecture", "UI/UX Designs", "Database Schema"]
    },
    {
        step: 3,
        title: "Development",
        description: "Implementing features with regular progress updates",
        duration: "Varies",
        deliverables: ["Working Software", "Code Documentation", "Progress Reports"]
    },
    {
        step: 4,
        title: "Testing & Deployment",
        description: "Quality assurance testing and production deployment",
        duration: "1 week",
        deliverables: ["Tested Application", "Deployment Setup", "User Training"]
    }
];

// Professional guarantees and policies
export const serviceGuarantees = {
    qualityAssurance: "100% satisfaction guarantee",
    responseTime: "24-hour response time",
    revisions: "Unlimited revisions during development",
    support: "30-day post-launch support",
    codeQuality: "Clean, documented, and maintainable code",
    delivery: "On-time delivery commitment"
};

// Availability and capacity
export const availability = {
    status: "Available",
    capacity: "2-3 projects simultaneously",
    nextAvailable: "Immediate start",
    workingHours: "9 AM - 6 PM IST",
    timezone: "IST (UTC+5:30)",
    weekends: "Available for urgent projects"
};