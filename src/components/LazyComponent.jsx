import React, { Suspense, lazy } from "react";
import SkeletonLoader from "./SkeletonLoader";

// Lazy load components with error boundaries
const createLazyComponent = (importFunc, fallbackVariant = "default") => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={<SkeletonLoader variant={fallbackVariant} />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Pre-configured lazy components
export const LazyFeaturedProjects = createLazyComponent(
  () => import("./FeaturedProjects"),
  "card"
);

export const LazySkills = createLazyComponent(
  () => import("./Skills"),
  "skill"
);

export const LazyContactForm = createLazyComponent(
  () => import("./ContactForm"),
  "default"
);

export const LazyTestimonials = createLazyComponent(
  () => import("./Testimonials"),
  "card"
);

export const LazyProjectCard = createLazyComponent(
  () => import("./ProjectCard"),
  "card"
);

// Generic lazy wrapper
export const withLazyLoading = (Component, fallbackVariant = "default") => {
  return (props) => (
    <Suspense fallback={<SkeletonLoader variant={fallbackVariant} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default createLazyComponent;
