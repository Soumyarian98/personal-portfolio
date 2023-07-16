import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen">
      <div className="container py-[60px] pt-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="sm:col-span-2">
            <motion.div variants={textVariant(0.5)} className="space-y-2">
              <p className="text-indigo-100">Let's Get To Know Eachother</p>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-lime-400">
                I Me & Myself
              </h2>
            </motion.div>
            <div className="mt-8">
              <p className="text-indigo-200 leading-relaxed font-medium ">
                Hey there, you stumbled upon my website! I'm Soumya, a web
                developer based in Bengaluru, India. I know, I know, web
                developers aren't supposed to have a sense of humor, but trust
                me, I'm the exception to the rule.
                <br />
                <br />
                I specialize in a bunch of fancy technologies like React, HTML,
                CSS, JavaScript, Node JS, AWS Amplify, Mui, Tailwind CSS, and
                Three JS. You could say I'm a bit of a tech wizard (but don't
                worry, I won't cast any spells on your website... unless you ask
                me nicely).
                <br />
                <br />
                When it comes to web development, I like to think of myself as a
                mix of creativity and functionality. I love creating websites
                that not only look good but also work seamlessly. So whether you
                need a website for your business or just want to show off your
                cat's modeling portfolio, I'm your guy!
                <br />
                <br />I pride myself on my ability to communicate complex
                concepts in simple terms. So even if you don't know the
                difference between HTML and a hedgehog, I promise I'll make it
                easy for you to understand.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <motion.div
              variants={fadeIn({
                direction: "right",
                type: "spring",
                delay: 0.5,
                duration: 0.75,
              })}>
              <img
                src="profile_picture.jpg"
                className="shadow-2xl rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "about-me");
