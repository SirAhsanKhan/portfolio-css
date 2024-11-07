import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  isLink: boolean;
  technologies: string[];
  backgroundImage: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, isLink, technologies, backgroundImage }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg w-full md:w-[calc(100%-1rem)] lg:w-[calc(100%-1rem)] h-80 bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#1a1a1a", // Fallback color
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 hover:opacity-70 transition-opacity duration-300"></div>
      <div className="relative z-10 p-5 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl text-[#fbbf24] font-semibold mb-2">{title}</h3>
          <p className="text-[#e5e7eb] mb-3">{description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-[#141415] text-[#fbbf24] px-3 py-1 rounded-full text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="text-center">
            {isLink ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#fbbf24] font-bold">
                Visit Project
              </a>
            ) : (
              <p className="text-[#fbbf24] font-bold">Run Command: <span className="text-[#e5e7eb]">{link}</span></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
