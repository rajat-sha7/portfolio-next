import React from "react";
import style from "@/Components/Blogs/Blogs.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Blog({ data }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: "2", delay: "0" }}
      viewport={{ once: true }}
      className={`${style.blogs} container`} style={{  backgroundColor: '#f6f7fb'}}
    >
      <div className={style.blogs__heading}>
        <h1 className={style.blog__title}>{data?.title}</h1>
      </div>
      <div className={style.blogs__wrap}>
        {data?.blog &&
          data.blog.map((data, index) => (
            <div className={style.blogs__wrap__card} key={index}>
              <div className={style.card__img}>
                <LazyLoadImage effect="blur" src={data.image} alt="img" />
              </div>
              <div className={style.card__text}>
                <Link href={`blog/${data.slug}`}>{data.description}</Link>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
}
