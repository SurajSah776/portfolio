import React from "react";

const SocialMediaTracker = ({ platform, url, children, className = "" }) => {
  const handleClick = (e) => {
    // Track social media clicks for analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "social_click", {
        social_network: platform,
        social_action: "click",
        social_target: url,
      });
    }

    // Log for development
    console.log(`Social media click tracked: ${platform} - ${url}`);
  };

  const getTargetAndRel = () => {
    if (platform === "Gmail" || url.startsWith("mailto:")) {
      return {};
    }
    return {
      target: "_blank",
      rel: "noopener noreferrer",
    };
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      className={className}
      aria-label={`Connect with me on ${platform}`}
      {...getTargetAndRel()}
    >
      {children}
    </a>
  );
};

export default SocialMediaTracker;
