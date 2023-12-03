// "use client";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import {motion} from 'framer-motion'






export default function Work() {
  return (
    <>
    <div className="work">
      <div className="work-container container">
        <motion.div 
        initial={{ y: 50 ,opacity:0}}
          whileInView={{ y: 0 , opacity:1}}
          transition={{ duration: "1", delay: "0" }}
          viewport={{ once: true }} className="work__title">
          <h2>Our Work</h2>
        </motion.div>

        <motion.div 
          initial={{ y: 50 ,opacity:0}}
          whileInView={{ y: 0 , opacity:1}}
          transition={{ duration: "1", delay: "0" }}
          viewport={{ once: true }}
         className="work__slides container">
          <AwesomeSlider >
            <div className="framee">
              <iframe src="https://kafene-react-app.pages.dev/user" title="description"></iframe>
            </div>
            <div className="framee">
              <iframe
                src="https://react-assignment.pages.dev/"
                title="description"
              ></iframe>
            </div>
            <div className="framee">
              <iframe
                src="https://rajat-sha7.github.io/rajat-portfolio/"
                title="description"
              ></iframe>
             
            </div>
            <div className="framee">
              <iframe
                src="https://gym-website-41s.pages.dev/"
                title="description"
              ></iframe>
              
            </div>
            <div className="framee">
              <iframe
                src="https://rajat-sha7.github.io/microsoft-homepage-copy/"
                title="description"
              ></iframe>
             
            </div>
          </AwesomeSlider>
        </motion.div>
      </div>
    </div>
</>
  );
}
