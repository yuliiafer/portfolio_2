import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1440 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        key="wave1"
        stroke="rgb(254, 255, 194)"
        strokeOpacity="0.3"
        strokeWidth="2"
        d="M0,160L48,138.7C96,117,192,75,288,90.7C384,107,480,181,576,208C672,235,768,213,864,170.7C960,128,1056,64,1152,64C1248,64,1344,128,1392,160L1440,192L1440 1"
      />
      <motion.path
        key="wave2"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        d="M1,320L60,309.3C120,299,240,277,360,256C480,235,600,213,720,181.3C840,149,960,107,1080,96C1200,85,1320,107,1380,117.3L1440,128L1440 2"
        stroke="rgb(0, 195, 255)"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
      <motion.path
        key="wave3"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 4 }}
        d="M0,32L60,58.7C120,85,240,139,360,160C480,181,600,171,720,154.7C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440 5"
        stroke="rgb(255, 86, 190)"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <motion.path
        key="wave4"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 3 }}
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="rgb(158, 255, 250)"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;

export default Wave;
