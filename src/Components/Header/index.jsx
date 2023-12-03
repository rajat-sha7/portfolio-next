// "use client"
import React, { useEffect } from "react";

import Rect from "@/public/sliderimage/reactjs-icon.png";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { 
        setShow(false); 
      } else {
        setShow(true);  
        
      }
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  });

  const handlefunc = () => {  
   
    if (menu) {
      setMenu(!menu);
     
      document.querySelector(".div2").style.display="block"
      document.querySelector(".div1").style.rotate="0deg"
      document.querySelector(".div3").style.rotate="0deg"
         document.querySelector(".div1").style.position="static"
      document.querySelector(".div1").style.top="0px"
     
    } else {
      setMenu(!menu);
      document.querySelector(".div2").style.display="none"
      document.querySelector(".div1").style.rotate="45deg"
      document.querySelector(".div1").style.position="absolute"
      document.querySelector(".div1").style.top="15px"
      document.querySelector(".div3").style.rotate="-45deg"
    }

    

  };

  return (
    <nav className={`header ${show && 'hidden'}`}>
      <div className="header-container container">
        <div className="header__logo">
          <Link href="/">
          <p>rajat sharma</p>
          <br/>
          {/* <p><span>web developer</span></p> */}
            {/* 
            <Image priority src={Rect} alt="avatar" /> */}
          </Link>
        </div>

        <div className="header__menu " >
          <ul className={`menu-items ${menu ? "active" : ""}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li>
              <Link href="#portfolio">Portfolio</Link>
            </li> */}
            <li >
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blogs</Link>
            </li>
          </ul>
         
          <div onClick={handlefunc} id="hamburger-menu" className="hamburger" >
            <span className="div1"></span>
            <span className="div2"></span>
            <span className="div3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
