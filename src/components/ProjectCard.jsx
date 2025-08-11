import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const ProjectCard = ({ project }) => {
  const { classes } = useTheme();

  return (
    <div
      className={`card-hover ${classes.cardBg} rounded-xl shadow-lg overflow-hidden transition-colors duration-300`}
    >
      {/* Project card content will be implemented in future tasks */}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${classes.text}`}>
          {project?.title || "Project Title"}
        </h3>
        <p className={`${classes.textMuted} mb-4`}>
          {project?.description || "Project description"}
        </p>
        <div className="flex gap-4">
          <Link
            to={`/portfolio/${project?.id || "project"}`}
            className="text-purple-600 hover:text-purple-700 hover:underline transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
