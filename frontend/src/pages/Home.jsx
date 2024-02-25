import { Link } from "react-router-dom";
import Header from "../components/Header";

// images
import service1 from "../assets/images/service-1.jpg";
import service2 from "../assets/images/service-2.jpg";
import collab1 from "../assets/images/collab-1.png";
import collab2 from "../assets/images/collab-2.jpg";
import collab3 from "../assets/images/collab-3.jpg";
import collab4 from "../assets/images/collab-4.png";
import collab5 from "../assets/images/collab-5.jpg";

const Home = () => {
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

      <section className="container p-5 py-20 text-center">
        <p className="text-2xl mb-10">
          Renewable energy is energy that comes from natural sources that are
          replenished faster than they are consumed. Renewable energy sources
          include sun, wind, moving water, organic plant and waste material
          (eligible biomass), and the earth's heat (geothermal or air- and
          water-source heat pumps). <br />
          <br />
          At MediSync, we are dedicated to connecting hospitals with clean and
          efficient energy sources they need to run daily activities. Our
          solutions provide access to hydro-powered companies, ensuring access
          to clean, renewable, and affordable energy for the healthcare sector.
          Hospitals and health systems around the world are investing in clean,
          renewable energy to protect the health of their patients and
          communities, attract and retain top-tier talent, increase the
          resilience of their operations to disasters, and reduce energy costs
          and price volatility. Combining renewable energy with electricity
          storage can help hospitals remain operational during extreme weather
          or other disruptions to the electric grid. Hydroelectric power, or
          hydropower, harnesses the force of falling water to produce
          electricity. It has a long and rich history, proving to be reliable
          for more than a century.
        </p>
      </section>

      <div className="bg-[#caecc9]">
        <section className="container p-5 py-20">
          <h3 className="text-3xl mb-10">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <img src={service1} alt="" className="aspect-video rounded-md" />
              <h4 className="font-semibold text-3xl mt-5 mb-5">Hydro Power</h4>
              <p className="text-xl">
                We connect hospitals with hydro power companies, providing them
                with clean and renewable energy sources
              </p>
            </div>

            <div>
              <img src={service2} alt="" className="aspect-video rounded-md" />
              <h4 className="font-semibold text-3xl mt-5 mb-5">
                Energy Efficiency
              </h4>
              <p className="text-xl">
                We help hospitals optimize their energy usage, implementing
                energy-efficient solutions to reduce waste and costs.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="container p-5 py-20 text-center">
        <h3 className="text-3xl mb-10">Testimonials</h3>
        <p className="text-2xl mb-10">
          MediSync has provided our hospital with clean energy solutions.Their
          commitment to sustainability is impressive
        </p>

        <div className="grid md:grid-cols-3">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              mollitia iste nesciunt sit sapiente vero delectus assumenda qui
              facilis. Omnis, non rem quae quasi harum porro ipsa. Adipisci in
              doloribus officia harum consequuntur rerum mollitia debitis ipsam
              dolorem facere aliquam ipsum, ipsa eos accusantium iusto. Dolorum
              vitae, rem odit in fuga voluptates fugit, minima natus iste
              cupiditate labore? Saepe, dolore a? Sint assumenda quidem fugit
              totam impedit dolores. Dolorum reiciendis nihil accusamus nesciunt
              ea possimus culpa exercitationem molestiae nemo illo recusandae
              quas aperiam quae id molestias eligendi ut suscipit eos ducimus
              aspernatur, impedit laudantium corrupti. Adipisci voluptatem
              facere deleniti praesentium!
            </p>
            <p>CEO, Deka Medical Center</p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              mollitia iste nesciunt sit sapiente vero delectus assumenda qui
              facilis. Omnis, non rem quae quasi harum porro ipsa. Adipisci in
              doloribus officia harum consequuntur rerum mollitia debitis ipsam
              dolorem facere aliquam ipsum, ipsa eos accusantium iusto. Dolorum
              vitae, rem odit in fuga voluptates fugit, minima natus iste
              cupiditate labore? Saepe, dolore a? Sint assumenda quidem fugit
              totam impedit dolores. Dolorum reiciendis nihil accusamus nesciunt
              ea possimus culpa exercitationem molestiae nemo illo recusandae
              quas aperiam quae id molestias eligendi ut suscipit eos ducimus
              aspernatur, impedit laudantium corrupti. Adipisci voluptatem
              facere deleniti praesentium!
            </p>
            <p>CEO, Deka Medical Center</p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              mollitia iste nesciunt sit sapiente vero delectus assumenda qui
              facilis. Omnis, non rem quae quasi harum porro ipsa. Adipisci in
              doloribus officia harum consequuntur rerum mollitia debitis ipsam
              dolorem facere aliquam ipsum, ipsa eos accusantium iusto. Dolorum
              vitae, rem odit in fuga voluptates fugit, minima natus iste
              cupiditate labore? Saepe, dolore a? Sint assumenda quidem fugit
              totam impedit dolores. Dolorum reiciendis nihil accusamus nesciunt
              ea possimus culpa exercitationem molestiae nemo illo recusandae
              quas aperiam quae id molestias eligendi ut suscipit eos ducimus
              aspernatur, impedit laudantium corrupti. Adipisci voluptatem
              facere deleniti praesentium!
            </p>
            <p>CEO, Deka Medical Center</p>
          </div>
        </div>
      </section>

      <section className="container p-5 py-20">
        <p className="text-center font-medium text-3xl mb-10">
          In Collaboration with
        </p>
        <div className="flex items-center justify-center gap-5">
          <img src={collab1} alt="" className="w-40" />
          <img src={collab2} alt="" className="w-40" />
          <img src={collab3} alt="" className="w-40" />
          <img src={collab4} alt="" className="w-40" />
          <img src={collab5} alt="" className="w-40" />
        </div>
      </section>
    </>
  );
};

export default Home;
