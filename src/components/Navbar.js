import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

function Navbar({ color }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <NavBar className="navbar">
        <div className="navbar-container">
          <NavLink id="logo" to="/" className="navbar-logo">
            <img className="navbar-img" src="../images/logo.png" alt="logo" />
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <Icon onClick={() => setIsOpen(!isOpen)}>
              <Top color={color} isOpen={isOpen} />
              <Middle color={color} isOpen={isOpen} />
              <Bottom color={color} isOpen={isOpen} />
            </Icon>
          </div>
          <ul className={isOpen ? 'navMenu--active' : "navMenu"}>
            <li className="nav-items">
              <NavLink
                exact
                activeClassName="active"
                to="/"
                className="nav-links"
              >
                Home
              </NavLink>
              <Border
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/" ? "100%" : "0%" }}
              />
            </li>
            <li className="nav-items">
              <NavLink
                activeClassName="active"
                to="/about"
                className="nav-links"
              >
                Works
              </NavLink>
              <Border
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/about" ? "100%" : "0%" }}
              />
            </li>
            <li className="nav-items">
              <NavLink
                activeClassName="active"
                to="/contact"
                className="nav-links"
              >
                Contact
              </NavLink>
              <Border
                transition={{ duration: 1 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
              />
            </li>
          </ul>
        </div>
      </NavBar>
    </>
  );
}
const NavBar = styled.nav`
  position: sticky;
  top: 0;

  li {
    padding-left: 8rem;
    position: relative;
    @media screen and (max-width: 1250px) {
      padding-left: 0;
      font-size: 24px;
    }
  }
    a.active {
      color: rgb(0, 189, 202);
      transition: all 0.2s ease-out;
      font-weight: bold;
    }
  }
`;

const Border = styled(motion.div)`
  height: 0.3rem;
  background: rgba(255, 255, 255, 0.8);

  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

const Icon = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1250px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;
/*
let Active = css`
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transform: scale(${({ isOpen }) => (isOpen ? 1 : 0)});
    transform-origin: 100% 0%;
    transition-property: opacity, transform;
    transition-duration: 0.65s;
    position: absolute;
    padding-top: 3.5em;
    background: rgba(6, 54, 149, 0.4);
    backdrop-filter: blur(10px);
    left: 0;
    transition: all 0.5s ease;
    top: 50px;
    right: 40px;
    width: 400px;
    height: 400px;
    border-radius: 33px;
`;*/

const sharedAll = css`
  position: absolute;
  background: ${({ color }) => color || "black"};
  border-radius: 20px;
  transition: transform 0.65s;
`;

const sharedSmall = css`
  width: 12px;
  height: 1px;
`;

const Top = styled.span`
  ${sharedAll};
  ${sharedSmall};
  ${({ isOpen }) =>
    isOpen
      ? "transform: translate(3.1px, 0) rotate(45deg);"
      : "transform: translate(0, 0) rotate(0);"};
      top: 0;
      left: 0;
      transform-origin: 0% 0%;
`;

const Middle = styled.span`
  ${sharedAll};
  top: 50%;
  left: 0;
  width: 25px;
  height: 1px;
  transform: translateY(-50%)
  rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0")});
`;

const Bottom = styled.span`
  ${sharedAll};
  ${sharedSmall};
  ${({ isOpen }) =>
    isOpen
      ? "transform: translate(1px, -1px) rotate(45deg);"
      : "transform: translate(0, 0) rotate(0);"};
      bottom: 0;
      right: 0;
      transform-origin: 100% 100%;
`;

export default Navbar;
