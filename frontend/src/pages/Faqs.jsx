// react
import { useState } from "react";

// components
import Footer from "../components/Footer";
import faqs from "../components/faqs/faqs.json";
import FaqItem from "../components/faqs/FaqItem";
import Header from "../components/Header";

const Faqs = () => {
  const [isActive, setIsActive] = useState(null);

  const handleToggle = (id) => {
    setIsActive((active) => (active === id ? null : id));
  };

  return (
    <>
      <Header />

      <section className="container p-5 mt-10 pt-40">
        <div className="max-w-4xl mx-auto py-10 px-3 md:px-20 shadow-xl rounded-xl mb-20">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              {...faq}
              id={i + 1}
              isActive={isActive}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faqs;
