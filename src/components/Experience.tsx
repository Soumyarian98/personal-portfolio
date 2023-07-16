import SectionWrapper from "@/hoc/SectionWrapper";
import React from "react";
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
    <div className="relative min-h-screen">
      <div className="container py-[60px]">
        <motion.div
          variants={textVariant(0.5)}
          className="space-y-2 text-center">
          <p className="text-indigo-200">What have i done so far</p>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-lime-400 uppercase">
            Experience
          </h2>
        </motion.div>
        <div className="mt-8">
          <VerticalTimeline>
            {experiences.map(e => {
              return (
                <VerticalTimelineElement
                  contentStyle={{
                    background: `rgb(30 27 75)`,
                    boxShadow: "0 3px 0 rgb(163 230 53)",
                    borderRadius: "0px",
                  }}
                  iconClassName="bg-indigo-900"
                  contentArrowStyle={{
                    borderRight: `7px solid  rgb(30 27 75)`,
                  }}
                  date={e.date}
                  dateClassName="text-indigo-100 font-bold"
                  icon={<FiBell className="text-indigo-100" />}>
                  <div className="space-y-1">
                    <h3 className="text-lime-300 font-medium">{e.title}</h3>
                    <h4 className=" text-indigo-100 text-sm">
                      {e.company_name}
                    </h4>
                  </div>
                  <ul className="mt-8 list-disc marker:text-lime-300 ml-5 space-y-3 mb-4 lg:mb-0">
                    {e.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-indigo-200 text-sm pl-1 tracking-wider leading-relaxed font-mulish">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
