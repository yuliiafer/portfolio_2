import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiBehanceFill,
  RiGithubFill,
} from "react-icons/ri";
import { FcPhoneAndroid, FcFeedback } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container-footer sectionwrapper">
        <div className="row">
          <div className="col">
            <h6>Links to sosial media:</h6>
            <a
              href="https://www.facebook.com/"
              className="col-link"
              target="_blank"
              rel="noreferrer"
            >
              <RiFacebookBoxFill size="2em" className="socialmedia" />
            </a>

            <a
              href="https://www.instagram.com/ula_333/"
              className="col-link"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramFill size="2em" className="socialmedia" />
            </a>
            <a
              href="https://twitter.com/FerreiraYuliia"
              className="col-link"
              target="_blank"
              rel="noreferrer"
            >
              <RiTwitterFill size="2em" className="socialmedia" />
            </a>
            <a
              href="https://www.linkedin.com/in/yuliia-ferreira-313a50191/"
              className="col-link"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinBoxFill size="2em" className="socialmedia" />
            </a>
            <a
              href="https://github.com/yuliiafer"
              className="col-link"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubFill size="2em" className="socialmedia" />
            </a>
            <a
              href="https://www.behance.net/onboarding"
              className="col-link"
              target="_blank"
              rel="noreferrer"
            >
              <RiBehanceFill size="2em" className="socialmedia" />
            </a>
          </div>
          <div className="col">
            <h6>Phone:</h6>
            <p>
              <FcPhoneAndroid size="1.5em" /> +47 92133133
            </p>
          </div>
          <div className="col">
            <h6>Email:</h6>
            <p>
              <FcFeedback size="1.5em" /> julia.av.ferreira@gmail.com
            </p>
            <p>
              <FcFeedback size="1.5em" /> yuliia.ferreira@online.no
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} Yuliia Ferreira |
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
