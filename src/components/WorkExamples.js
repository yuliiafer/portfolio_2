import styled from "styled-components";
import holidaze from "../image/holidaze.png";
import got from "../image/got.png";
import coctails from "../image/coctails.png";
import bootstrap from "../image/bootstrap.png";
import flag from "../image/flag.png";
import port from "../image/port.png";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photo,
  lineAnim,
} from "../components/animations/Animation";
import { useScroll } from "../components/useScroll";
import Scroll from "../components/Scroll";

const WorkExamples = () => {
  const [el, control] = useScroll();
  const [el2, control2] = useScroll();
  return (
    <div className="container">
      <Work
        style={{ background: "#ffffff" }}
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Mov>
          <motion.h2 variants={fade}>Game of Thrones</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <a href="https://got.y-ferreira.eu/" target="_blank" rel="noreferrer">
            <Hide>
              <motion.img
                variants={photo}
                src={got}
                alt="got"
                className="imgWork"
              />
            </Hide>
          </a>
        </Mov>

        <Mov ref={el} variants={fade} animate={control} initial="hidden">
          <h2>Holidaze</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <a href="https://holidaze1.vercel.app/" target="_blank" rel="noreferrer">
            <img src={holidaze} alt="holidaze" className="imgWork" />
          </a>
        </Mov>
        <Mov>
          <motion.h2 variants={fade}>Coctails API</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <a href="https://tasks.y-ferreira.eu/" target="_blank" rel="noreferrer">
            <img src={coctails} alt="coctails" className="imgWork" />
          </a>
        </Mov>
        <Mov>
          <motion.h2 variants={fade}>Example of portfolio</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>

          <a href="https://dark.y-ferreira.eu/" target="_blank" rel="noreferrer">
            <img src={bootstrap} alt="bootstrap" className="imgWork" />
          </a>
        </Mov>
        <Mov>
          <motion.h2 variants={fade}>Countries API</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>

          <a href="https://js-frameworks-module-assignment-4-yuliiafer.vercel.app/" target="_blank" rel="noreferrer">
            <img src={flag} alt="countries" className="imgWork" />
          </a>
        </Mov>
        <Mov ref={el2} variants={fade} animate={control2} initial="hidden">
          <h2>Portfolio old</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <a href="https://portfolio-old.y-ferreira.eu/" target="_blank" rel="noreferrer">
            <img src={port} alt="portfolio old" className="imgWork" />
          </a>
        </Mov>
        <Scroll />
      </Work>y
    </div>
  );
};

const Work = styled(motion.div)`
  min-height: 50vh;
  overflow: hidden;
  padding: 1rem;
  @media (max-width: 1300px) {
    padding: 1rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Mov = styled(motion.div)`
  padding-bottom: 1rem;

  .line {
    height: 0.2rem;
    background: rgba(6, 54, 149, 0.4);
    margin-bottom: 3rem;
  }
  img {
    max-width: 100%;
    height: 70vh;
    object-fit: cover;
    margin: 0 auto;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default WorkExamples;
