// SEO data configurations for different pages
export const seoData = {
    home: {
        title: 'Portfolio - Full-Stack Developer at ESSPL',
        description: 'Professional portfolio of a Full-Stack Developer specializing in React.js, Python, FastAPI, and modern web development. Currently working at ESSPL with expertise in e-commerce platforms and scalable web applications.',
        keywords: 'React developer, Python developer, Full-stack developer, FastAPI, JavaScript, SQL Server, Tailwind CSS, Django, Web development, ESSPL, E-commerce development, Portfolio',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Full-Stack Developer",
            "jobTitle": "Full-Stack Developer",
            "worksFor": {
                "@type": "Organization",
                "name": "ESSPL"
            },
            "url": "https://yourportfolio.com",
            "sameAs": [
                "https://linkedin.com/in/yourprofile",
                "https://github.com/yourusername",
                "https://twitter.com/yourhandle"
            ],
            "knowsAbout": [
                "React.js",
                "Python",
                "FastAPI",
                "JavaScript",
                "SQL Server",
                "Tailwind CSS",
                "Django",
                "Web Development",
                "E-commerce Development"
            ],
            "description": "Professional Full-Stack Developer at ESSPL specializing in React.js frontend and Python FastAPI backend development"
        }
    },

    about: {
        title: 'About - Full-Stack Developer Profile',
        description: 'Learn about my journey as a Full-Stack Developer at ESSPL. Expertise in React.js, Python, FastAPI, and building scalable web applications including e-commerce platforms.',
        keywords: 'About Full-stack developer, React.js expert, Python developer, ESSPL developer, Web development experience, Professional background',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
                "@type": "Person",
                "name": "Full-Stack Developer",
                "jobTitle": "Full-Stack Developer",
                "worksFor": {
                    "@type": "Organization",
                    "name": "ESSPL"
                },
                "description": "Experienced Full-Stack Developer with expertise in modern web technologies and scalable application development"
            }
        }
    },

    portfolio: {
        title: 'Portfolio - React.js & Python Projects',
        description: 'Explore my portfolio of React.js and Python projects including e-commerce platforms, startup solutions, and web applications. Showcasing expertise in FastAPI, SQL Server, and modern web development.',
        keywords: 'React.js projects, Python projects, FastAPI portfolio, E-commerce platform, Web development portfolio, Full-stack projects, ESSPL projects',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio Projects",
            "description": "Collection of Full-Stack development projects showcasing React.js and Python expertise",
            "author": {
                "@type": "Person",
                "name": "Full-Stack Developer",
                "jobTitle": "Full-Stack Developer"
            }
        }
    },

    services: {
        title: 'Freelance Services - React.js & Python Development',
        description: 'Professional freelance services for React.js frontend development, Python FastAPI backend development, and full-stack e-commerce solutions. Available for hire alongside ESSPL role.',
        keywords: 'React.js freelance, Python freelance, FastAPI development services, Full-stack freelancer, E-commerce development, Web development services',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Full-Stack Development Services",
            "description": "Professional React.js and Python development services",
            "provider": {
                "@type": "Person",
                "name": "Full-Stack Developer",
                "jobTitle": "Full-Stack Developer"
            },
            "serviceType": [
                "React.js Frontend Development",
                "Python FastAPI Backend Development",
                "Full-Stack E-commerce Solutions"
            ]
        }
    },

    contact: {
        title: 'Contact - Hire Full-Stack Developer',
        description: 'Get in touch for React.js, Python, and full-stack development projects. Available for freelance work alongside my role at ESSPL. Professional web development services.',
        keywords: 'Contact React developer, Hire Python developer, Full-stack developer contact, Freelance web developer, ESSPL developer contact',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
                "@type": "Person",
                "name": "Full-Stack Developer",
                "jobTitle": "Full-Stack Developer",
                "email": "your-email@gmail.com",
                "url": "https://yourportfolio.com/contact"
            }
        }
    },

    experience: {
        title: 'Experience - Full-Stack Developer at ESSPL',
        description: 'Professional experience as a Full-Stack Developer at ESSPL. Career timeline, achievements, and expertise in React.js, Python, FastAPI, and web development projects.',
        keywords: 'ESSPL developer experience, Full-stack developer career, React.js experience, Python development experience, Professional timeline',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Full-Stack Developer",
            "jobTitle": "Full-Stack Developer",
            "worksFor": {
                "@type": "Organization",
                "name": "ESSPL"
            },
            "hasOccupation": {
                "@type": "Occupation",
                "name": "Full-Stack Developer",
                "occupationLocation": {
                    "@type": "Place",
                    "name": "ESSPL"
                },
                "skills": [
                    "React.js",
                    "Python",
                    "FastAPI",
                    "JavaScript",
                    "SQL Server",
                    "Tailwind CSS",
                    "Django"
                ]
            }
        }
    },

    resume: {
        title: 'Resume - Full-Stack Developer CV',
        description: 'Download professional resume of Full-Stack Developer at ESSPL. Expertise in React.js, Python, FastAPI, and modern web development. Available for freelance projects.',
        keywords: 'Full-stack developer resume, React.js developer CV, Python developer resume, ESSPL developer CV, Web developer resume download',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Full-Stack Developer",
            "jobTitle": "Full-Stack Developer",
            "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "name": "Full-Stack Development Expertise",
                "credentialCategory": "Professional Experience"
            }
        }
    },

    testimonials: {
        title: 'Testimonials - Client Reviews & Recommendations',
        description: 'Client testimonials and professional recommendations for Full-Stack development services. Reviews for React.js, Python, and e-commerce development projects.',
        keywords: 'Developer testimonials, Client reviews, React.js developer reviews, Python developer testimonials, Full-stack developer recommendations',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Full-Stack Developer",
            "review": {
                "@type": "Review",
                "reviewBody": "Professional testimonials and client feedback",
                "author": {
                    "@type": "Organization",
                    "name": "Client Reviews"
                }
            }
        }
    },

    certifications: {
        title: 'Certifications - Professional Development & Skills',
        description: 'Professional certifications and educational background in Full-Stack development, React.js, Python, and modern web technologies. Continuous learning and skill development.',
        keywords: 'Developer certifications, React.js certifications, Python certifications, Full-stack developer education, Professional development',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Full-Stack Developer",
            "hasCredential": [
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "React.js Development",
                    "credentialCategory": "Professional Certification"
                },
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Python Development",
                    "credentialCategory": "Professional Certification"
                }
            ]
        }
    }
};

// Project-specific SEO data generator
export const generateProjectSEO = (project) => {
    return {
        title: `${project.title} - Full-Stack Project Case Study`,
        description: `${project.description} Built with ${project.technologies.join(', ')}. Detailed case study of Full-Stack development project showcasing React.js and Python expertise.`,
        keywords: `${project.title}, ${project.technologies.join(', ')}, Full-stack project, React.js project, Python project, Case study, Web development`,
        structuredData: {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "author": {
                "@type": "Person",
                "name": "Full-Stack Developer",
                "jobTitle": "Full-Stack Developer"
            },
            "about": project.technologies,
            "url": `https://yourportfolio.com/portfolio/${project.id}`,
            "dateCreated": project.date || "2024",
            "programmingLanguage": project.technologies
        }
    };
};

// Site-wide SEO configuration
export const siteConfig = {
    siteName: 'Portfolio - Full-Stack Developer',
    siteUrl: 'https://yourportfolio.com',
    author: 'Full-Stack Developer',
    twitterHandle: '@yourhandle',
    defaultImage: 'https://yourportfolio.com/images/og-image.jpg',
    themeColor: '#9810fa',
    backgroundColor: '#ffffff',
    language: 'en',
    locale: 'en_US'
};