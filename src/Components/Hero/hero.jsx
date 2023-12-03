"use client";
import React from "react";
// import Avatar from "@/public/avatar.svg";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useTypewriter } from "react-simple-typewriter";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["RAJAT SHARMA"],
    loop: 0,
  });
  return (
    <>
      <section className="hero">
      
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: "2", delay: "0" }}
            viewport={{ once: true }} className="hero-container container">
   
          <div
            className="hero__content"
          >
            <div className="hero__content__title">
              <h1>{text}</h1>
            </div>
            <div className="hero__content__badge">
              <h4>FRONTEND WEB DEVELOPER</h4>
            </div>
            <div className="hero__content__subtitle">
              <p>
                A well-crafted job description which accurately reflects the
                importance of the role and helps in attracting suitable
                candidates. This article outlines the key elements to include
                when preparing a job description for a front-end developer.
              </p>
              <div className="hero__content__tagline">
              <Typewriter
                words={["Eat", "Sleep", "Code", "Repeat!"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={10}
                deleteSpeed={50}
                delaySpeed={300}
              />
            </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
