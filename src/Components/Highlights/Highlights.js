import React from "react";

export default function Highlights() {
  return (
    <div id="portfolio" className="highlights">
      <div className="highlights-container container">
        <div className="highlights__title">
          <h2>Web development highlights</h2>
        </div>

        <div className="highlight highlight--reverse">
          <div className="leftbox">
            <iframe
              id="highlights"
              src="https://kafene-react-app.pages.dev/user"
              seamless="seamless"
              frameborder="0"
              height="100%"
              width="100%"
              title="Iframe Example"
            ></iframe>
          </div>
          <div className="rightbox">
            <div className="rihtbox__title">
              <h2>The Kafene</h2>
            </div>
            <div className="rightbox__description">
              Kfeen pharmacy is a store management system for pharmacy.it lets u track orders, inventory and customers. This web app contain 4 pages : Login page , Orderpage, Order Listing page, and User Listing Page. the login form has only one validation which is "username and password should be same"
            </div>
            <div className="rightbox__techused">
              <p>Technology used: <span>React,CSS,HTML</span></p>
            </div>

          </div>
        </div>

        <div className="highlight ">
          <div className="rightbox">

            <div className="rihtbox__title">
              <h2>Rajat Portfolio</h2>
            </div>
            <div className="rightbox__description">
              This is my First Portfolio web app created in simple web Html and Css and i have also used some js for some functionality .in this web app iam showing my skill graph and some portfolios and in the last we have a contact section .

            </div>
            <div className="rightbox__techused">
              <p>Technology used: <span>HTML,CSS,JAVASCRIPT</span></p>
            </div>
          </div>
          <div className="leftbox">
            <iframe
              id="highlights "
              src="https://rajat-sha7.github.io/rajat-portfolio/"
              seamless="seamless"
              frameborder="0"
              height="100%"
              width="100%"
              title="Iframe Example"
            ></iframe>
          </div>
        </div>
        <div className="highlight highlight--reverse">
          <div className="leftbox">
            <iframe
              id="highlights"
              src="https://rajat-sha7.github.io/microsoft-homepage-copy/"
              seamless="seamless"
              frameborder="0"
              height="100%"
              width="100%"
              title="Iframe Example"
            ></iframe>
          </div>
          <div className="rightbox">

            <div className="rihtbox__title">
              <h2>Microsoft Clone</h2>
            </div>
            <div className="rightbox__description">
              This is my First cloned website . here iam cloning microsoft's landing page where i am using grid and flex css features for images and cards. this web app is made with simple html and css and i have alos created menu bar functionality same as original one.

            </div>
            <div className="rightbox__techused">
              <p>Technology used: <span>HTML,CSS,JAVASCRIPT</span></p>
            </div>
          </div>
        </div>

        <div className="highlight ">
          <div className="rightbox">
         
            <div className="rihtbox__title">
            <h2>The Gym Club</h2>
            </div>
            <div className="rightbox__description">
              This is my first website where iam using framer motion for animation and this website is purely created in Reactjs where i have added newsletter functionality by using third party library.
            </div>
            <div className="rightbox__techused">
              <p>Technology used: <span>REACT JS , HTML, CSS ,FRAMER MOTION </span></p>
            </div>
          </div>
          <div className="leftbox">
            <iframe
              id="highlights"
              src="https://gym-website-41s.pages.dev/"
              seamless="seamless"
              frameborder="0"
              height="100%"
              width="100%"
              title="Iframe Example"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
