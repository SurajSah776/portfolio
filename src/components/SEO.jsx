import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Portfolio - Full-Stack Developer at ESSPL",
  description = "Professional portfolio of a Full-Stack Developer specializing in React.js, Python, FastAPI, and modern web development. Currently working at ESSPL with expertise in e-commerce platforms and scalable web applications.",
  keywords = "React developer, Python developer, Full-stack developer, FastAPI, JavaScript, SQL Server, Tailwind CSS, Django, Web development, ESSPL, E-commerce development",
  author = "Full-Stack Developer",
  url = "https://yourportfolio.com",
  image = "https://yourportfolio.com/images/og-image.jpg",
  type = "website",
  twitterHandle = "@yourhandle",
  structuredData = null,
  canonical = null,
}) => {
  const siteTitle = title.includes("Portfolio")
    ? title
    : `${title} | Portfolio - Full-Stack Developer`;
  const fullUrl = canonical || url;

  // Default structured data for the website
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Full-Stack Developer",
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "ESSPL",
    },
    url: url,
    sameAs: [
      "https://linkedin.com/in/yourprofile",
      "https://github.com/yourusername",
      "https://twitter.com/yourhandle",
    ],
    knowsAbout: [
      "React.js",
      "Python",
      "FastAPI",
      "JavaScript",
      "SQL Server",
      "Tailwind CSS",
      "Django",
      "Web Development",
      "E-commerce Development",
    ],
    description: description,
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content={`${author} - Professional Portfolio`}
      />
      <meta
        property="og:site_name"
        content="Portfolio - Full-Stack Developer"
      />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content={`${author} - Professional Portfolio`}
      />

      {/* Additional Meta Tags for Professional Portfolio */}
      <meta name="theme-color" content="#9810fa" />
      <meta name="msapplication-TileColor" content="#9810fa" />
      <meta name="application-name" content="Portfolio" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
