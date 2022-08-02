import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";
import { navBar, navItem, navList } from "../styles";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav
      className={`${navBar} ${
        isOpen ? "shadow-none" : "shadow-md shadow-[#000] md:shadow-none"
      } `}
    >
      <div className="nav__logo">
        <a
          href="/"
          className="flex items-center justify-center text-xl font-bold"
        >
          KCIB<span className="primary-color">.DEV</span>
        </a>
      </div>
      <div
        className={` ${navList} ${
          isOpen ? "translate-y-[10.5rem]" : "-translate-y-[11rem]"
        }  `}
      >
        <ul className="flex flex-col md:flex-row justify-center items-center">
          <li className="nav__item w-full text-center">
            <a
              href="#home"
              className={navItem}
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="nav__item w-full text-center">
            <a
              href="#about"
              className={navItem}
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li className="nav__item w-full text-center">
            <a
              href="#skills"
              className={navItem}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li className="nav__item w-full text-center">
            <a
              href="#portfolio"
              className={navItem}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
          </li>
          <li className="nav__item w-full text-center">
            <a
              href="#contact"
              className={navItem}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="nav__icon cursor-pointer">
        {!isOpen && (
          <HiMenuAlt3 onClick={() => setIsOpen(true)} className="text-xl" />
        )}
        {isOpen && (
          <RiCloseCircleLine
            onClick={() => setIsOpen(false)}
            className="text-xl"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
