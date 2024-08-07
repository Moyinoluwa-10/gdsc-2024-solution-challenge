import { Link } from "react-router-dom";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <section className="hero min-h-screen pt-24 flex">
        <Header />

        <div className="container p-5 text-white  flex-1 flex flex-col justify-center">
          <h1 className="font-bold text-8xl mb-10 max-w-lg">
            Empowering Healthcare
          </h1>
          <p className="text-2xl max-w-lg mb-10">
            Providing clean, renewable, and affordable energy solutions for the
            healthcare sector
          </p>
          <Link
            to={"/about"}
            className="py-2 px-16 max-w-fit rounded-full text-white bg-black border border-black"
          >
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
