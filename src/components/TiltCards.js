import Tilt from "react-tilt";
import { photo2 } from "./animations/Animation";
import { motion } from "framer-motion";

function TiltCards() {
  return (
    <>
      <div className="containers">
        {" "}

          <Tilt
            className="cards"
            options={{
              speed: 400,
              max: 35,
              glare: true,
              "max-glare": 1,
            }}
          >
            <div className="content">
              <img
                className="content-image"
                src="images/creativity.png"
                alt="icon-about"
              />
              <h3 className="content-title">About Me</h3>
              <p className="content-text">
                {" "}
                <p>
                Hi, my name is Yuliia.</p>
                <p>
                I am an UI Designer and Front-end Developer. 
                
                I love design, coding and creativity.</p>
              </p>
            </div>
          </Tilt>


          <Tilt
            className="cards"
            options={{
              speed: 400,
              max: 35,
              glare: true,
              "max-glare": 1,
            }}
          >
            <div className="content">
              <img
                className="content-image"
                src="images/design.png"
                alt="icon-development"
              />
              <h3 className="content-title">Design and Development</h3>
              <p className="content-text">
                I like to create clean, modern design, optimazed for perfomance and
                search engines.
              </p>
            </div>
          </Tilt>


          <Tilt
            className="cards"
            options={{
              speed: 400,
              max: 35,
              glare: true,
              "max-glare": 1,
            }}
          >
            <div className="content">
              <img
                className="content-image"
                src="images/responsive-design.png"
                alt="icon-responsive"
              />
              <h3 className="content-title">Responsive Website</h3>
              <p className="content-text">
                A responsive design makes your website accessible to all users,
                regardless of their device.
              </p>
            </div>
          </Tilt>

      </div>
    </>
  );
}

export default TiltCards;
