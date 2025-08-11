import React, { useState, useRef, useEffect } from "react";

const LazyImage = ({
  src,
  alt,
  className = "",
  placeholder = null,
  onLoad = () => {},
  onError = () => {},
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  const handleError = () => {
    setHasError(true);
    onError();
  };

  const defaultPlaceholder = (
    <div
      className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
    >
      <svg
        className="w-8 h-8 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
      </svg>
    </div>
  );

  const errorPlaceholder = (
    <div
      className={`bg-gray-100 flex items-center justify-center ${className}`}
    >
      <div className="text-center text-gray-500">
        <svg
          className="w-8 h-8 mx-auto mb-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z" />
        </svg>
        <p className="text-xs">Failed to load</p>
      </div>
    </div>
  );

  return (
    <div ref={imgRef} className="relative">
      {!isInView && (placeholder || defaultPlaceholder)}

      {isInView && !hasError && (
        <>
          {!isLoaded && (placeholder || defaultPlaceholder)}
          <img
            src={src}
            alt={alt}
            className={`${className} ${
              isLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            {...props}
          />
        </>
      )}

      {hasError && errorPlaceholder}
    </div>
  );
};

export default LazyImage;
