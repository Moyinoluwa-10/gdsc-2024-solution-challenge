// react & redux
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { MdContactSupport, MdDesignServices } from "react-icons/md";

// hamburger
import { Spiral as Hamburger } from "hamburger-react";

// images
import logo from "../../assets/images/logo-white.png";

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="h-[60px] flex items-center px-6 gap-2 md:hidden fixed z-10 top-0 left-0">
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={setOpen}
          label="Show menu"
        />
        <Link className="flex items-center gap-2 font-semibold" to={"/"}>
          <span className="">MagazineHub</span>
        </Link>
      </div>

      <section
        className={
          isOpen
            ? "z-10 fixed md:relative left-0 top-[60px] md:top-0 border-r md:bg-gray-100/40 bg-black/30 md:block h-full w-full overflow-hidden transition-all duration-500"
            : "z-10 fixed md:relative left-0 top-[60px] md:top-0 border-r md:bg-gray-100/40 bg-black/30 md:block h-full w-0 md:w-full overflow-hidden transition-all duration-500"
        }
      >
        <div className="flex h-full max-h-screen flex-col gap-2 w-full max-w-[280px] bg-primary">
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-base font-medium">
              <Link to={"/"} className="mb-10">
                <img src={logo} alt="" className="h-20" />
              </Link>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 rounded-lg px-3 py-2 text-white  transition-all hover:text-white bg-secondary"
                    : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white"
                }
                to={"/dashboard"}
              >
                <CiHome />
                Portal Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 rounded-lg px-3 py-2 text-white  transition-all hover:text-white bg-secondary"
                    : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white"
                }
                to={"/dashboard/services"}
              >
                <MdDesignServices />
                Services
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 rounded-lg px-3 py-2 text-white  transition-all hover:text-white bg-secondary"
                    : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white"
                }
                to={"/dashboard/support"}
              >
                <MdContactSupport />
                Support
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 rounded-lg px-3 py-2 text-white  transition-all hover:text-white bg-secondary mt-auto"
                    : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white"
                }
                to={"/dashboard/settings"}
              >
                <IoIosSettings />
                Settings
              </NavLink>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
