// react
import { Link, NavLink } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa6";

// hamburger
import { Sling as Hamburger } from "hamburger-react";

// components
// import Button from "./Button";

// images
import logo from "../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  // const handleToggle = () => {
  //   setIsActive((active) => !active);
  // };

  return (
    <>
      <header className="bg-transparent text-black z-50 fixed top-0 left-0 w-full">
        <div className="container flex items-center justify-between px-10 sm:px-24">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="logo" className="h-16" />
            </Link>
          </div>

          <ul className="list-none items-center gap-6 flex">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-tertiary before:bg-tertiary nav-link"
                    : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "text-tertiary before:bg-tertiary nav-link"
                    : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "text-tertiary before:bg-tertiary nav-link"
                    : "nav-link"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="lg:flex hidden">
            <button className="relative py-2 px-16 inline-block overflow-hidden rounded-full text-white bg-black border border-black">
              Log In
            </button>
          </div>

          <div className="block lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
