import React, { useState , useEffect} from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import SVG from "@/public/CONTACT.svg";

export default function Contact() {
  const Router = useRouter();
  const [inputFields, setInputFields] = useState({
    firstname: "",
    email: "",
    message: "",
  });
  const [value, setValue] = useState();
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };
  const validateValues = () => {
    let errors = {};
    if (!inputFields.firstname.trim()) {
      errors.name = "Name field is required";
    }
    if (!inputFields.email.trim()) {
      errors.email = "Email field is required";
    }
    if (!inputFields.message.trim()) {
      errors.message = "Message field is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateValues();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitting(true);

      const hubspotPortalId = "41296670";
      const hubspotFormGuid = "dba2c188-8240-4993-94ae-af197850e53b";
      const URL = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormGuid}`;

      const payload = {
        fields: [
          {
            name: "firstname",
            value: inputFields.firstname,
          },
          {
            name: "email",
            value: inputFields.email,
          },
          {
            name: "message",
            value: inputFields.message,
          },
        ],
      };

      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Form data sent to HubSpot:", data);
          setSubmitting(false);
          setInputFields({
            firstname: "",
            email: "",
            message: "",
          });
          setValue("");
        })
        .catch((error) => {
          console.error("Error submitting form to HubSpot:", error);
          alert("Error submitting form. Please try again later.");
          setSubmitting(false);
        });
    }
    setTimeout(() => {
      Router.push("/");
    }, 2000);
  };


   useEffect(() => {
    const INPUTS= document.querySelectorAll('.form-group');
  
  
    INPUTS?.forEach((item,index)=>{
      console.log(item) 
      item?.addEventListener('mouseenter',(e)=>{
      const labels= document.querySelectorAll('label');
      labels.forEach((label)=>{
        console.log(label, "label")
        label.style.top="-6px"
        label.style.left='5px'
      })

      })
      

    })
   
   }, [])


   useEffect(() => {
    const INPUTS= document.querySelectorAll('.form-group');
    INPUTS?.forEach((item,index)=>{
 
      item?.addEventListener('mouseleave',(e)=>{
      const labels= document.querySelectorAll('label');
      labels.forEach((label)=>{
        label.style.top="20px"
        label.style.left='20px'
      })

      })
      

    })
   }, [])
   
   


  return (
    <div className="contact">
      <div className="contact-container container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: "1", delay: "0" }}
          viewport={{ once: true }}
          className="contact__title"
        >
          <h2>Contact Us</h2>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: "1", delay: "0" }}
          viewport={{ once: true }}
          className="contact--divider"
        >
          <div className="contact__form">
            <Image src={SVG} alt="" />
          </div>

          <div className="contact__form">
            <form
              id="contact-form"
              method="POST"
              onSubmit={handleSubmit}
              data-netlify="true"
              name="contact"
              
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  id="name"
                  required
                  // placeholder="Your Name"
                  value={inputFields.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  required
                  // placeholder="Your Email*"
                  value={inputFields.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  type="text"
                  name="message"
                  id="message"
                 
                  // placeholder="Message"
                  value={inputFields.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
