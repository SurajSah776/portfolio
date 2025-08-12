// Sitemap generator utility for the portfolio website
import { projects } from '../data/projects.js';

const siteUrl = 'https://yourportfolio.com';

// Static pages configuration
const staticPages = [
    {
        url: '/',
        changefreq: 'weekly',
        priority: '1.0',
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        url: '/about',
        changefreq: 'monthly',
        priority: '0.8',
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        url: '/portfolio',
        changefreq: 'weekly',
        priority: '0.9',
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        url: '/services',
        changefreq: 'monthly',
        priority: '0.8',
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        url: '/contact',
        changefreq: 'monthly',
        priority: '0.7',
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        url: '/experience',
        changefreq: 'monthly',
        priority: '0.8',
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        url: '/resume',
        changefreq: 'monthly',
        priority: '0.7',
        lastmod: new Date().toISOString().split('T')[0]
    },

    {
        url: '/certifications',
        changefreq: 'monthly',
        priority: '0.6',
        lastmod: new Date().toISOString().split('T')[0]
    }
];

// Generate dynamic project pages
const generateProjectPages = () => {
    return projects.map(project => ({
        url: `/portfolio/${project.id}`,
        changefreq: 'monthly',
        priority: project.featured ? '0.8' : '0.7',
        lastmod: project.lastUpdated || new Date().toISOString().split('T')[0]
    }));
};

// Generate complete sitemap
export const generateSitemap = () => {
    const allPages = [...staticPages, ...generateProjectPages()];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemapXml;
};

// Generate sitemap for build process
export const writeSitemap = () => {
    const sitemapContent = generateSitemap();

    // In a real build process, you would write this to public/sitemap.xml
    // For now, we'll return the content for manual creation
    return sitemapContent;
};

// SEO-friendly URL generator
export const generateSEOUrl = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim('-'); // Remove leading/trailing hyphens
};

// Meta description generator for projects
export const generateProjectMetaDescription = (project) => {
    const techStack = project.technologies.slice(0, 3).join(', ');
    return `${project.description} Built with ${techStack}. ${project.category} project showcasing Full-Stack development expertise in React.js and Python.`;
};

// Keywords generator for projects
export const generateProjectKeywords = (project) => {
    const baseKeywords = [
        'Full-stack project',
        'React.js project',
        'Python project',
        'Web development',
        'Portfolio project'
    ];

    const techKeywords = project.technologies.map(tech => `${tech} project`);
    const categoryKeywords = [`${project.category} development`, `${project.category} project`];

    return [...baseKeywords, ...techKeywords, ...categoryKeywords, project.title].join(', ');
};