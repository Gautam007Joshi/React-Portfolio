import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";


import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";

import { RiReactjsLine } from "react-icons/ri";

import { SiMongodb } from "react-icons/si";

import { BiLogoHtml5, BiLogoCss3, BiLogoPostgresql } from 'react-icons/bi';
import { SiCplusplus, SiMysql, SiJavascript } from 'react-icons/si';

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Gautam Joshi",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "Created a responsive e-commerce website using HTML, CSS, and JavaScript, focusing on interactive UI design, smooth navigation, and efficient user experience.",
    image: projectImage2,
  },
  {
    id: 3,
    name: "Chess Game",
    description:
      "Developed a chess game using C++, implementing features like player-vs-player mode, move validation, and a basic graphical interface to simulate a full chess-playing experience.",
    image: projectImage3,
  },
];

export const BIO = [
  "My name is Gautam Joshi, and I studied computer science at JECRC University, graduating in 2023. After completing my education, I dedicated myself to developing my skills in web development, particularly in front-end technologies",
  "In 2024, fueled by a desire to create impactful web solutions and enhance user experiences, I embarked on my professional journey as a web developer. With hands-on experience gained during my internship at Bestdesk IT Solutions, I immersed myself in the world of front-end development, focusing on crafting intuitive and visually appealing interfaces",
  "My foundation in C++ and data structures and algorithms (DSA) has been invaluable in my work, helping me approach problems logically and efficiently. This knowledge enhances my ability to write optimized code and implement complex functionalities in my web applications",
  "As a versatile front-end developer, I bring a diverse skill set to my projects. My proficiency in HTML, CSS, and JavaScript, combined with my expertise in React and Tailwind CSS, allows me to create engaging and responsive web applications. I am passionate about pushing the boundaries of web design and development, striving to deliver exceptional results for my clients and users."];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    
  },
  {
    icon: <BiLogoHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML5",
  },
  {
    icon: <BiLogoCss3 className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS3",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    
  },
  
  {
    icon: <SiCplusplus className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "C++",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />, // or SiMysql for MySQL
    name: "SQL",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
  },
];

export const EXPERIENCES = [
  {
    title: "Web Developer Intern",
    company: "BestDesk IT Solutions",
    duration: "October 2023 - March 2024",
    description:
      "During my internship at Bestdesk IT Solutions, I worked as a Web Developer, focusing on creating responsive websites using HTML, CSS, JavaScript, and React. I collaborated with the team to implement dynamic features and optimize performance. I also gained experience in backend development using PHP, enhancing my full-stack development skills.",
  },
];

export const EDUCATION = [
  
  {
    degree: "Bachelor of Technology (CSE)",
    institution: "JECRC University",
    duration: "September 2019 - August 2023",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a project on developing an e-commerce platform. Graduated with a GPA of 7.8.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  
  {
    href: "https://www.instagram.com/yash.__.01/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Gautam007Joshi",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/gautam-joshi-994115242/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
