import React from "react";
import Tilt from "react-tilt";
import { Validation } from "./Validation";

function ContactForm() {
  return (
    <div className="sectionwrapper containers-form">
      <div className="circle3"></div>
      <div className="circle2"></div>
      <div className="cards-form">
        <div className="content-form">
          <h6 className="content-title-form">Contact Form</h6>
          <Tilt
            className="img-form"
            options={{ speed: 400, max: 35, glare: true, "max-glare": 1 }}
          >
            <img
              className="content-image-form"
              src="images/yf.jpg"
              alt="yuliia ferreira"
            />
          </Tilt>
          <Validation />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
