import SectionWrapper from "@/hoc/SectionWrapper";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "@/utils/motion";
import { FiBell } from "react-icons/fi";
import { experiences } from "@/constants/data";

const Experience = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="container py-[60px]">
        <div className="space-y-2 text-center">
          <p className="text-indigo-200">What have i done so far</p>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-lime-300 uppercase">
            Experience
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8">
          {experiences.map(e => (
            <div className="text-gray-50 rounded-md overflow-hidden bg-slate-900">
              <div className="space-y-1 p-4">
                <p className="text-xl font-bold text-slate-100">{e.title}</p>
                <p className="text-slate-400">{e.company_name}</p>
              </div>
              <ul className="space-y-4 p-4">
                {e.points.map(point => (
                  <li className="text-sm md:text-base text-slate-300 font-mulish leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="p-4">
                <span className="inline-block bg-slate-800 rounded-full px-3 py-1 text-sm font-mulish font-semibold text-slate-200 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-slate-800 rounded-full px-3 py-1 text-sm font-mulish font-semibold text-slate-200 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-slate-800 rounded-full px-3 py-1 text-sm font-mulish font-semibold text-slate-200 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
