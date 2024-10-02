import React from "react";
import project1 from "../assets/project.png";
import project2 from "../assets/weather-app.png";
import project3 from "../assets/siponpes.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Spotify Clone",
    description: "Klon aplikasi Spotify menggunakan React.js dan Tailwind CSS dengan antarmuka yang responsif.",
    links: {
      site: "https://charissaida.github.io/spotify-clone/",
      github: "https://github.com/charissaida/spotify-clone.git",
    },
  },
  {
    img: project2,
    title: "Weather App",
    description: "Aplikasi cuaca berbasis React JS dan Tailwind CSS yang menampilkan informasi terkini dari BMKG, termasuk suhu, kelembapan, angin, dan prakiraan harian.",
    links: {
      site: "https://charissaida.github.io/weather-app/",
      github: "https://github.com/charissaida/weather-app.git",
    },
  },
  {
    img: project3,
    title: "SIPONPES",
    description: "Sistem informasi pondok pesantren berbasis Laravel dan Bootstrap untuk pengelolaan informasi secara efisien.",
    links: {
      site: "",
      github: "https://github.com/charissaida/ponpes-nurun-nahdlatain.git",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} mb-12`}>
            <div className="w-full md:w-1/2 p-4">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.links.site && (
                  <a
                    href={project.links.site}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                  >
                    View Site
                  </a>
                )}
                <a
                  href={project.links.github}
                  className="flex items-center px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
