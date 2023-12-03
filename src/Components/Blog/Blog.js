import React from "react";
import style from "@/Components/Blog/Blog.module.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Blog({ data }) {
  return (
    <div className={`${style.blog} container`}  style={{  backgroundColor: '#f6f7fb'}}>
      <div className={style.blog__wrap}>
        {/* <div className={style.blog__wrap__title}>
          <h1>{data?.title}</h1>
        </div> */}
        <div className={style.blog__wrap__img}>
          <LazyLoadImage effect="blur" src={data?.image} alt="image" />
        </div>
        {/* <div className={style.blog__wrap__text}>
          <p>{data?.description}</p>
        </div> */}
        {data?.sections?.length > 0 ? (
          <div className={style.desc}>
            {data?.sections?.map((section,index) => {
              return (
                <div className={style.desc__wrap} key={index}>
                  <div
                    className="section__title"
                    dangerouslySetInnerHTML={{ __html: section?.title }}
                  ></div>
                  <div
                    className="section__title"
                    dangerouslySetInnerHTML={{ __html: section?.description }}
                  ></div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
