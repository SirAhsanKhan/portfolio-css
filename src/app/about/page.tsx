"use client"
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Typewriter from "@/components/Typewriter"; 
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

const technologies = [
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Next.js",
  "JavaScript"
];

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ahsan-khan-6a8b902b4/", icon: FaLinkedin },
  { name: "GitHub", url: "https://github.com/SirAhsanKhan", icon: FaGithub }
];

const About: React.FC = () => {
  return (
    <main>
      <Header />
      <div className="about-container">
        {/* Profile Image */}
        <FadeIn>
          <div className="flex flex-col items-center mb-10">
            <Image
              src="/ahsan.png"
              alt="Ahsan"
              className="profile-image"
            />
            <h1 className="name">Hey, I'm Ahsan</h1>
            <h2 className="subtitle">
              I'm <Typewriter />
            </h2>
            <p className="text">
              I'm a 17-year-old developer, currently learning at GIAIC. I completed Q1 with a 73 percentile.
              Always curious, adaptable, and passionate about technology, I love exploring how things work.
            </p>
          </div>
        </FadeIn>

        {/* My Journey Section */}
        <div className="mb-10 w-full max-w-2xl">
          <h3 className="text-2xl text-fbbf24 font-bold mb-4">My Journey</h3>
          <p className="text-lg md:text-xl text-e5e7eb">
            I started coding at a young age, driven by my fascination with technology. 
            Over the years, I have developed skills in various programming languages and frameworks. 
            I am always eager to learn and grow as a developer.
          </p>
        </div>

        {/* Technologies Section */}
        <FadeIn delay={800}>
          <div className="mb-10 w-full max-w-2xl">
            <h3 className="text-2xl text-fbbf24 font-bold mb-4">Technologies I Use</h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-e5e7eb">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="bg-141415 px-4 py-2 rounded-full font-semibold hover:text-fbbf24"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Notable Projects Section */}
        <div className="mb-10 w-full max-w-2xl">
          <h3 className="text-2xl text-fbbf24 font-bold mb-4">Notable Projects</h3>
          <ul className="list-disc list-inside text-e5e7eb">
            <li>CLI-ATM: A CLI-based ATM machine that simulates banking transactions.</li>
            <li>Weather-Widget-App: A web app providing real-time weather information.</li>
            <li>Dynamic-Resume-Builder: A tool for creating resumes dynamically.</li>
          </ul>
        </div>

        {/* Interests Section */}
        <div className="mb-10 w-full max-w-2xl">
          <h3 className="text-2xl text-fbbf24 font-bold mb-4">Interests</h3>
          <p className="text-lg md:text-xl text-e5e7eb">
            Besides coding, I enjoy reading books, playing video games, and exploring nature. 
            I believe in maintaining a balance between work and personal interests to foster creativity.
          </p>
        </div>

        {/* Social Links Section */}
        <FadeIn delay={1500}>
          <div className="w-full max-w-2xl">
            <h3 className="text-2xl text-fbbf24 font-bold mb-4">Connect with Me</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-e5e7eb hover:text-fbbf24 text-3xl"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Testimonials Section */}
        <div className="mb-10 w-full max-w-2xl">
          <h3 className="text-2xl text-fbbf24 font-bold mb-4 mt-11">Testimonials</h3>
          <blockquote className="text-lg md:text-xl text-e5e7eb italic">
            "Ahsan is a dedicated learner and a talented developer. His passion for technology is inspiring!" 
            - A Mentor
          </blockquote>
        </div>

        {/* Contact Section */}
        <div className="mb-10 w-full max-w-2xl">
          <h3 className="text-2xl text-fbbf24 font-bold mb-4">Contact Me</h3>
          <p className="text-lg md:text-xl text-e5e7eb">
            Feel free to reach out via email at <a href="mailto:afzalahsankhan283@gmail.com" className="text-[fbbf24]">afzalahsankhan283@gmail.com</a>.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="mb-10 w-full max-w-2xl">
          <h3 className="text-2xl text-fbbf24 font-bold mb-4">Let’s Connect!</h3>
          <p className="text-lg md:text-xl text-e5e7eb">
            I’m always open to collaborating on interesting projects or discussing tech trends. 
            Don’t hesitate to reach out!
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
