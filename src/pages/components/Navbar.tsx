import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";
import { navBar, navItem, navList } from "../styles";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav
      className={`${navBar} shadow-md shadow-[#000] `}
      style={{
        width: "-webkit-fill-available",
      }}
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
          isOpen ? "translate-y-[13rem]" : "-translate-y-[15rem]"
        }  `}
      >
        <ul className="flex flex-col ml:flex-row justify-center items-center ml:justify-end">
          <li className="nav__item w-full text-center ml:w-auto px-2">
            <a
              href="#home"
              className={navItem}
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="nav__item w-full text-center ml:w-auto px-2">
            <a
              href="#about"
              className={navItem}
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li className="nav__item w-full text-center ml:w-auto px-2">
            <a
              href="#experience"
              className={navItem}
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
          </li>
          <li className="nav__item w-full text-center ml:w-auto px-2">
            <a
              href="#skills"
              className={navItem}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li className="nav__item w-full text-center ml:w-auto px-2">
            <a
              href="#portfolio"
              className={navItem}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
          </li>
          <li className="nav__item w-full text-center ml:w-auto px-2">
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
      <div className="nav__icon cursor-pointer ml:hidden">
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
