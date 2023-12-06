import React from "react";
import Image from "next/image";

import Bimage from "@/public/banner.png";
import {motion} from "framer-motion"
import { Handlee } from "next/font/google";

export default function banner() {

  // const handleContact=()=>{
  //   const element = document.getElementById("contact");
  //   element.scrollIntoView();
  // }
  return (
    <div className="banner">
      <div className="banner-container container">
        <div className="banner__wrap">
          <div className="banner__wrap--left">
            <motion.div
            initial={{ x: -15 ,opacity:0}}
          whileInView={{ x: 0 , opacity:1}}
          transition={{ duration: "3" }}
          viewport={{ once: true }}
            
             className="web-development-cta-content">
              <h3>
                Trust our top-notch web development team to bump up your
                business
              </h3>
              <div className="btn" >
                <a
                
                href="tel:9501111664"
                  title="Give Us a Call"
                  data-faitracker-click-bind="true"
                >
                  Give Us a Call
                </a>
              </div>
            </motion.div>
          </div>
          <div

          
           className="banner__wrap--right">
            <Image  
              src={Bimage}  
             alt="web-development-cta-image"   />
          </div>
        </div>
      </div>
    </div>
  );
}
