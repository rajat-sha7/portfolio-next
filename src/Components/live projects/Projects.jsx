import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { motion } from "framer-motion";
import codacora from "@/public/coda.png";
import pool from "@/public/tppc.png";
import IYA from "@/public/myc.png";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div
        className="projects"
      >
        <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: "2", delay: "0" }}
        viewport={{ once: true }} className="projects-container container">
          <div className="projects__title">
            <h2>Live Project</h2>
          </div>
          <div id="projectCards" className="projects__cards"></div>
          <AwesomeSlider>
            <div className="pcard">
              <div className="pcard--description">
                <h3>Codacora Studio</h3>
                <p>
                  Codacora made the transition from our physical yoga space, to
                  the digital space with Yoga Vastu very simple. They have
                  preserved the essence of our teaching, made it accessible and
                  given it a modern user-friendly experience.
                </p>
              </div>
              <div className="pcard--image">
                <Image alt="img" src={codacora} height={400} width={400} />
                <div className="pcard--overlay">
                <a href="https://codacora.netlify.app/" target="_blank">FIND OUT MORE..</a>

                </div>
              </div>
            </div>
            <div className="pcard">
              <div className="pcard--description">
                <h3>The Pool Collective</h3>
                <p>
                  Carefully curated, our artists and makers are highly creative
                  people with vision, experience, and unmatched skill. They see
                  what others don’t, have the imagination and wherewithal to
                  pull it off, and maintain mutual respect for both art and
                  making. Our approach is driven by a passion for both art and
                  making. We assemble customised teams of skilled, creative, and
                  passionate artists and makers that adapt and scale to the
                  demands and goals of each project.
                </p>
              </div>
              <div className="pcard--image">
                <Image alt="img" src={pool} height={400} width={400} />
                <div className="pcard--overlay">
                <a href="https://thepoolcollective.com/" target="_blank">FIND OUT MORE..</a>

                </div>
              </div>
            </div>
            <div className="pcard">
              <div className="pcard--description">
                <h3>Yoga Vastu</h3>
                <p>
                  Iyengar yoga aims at developing clear and continuous
                  attention, bringing consciousness to each part of the body,
                  exploring the effects of the mind on the body and the body on
                  the mind. Through this practice, Iyengar has been known to
                  lower anxiety, reduce sleeplessness and improve concentration.
                  See our learning resources to understand how Iyengar could
                  benefit you.
                </p>
              </div>
              <div className="pcard--image">
                <Image alt="img" src={IYA} height={400} width={400} />
                <div className="pcard--overlay">
                <a href="https://yogavastu.com/" target="_blank">FIND OUT MORE..</a>

                </div>
              </div>
            </div>
          </AwesomeSlider>
        </motion.div>
      </div>
    </>
  );
}
