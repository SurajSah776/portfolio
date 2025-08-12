import React, { Suspense } from "react";
import Hero from "../components/Hero";
import SkeletonLoader from "../components/SkeletonLoader";
import { useTheme } from "../contexts/ThemeContext";

// Lazy load non-critical components
const FeaturedProjects = React.lazy(() =>
  import("../components/FeaturedProjects")
);
const Skills = React.lazy(() => import("../components/Skills"));
const AchievementShowcase = React.lazy(() =>
  import("../components/AchievementShowcase")
);

const Homepage = () => {
  const { classes } = useTheme();

  return (
    <div
      className={`min-h-screen ${classes.bg} transition-colors duration-300`}
    >
      {/* Hero Section - Critical, load immediately */}
      <Hero />

      {/* Featured Projects Section - Lazy loaded */}
      <Suspense
        fallback={
          <SkeletonLoader
            variant="card"
            count={3}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
          />
        }
      >
        <FeaturedProjects />
      </Suspense>

      {/* Skills Section - Lazy loaded */}
      <Suspense
        fallback={
          <SkeletonLoader
            variant="skill"
            count={4}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
          />
        }
      >
        <Skills />
      </Suspense>

      {/* Achievement Showcase Section - Lazy loaded */}
      <Suspense
        fallback={
          <SkeletonLoader
            variant="card"
            count={6}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-16"
          />
        }
      >
        <AchievementShowcase />
      </Suspense>
    </div>
  );
};

export default Homepage;
