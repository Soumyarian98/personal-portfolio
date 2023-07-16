import { textVariant } from "@/utils/motion";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import { projects } from "@/constants/data";
import { FiGithub } from "react-icons/fi";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <div className="relative min-h-screen py-[60px]">
      <div className="container ">
        <motion.div variants={textVariant(0.5)} className="space-y-1">
          <p className="text-indigo-200 text-sm">My Work</p>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-lime-300 uppercase">
            Projects
          </h2>
        </motion.div>
        <motion.p className="mt-4 text-indigo-200 leading-relaxed">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="container mt-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {projects.map(p => {
          return (
            <Tilt>
              <div className="w-full h-full p-6 shadow-lg bg-slate-950 hover:bg-black shadow-indigo-900 hover:shadow-2xl hover:shadow-indigo-900 transition-all rounded-2xl flex flex-col gap-8">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="p-2 rounded-full bg-black text-indigo-50 absolute top-2 right-2">
                    <FiGithub />
                  </div>
                  <img src={p.image.src} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg text-lime-300 uppercase font-bold">
                    {p.name}
                  </h3>
                  <p className="text-indigo-200 text-sm leading-loose">
                    {p.description}
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    {p.tags.map(tag => (
                      <p className={`${tag.color} text-sm font-medium`}>
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
