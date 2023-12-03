import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function services() {
  return (
    <div className="service">
      <motion.div
          initial={{ y: 200, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: "2", delay: "0" }}
          viewport={{ once: true }} className="service-container container">
        <div
          className="service__heading"
        >
          <h2>Our Web Development Service Suite</h2>
        </div>

        <div
          className="two-col-wrap"
        >
          <div className="two-col-list">
            <div className="two-col-content-box">
              <div className="two-col-content-icon">
                <i
                  style={{ color: "black", height: "25px", width: "25px" }}
                  className="fa-brands fa-free-code-camp fa-icons"
                ></i>
              </div>
              <h3>Front End Web Development</h3>
              <p>
                We help set your website apart from your competition with a
                distinctive visual identity by employing a host of top-notch UI
                and UX technique
              </p>
            </div>
          </div>
          <div className="two-col-list">
            <div className="two-col-content-box">
              <div className="two-col-content-icon">
                <i
                  style={{ color: "black", height: "25px", width: "25px" }}
                  className="fa-solid fa-shop fa-icons"
                ></i>
              </div>
              <h3>ECommerce Web Development</h3>
              <p>
                We thoroughly wrap our heads around your unique objectives and
                goals to build for you an enterprising eCommerce store that ably
                showcases your offerings.
              </p>
            </div>
          </div>
          <div className="two-col-list">
            <div className="two-col-content-box">
              <div className="two-col-content-icon">
                <i
                  style={{ color: "black", height: "25px", width: "25px" }}
                  className="fa-regular fa-images fa-icons"
                ></i>
              </div>
              <h3>Landing Page Development</h3>
              <p>
                We design impactful landing pages to help you captivate the
                imagination of your target audience and drive more traffic than
                ever to your page.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
