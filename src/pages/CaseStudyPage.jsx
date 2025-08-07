import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication and payment gateway integration.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    thumbnail: 'https://via.placeholder.com/400x250/0000FF/FFFFFF?text=Project+1',
    category: 'Web Apps',
    slug: 'e-commerce-platform',
    problem: 'Clients needed a robust online store to sell their products globally.',
    role: 'Lead Frontend Developer & Backend Integrator',
    solution: 'Developed a responsive e-commerce platform using React for the frontend, FastAPI for the backend API, and PostgreSQL for database management. Implemented secure user authentication, product catalog management, shopping cart functionality, and integrated with a third-party payment gateway.',
    results: 'Increased online sales by 30% within the first three months of launch. Improved user engagement by 25% due to intuitive UI/UX.',
    screenshots: [
      'https://via.placeholder.com/800x500/0000FF/FFFFFF?text=Screenshot+1',
      'https://via.placeholder.com/800x500/0000FF/FFFFFF?text=Screenshot+2',
    ],
    testimonial: {
      quote: '[Client Name] delivered an outstanding e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise were invaluable.',
      client: 'John Doe, CEO of E-Shop Inc.',
    },
  },
  {
    id: 2,
    title: 'Portfolio Website Redesign',
    description: 'Modern and responsive redesign of a freelance portfolio website.',
    technologies: ['React', 'Tailwind CSS', 'Figma'],
    liveUrl: '#',
    githubUrl: '#',
    thumbnail: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=Project+2',
    category: 'UI/UX',
    slug: 'portfolio-redesign',
    problem: 'Existing portfolio website was outdated, not mobile-friendly, and lacked modern aesthetics.',
    role: 'UI/UX Designer & Frontend Developer',
    solution: 'Conducted a comprehensive UI/UX audit, designed a new modern interface in Figma, and then implemented the responsive design using React and Tailwind CSS. Focused on improving user experience and visual appeal.',
    results: 'Increased website traffic by 40% and reduced bounce rate by 15%. Received positive feedback on the new design and improved navigation.',
    screenshots: [
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=Screenshot+1',
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=Screenshot+2',
    ],
    testimonial: null,
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'Robust RESTful API for managing tasks, users, and projects.',
    technologies: ['FastAPI', 'PostgreSQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    thumbnail: 'https://via.placeholder.com/400x250/00FF00/FFFFFF?text=Project+3',
    category: 'Full-Stack',
    slug: 'task-management-api',
    problem: 'Clients needed a scalable and secure backend for their task management application.',
    role: 'Backend Developer',
    solution: 'Designed and implemented a RESTful API using FastAPI, PostgreSQL for data storage, and Docker for containerization. Developed endpoints for user authentication, task creation, assignment, and project management.',
    results: 'Provided a highly performant and reliable backend solution, enabling seamless data synchronization across client applications. Reduced development time for frontend teams by providing clear API documentation.',
    screenshots: [
      'https://via.placeholder.com/800x500/00FF00/FFFFFF?text=Screenshot+1',
      'https://via.placeholder.com/800x500/00FF00/FFFFFF?text=Screenshot+2',
    ],
    testimonial: null,
  },
  {
    id: 4,
    title: 'Blog Content Management',
    description: 'A simple blog platform with markdown support and admin panel.',
    technologies: ['React', 'FastAPI', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    thumbnail: 'https://via.placeholder.com/400x250/FFFF00/000000?text=Project+4',
    category: 'Web Apps',
    slug: 'blog-cms',
    problem: 'Clients needed a simple yet powerful platform to manage and publish blog content.',
    role: 'Full-Stack Developer',
    solution: 'Developed a blog platform with a React frontend for content display and an admin panel, and a FastAPI backend for managing posts. Implemented markdown support for easy content creation and PostgreSQL for data storage.',
    results: 'Enabled clients to easily publish and manage their blog content, improving their content marketing efforts. Provided a user-friendly interface for both readers and administrators.',
    screenshots: [
      'https://via.placeholder.com/800x500/FFFF00/000000?text=Screenshot+1',
      'https://via.placeholder.com/800x500/FFFF00/000000?text=Screenshot+2',
    ],
    testimonial: null,
  },
];

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto p-8 bg-gray-900 bg-primary min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-primary min-h-screen">
      <Link to="/portfolio" className="text-purple-600 hover:underline mb-8 inline-block">&larr; Back to Portfolio</Link>

      <h1 className="text-5xl font-bold text-center mb-6">{project.title}</h1>
      {project.client && <p className="text-xl text-gray-400 text-center mb-12">Client: {project.client}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Problem Statement</h2>
          <p className="text-lg leading-relaxed text-gray-300">{project.problem}</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">My Role & Solution</h2>
          <p className="text-lg leading-relaxed text-gray-300">{project.role}</p>
          <p className="text-lg leading-relaxed text-gray-300 mt-4">{project.solution}</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-800 text-primary px-4 py-2 rounded-full text-lg shadow-md">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.results && (
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Results & Impact</h2>
          <p className="text-lg leading-relaxed text-gray-300">{project.results}</p>
        </div>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Screenshots & Mockups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            ))}
          </div>
        </div>
      )}

      {project.testimonial && (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold mb-4">Client Testimonial</h2>
          <p className="text-xl italic text-gray-300 mb-4">"{project.testimonial.quote}"</p>
          <p className="text-lg font-bold text-primary">- {project.testimonial.client}</p>
        </div>
      )}

      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold mb-6">Need a similar solution?</h2>
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-primary font-bold py-3 px-8 rounded-full transition duration-300 text-xl"
        >
          Let's Talk
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyPage;
