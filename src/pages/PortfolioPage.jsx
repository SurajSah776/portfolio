import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projectsData.map((project) => project.category))];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === filter);

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-primary min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">My Work</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Here are some of the projects I've built for clients. Each one represents a unique challenge and solution.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl
              ${filter === category ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 border border-gray-700 hover:border-gray-600 group card-hover"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm px-4 py-2 rounded-full border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="bg-primary text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg text-sm"
                >
                  View Case Study
                </Link>
                <div className="space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;