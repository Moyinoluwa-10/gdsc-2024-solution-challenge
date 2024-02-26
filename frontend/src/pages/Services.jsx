import SideBar from "../components/dashboard/Sidebar";

const Services = () => {
  return (
    <>
      <div className="grid md:grid-cols-[280px_1fr] w-full overflow-hidden mt-[60px] md:mt-0 min-h-screen">
        <SideBar />
        <main className="p-5">
          <h3 className="font-bold text-4xl mb-20">Our Services</h3>
          <div className="grid grid-cols-3 gap-10">
            <div className="p-5 bg-gray-100">
              <h2 className="font-semibold text-2xl mb-5">
                Facilitating Access to Reliable Energy
              </h2>
              <p className="text-lg mb-5">
                Our company specializes in connecting hydroelectric power
                providers with healthcare facilities or companies, ensuring
                access to a reliable and uninterrupted source of energy. By
                leveraging the expertise and resources of hydroelectric
                companies, we help healthcare institutions overcome energy
                challenges and maintain essential operations, ultimately
                improving patient care and outcomes.
              </p>

              <button className="py-3 px-6 z-0 inline-block overflow-hidden bg-primary rounded-md text-white relative border border-transparent hover:border-primary hover:text-primary transition-all duration-300 before:absolute before:block before:top-0 before:-left-[100%] before:w-full before:h-full before:bg-white before:-z-10 hover:before:left-0 before:transition-all before:duration-300">
                Book Now
              </button>
            </div>

            <div className="p-5 bg-gray-100">
              <h2 className="font-semibold text-2xl mb-5">
                Promoting Clean and Sustainable Energy
              </h2>
              <p className="text-lg mb-5">
                We are committed to promoting clean and sustainable energy
                solutions within the healthcare sector. By facilitating
                partnerships with hydroelectric power providers, we enable
                healthcare facilities to transition away from polluting and
                unreliable energy sources towards cleaner alternatives. This not
                only reduces environmental impact but also contributes to the
                health and well-being of communities served by these facilities.
              </p>

              <button className="py-3 px-6 z-0 inline-block overflow-hidden bg-primary rounded-md text-white relative border border-transparent hover:border-primary hover:text-primary transition-all duration-300 before:absolute before:block before:top-0 before:-left-[100%] before:w-full before:h-full before:bg-white before:-z-10 hover:before:left-0 before:transition-all before:duration-300">
                Book Now
              </button>
            </div>

            <div className="p-5 bg-gray-100">
              <h2 className="font-semibold text-2xl mb-5">
                Personalized Assistance
              </h2>
              <p className="text-lg mb-5">
                Our company offers personalized assistance in identifying
                hydroelectric power providers that best meet the specific needs
                of healthcare facilities. By considering factors such as
                location, energy requirements, budget constraints, and
                sustainability goals, we provide expert guidance and
                recommendations to match healthcare facilities with the most
                suitable hydroelectric power solutions. Whether it's a small
                rural clinic or a large urban hospital, our tailored matching
                services ensure that each healthcare facility is connected to
                the ideal hydroelectric power provider to meet their energy
                needs efficiently and effectively.
              </p>

              <button className="py-3 px-6 z-0 inline-block overflow-hidden bg-primary rounded-md text-white relative border border-transparent hover:border-primary hover:text-primary transition-all duration-300 before:absolute before:block before:top-0 before:-left-[100%] before:w-full before:h-full before:bg-white before:-z-10 hover:before:left-0 before:transition-all before:duration-300">
                Book Now
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Services;
