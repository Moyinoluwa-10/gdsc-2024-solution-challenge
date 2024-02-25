// react
import { Link, NavLink } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa6";

// hamburger
import { Sling as Hamburger } from "hamburger-react";

// components
// import Button from "./Button";

// images
// import logo from "../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  // const handleToggle = () => {
  //   setIsActive((active) => !active);
  // };

  return (
    <>
      <header className="bg-transparent text-white md:container py-5 px-10 sm:px-24 relative z-50">
        <div className="container flex items-center justify-between">
          <div>
            <Link to={"/"}>
              {/* <img src={logo} alt="logo" className="w-10" /> */}
              <p>
                <b>ProductName</b>
              </p>
            </Link>
          </div>

          <ul className="list-none items-center gap-6 font-pt-bold text-xl uppercase flex">
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

          <div className="lg:flex hidden text-lg">
            <button>Log In</button>
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
