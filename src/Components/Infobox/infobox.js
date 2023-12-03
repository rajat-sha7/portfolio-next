import React from "react";
import { motion } from "framer-motion";

export default function Infobox() {
  return (
    <section className="infobox">
      <motion.div  initial={{ y: 200, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: "2", delay: "0" }}
          viewport={{ once: true }} className="infobox-container container">
        <div className="infobox__card  infobox__card--border1">
          <h4>MY APPROACH TO DESIGN</h4>
          <h2>
            I combine business and design to create solutions that deliver
            results for you. I am a full-time developer & Webflow developer in
            India
          </h2>
        </div>
        <div className="infobox__card infobox__card--color1 ">
          <h3>Not Just Design. We Think Business</h3>
          <p>
            We give more importance to the impact of design on your business
            rather than just aesthetics. This makes us think for your company
            goals and how the design will help acheive it
          </p>
        </div>
        <div className="infobox__card infobox__card--color2 ">
          <h3>Custom Solutions for Your Brand and Industry</h3>
          <p>
            I don’t have packages because each client has a specific need, even
            if the job is the same. Hence, I review your needs and give you a
            suitable quote
          </p>
        </div>
        <div className="infobox__card infobox__card--border2">
          <h3>Communication with Feedback Loop</h3>
          <p>
            I keep you involved and updated about your project. I’ll field test
            the design so you can see how the end product will look like
          </p>
        </div>
      </motion.div>
    </section>
  );
}
