"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my degree in{" "}
        <span className="font-medium">Computer Science</span>, I immediately
        pursued my passion for programming I gained practical experience by
        working for a startup before graduating. Following that, I joined
        Bluekaktus{" "}
        {/* <span className="font-medium">full-stack web development</span>.{" "} */}
        <span className="italic">
           where I further honed my skills in
          full-stack development. What excites me most about programming is the
          problem-solving aspect, and there's nothing quite like 
        </span>{" "}
        {/* is the problem-solving aspect. I <span className="underline">love</span>{" "} */}
        the feeling of finally figuring out a solution to a problem. My core
        stack is{" "}
        <span className="font-bold">
          React, Next.js, Angular15,.NET and MySQL
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">human nature and psychology</span>. I'm
        also learning how to do Cardistry.
      </p>
    </motion.section>
  );
}
