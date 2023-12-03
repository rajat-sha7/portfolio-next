import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import Image from "next/image";
import Html from "@/public/sliderimage/html-icon.png";
import Css from "@/public/sliderimage/css-icon.png";
import Js from "@/public/sliderimage/js-icon.png";
import Jquery from "@/public/sliderimage/jquery-icon.png";
import Rect from "@/public/sliderimage/reactjs-icon.png";

export default function skill() {
  return (
    <div
      className="technology"
    >
      <motion.div
      initial={{ y: 150, opacity: 0.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: "2", delay: "0" }}
      viewport={{ once: true }} className="technology-container container">
        <div className="texhnology__title">
          <h2>Technology we used</h2>
        </div>

        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
          className="texhnology__slider"
        >
          <Swiper
            loop={true}
            autoplay={true}
            slidesPerView={4}
            spaceBetween={30}
            className="mySwiper"
          >
          <SwiperSlide>
              <Image src={Jquery} alt="react-img" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Rect} alt="react-img" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Html} alt="react-img" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Html} alt="react-img" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Css} alt="react-img" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Js} alt="react-img" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Rect} alt="react-img" />
            </SwiperSlide>
            
            <SwiperSlide>
              <Image src={Css} alt="react-img" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Js} alt="react-img" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Jquery} alt="react-img" />
            </SwiperSlide>
           
          </Swiper>
        </motion.div>
      </motion.div>
    </div>
  );
}
