import { lineAnim } from "./animations/Animation";
import { motion } from "framer-motion";
import { Description } from "./Header";
import ContactForm from "./form/ContactForm";

function HeroSection() {
  return (
    <>
      <div className="header-contact">
        <div className="sectionwrapper">
          <Description>
            <motion.div key="header">
              <motion.h1 variants={lineAnim} className="title">
                Contact me
              </motion.h1>
              <ContactForm />
            </motion.div>
          </Description>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
