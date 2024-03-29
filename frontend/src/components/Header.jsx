// react
import { Link, NavLink } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa6";

// hamburger
import { Sling as Hamburger } from "hamburger-react";

// components
// import Button from "./Button";

// images
import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  // const handleToggle = () => {
  //   setIsActive((active) => !active);
  // };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = 70;
      setIsHeaderActive(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          isHeaderActive
            ? "bg-transparent text-black z-50 fixed top-0 left-0 w-full transition-all duration-300 bg-white shadow-lg"
            : "bg-transparent text-black z-50 fixed top-0 left-0 w-full transition-all duration-300"
        }
      >
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
            <Link
              to={"/login"}
              className="relative py-2 px-16 inline-block overflow-hidden rounded-full text-white bg-black border border-black transition-all duration-300 hover:bg-transparent hover:text-black"
            >
              Log In
            </Link>
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
