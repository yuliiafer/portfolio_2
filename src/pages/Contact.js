import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../components/animations/Animation";

function Contact() {
  return (
    <>
      <motion.div
        key="modal"
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
      <HeroSection />
      </motion.div>
    </>
  );
}

export default Contact;
