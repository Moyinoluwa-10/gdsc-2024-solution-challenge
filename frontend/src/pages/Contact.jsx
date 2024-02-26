// react
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

// components
import Header from "../components/Header";
import ContactForm from "../components/contact/ContactForm";

// images
import contact from "../assets/images/contact.jpg";
import Map from "../components/contact/Map";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="pt-40">
        <section className="container p-5 py-10 grid grid-cols-2 items-center">
          <div className="">
            <h2 className="font-bold text-3xl mb-2">Contact</h2>
            <p className="text-xl mb-8">Get in touch with us today</p>
            <p className="text-lg mb-2">info@medisync.com</p>
            <p className="text-lg mb-2">+1-222-222-222</p>
            <div className="flex items-center gap-5 mb-10">
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
            <img src={contact} alt="" />
          </div>
          <ContactForm />
        </section>

        <section className="container p-5 py-10 mb-20">
          <div className="flex justify-between mb-10">
            <div>
              <h3 className="font-bold text-lg">Location</h3>
              <p>123 Main Street</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Working Hours</h3>
              <p>Mon - Fri: 9am - 5pm</p>
            </div>
          </div>
          <Map />
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Contact;
