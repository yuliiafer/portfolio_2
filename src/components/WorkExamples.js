import styled from "styled-components";
import { Link } from "react-router-dom";
import holidaze from "../image/holidaze.png";
import got from "../image/got.png";
import coctails from "../image/coctails.png";
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
        <Link to="https://got.y-ferreira.eu/">
          <Hide>
            <motion.img
              variants={photo}
              src={got}
              alt="got"
              className="imgWork"
            />
          </Hide>
        </Link>
      </Mov>

      <Mov ref={el} variants={fade} animate={control} initial="hidden">
        <h2>Holidaze</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="https://holidaze1.vercel.app/">
          <img src={holidaze} alt="holidaze" className="imgWork" />
        </Link>
      </Mov>

      <Mov ref={el2} variants={fade} animate={control2} initial="hidden">
        <h2>Coctails API</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="https://tasks.y-ferreira.eu/">
          <img src={coctails} alt="coctails" className="imgWork" />
        </Link>
      </Mov>
      <Scroll />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Mov = styled(motion.div)`
  padding-bottom: 10rem;

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
