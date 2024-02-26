// components
import Header from "../components/Header";
import ContactForm from "../components/contact/ContactForm";

// images
import contact from "../assets/images/contact.jpg";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="container p-5 py-10 grid grid-cols-2">
          <div className="">
            <h2>Contact</h2>
            <p>Get in touch with us today</p>
            <img src={contact} alt="" />
          </div>
          <ContactForm />
        </section>
      </main>
    </>
  );
};

export default Contact;
