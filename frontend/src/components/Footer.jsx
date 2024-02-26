import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

// images
import logo from "../assets/images/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-5 pt-12 py-7">
      <div className="container flex-wrap flex-col md:flex-row justify-between gap-x-10 gap-y-8 hidden md:flex">
        <div className="max-w-md">
          <img src={logo} alt="" className="h-20" />
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-2xl sm:whitespace-nowrap">
            Quick Links
          </h4>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Home
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/about"} className="footer-link">
              About Us
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/contact"} className="footer-link">
              Contact
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/faqs"} className="footer-link">
              FAQs
            </Link>
          </p>
        </div>

        <div className="lg:min-w-fit">
          <h4 className="font-semibold mb-5 text-2xl sm:whitespace-nowrap">
            Contact Info
          </h4>
          <p className="text-lg mb-5">info@medisync.com</p>
          <p className="text-lg mb-5">+1-222-222-222</p>
          <div className="flex items-center gap-5">
            <p className="relative transition-all duration-1000 hover:bottom-1 cursor-pointer">
              <FaInstagram className="text-2xl" />
            </p>
            <p className="relative transition-all duration-1000 hover:bottom-1 cursor-pointer">
              <FaFacebook className="text-2xl" />
            </p>
            <p className="relative transition-all duration-1000 hover:bottom-1 cursor-pointer">
              <FaLinkedin className="text-2xl" />
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-lg mt-10">
        &copy; {new Date().getFullYear()} MediSync
      </p>
    </footer>
  );
};

export default Footer;
