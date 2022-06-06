import Wave from "./Wave";
import { photo, title2 } from "./animations/Animation";
import { motion } from "framer-motion";
import styled from "styled-components";
import AnimatedMouseIcon from "./animations/AnimateMouseIcon";
import Circles from "../image/circles.png";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiBehanceFill,
  RiGithubFill,
} from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import yf from "../image/me.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="hero-image">
          <div className="sectionwrapper">
            <Description>
              <motion.div key="header">
                <Hiden>
                  <motion.h1 variants={title2} className="header-h" key="title">
                    Portfolio
                  </motion.h1>
                </Hiden>
                <Hiden>
                  <motion.h2
                    variants={title2}
                    className="header-title"
                    key="subtitle"
                  >
                    Yuliia Ferreira
                  </motion.h2>
                </Hiden>
              </motion.div>
              <Img src={Circles} className="circlesBlock" alt="background" />
              <Image>
                <motion.img
                  variants={photo}
                  className="block"
                  src={yf}
                  alt="portfolioimage"
                />
              </Image>
              <div className="social">
                <div className="lin">
                  <a
                    className="al"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiFacebookBoxFill size="1.5em" />
                  </a>
                  <a
                    className="al"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiInstagramFill size="1.5em" />
                  </a>
                  <a
                    className="al"
                    href="https://twitter.com/FerreiraYuliia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiTwitterFill size="1.5em" />
                  </a>
                  <a
                    className="al"
                    href="https://www.linkedin.com/in/yuliia-ferreira-313a50191/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiLinkedinBoxFill size="1.5em" />
                  </a>
                  <a
                    className="al"
                    href="https://github.com/yuliiafer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiGithubFill size="1.5em" />
                  </a>
                  <a
                    className="al"
                    href="https://www.behance.net/onboarding"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiBehanceFill size="1.5em" />
                  </a>
                  <a
                    className="al"
                    href="https://y-ferreira.eu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FcGoogle size="1.5em" />
                  </a>
                  <hr className="social__hr"></hr>
                </div>
              </div>
              <Wave />
            </Description>
            <AnimatedMouseIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: bold;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Hiden = styled.div`
  overflow: hidden;
`;
export const Img = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    height: 60vh;
    object-fit: cover;
    max-width: 100%;
    @media (max-width: 1300px) {
      height: 40vh;
      top: 15%;
    }
    @media (max-width: 800px) {
      text-align: center;
      top: 5%;
      height: 25vh;
    }
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  max-width: 100%;
  img {
    z-index: 2;
    height: 80vh;
    object-fit: cover;
    max-width: 100%;
    @media (max-width: 1300px) {
      height: 50vh;
      top: 35%;
    }
    @media (max-width: 800px) {
      right: 5%;
      top: 45%;
    }
    @media (max-width: 350px) {
      height: 35vh;
    }
  }
`;
