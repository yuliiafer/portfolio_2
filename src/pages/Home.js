import Header from "../../src/components/Header";
import Works from "../../src/components/Works";
import Cards from "../../src/components/Cards";
import { motion } from "framer-motion";
import { pageAnimation } from "../components/animations/Animation"
import TiltCards from "../components/TiltCards";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <motion.div
      key="modal"
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Header />
      <TiltCards />
      <Cards />
      </motion.div>
      <h4 className="sectionwrapper">Example of My Works</h4>
      <Works />
      <Skills />
    </>
  );
}

export default Home;
