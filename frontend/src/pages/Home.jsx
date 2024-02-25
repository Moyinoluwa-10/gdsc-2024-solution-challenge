import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <section className="hero min-h-screen">
        <Header />
        <div>
          <h1>Empowering Healthcare</h1>
          <p>
            Providing clean, renewable, and affordable energy solutions for the
            healthcare sector
          </p>
          <a href="">Learn More</a>
        </div>
      </section>

      <section>
        At MediSync, we are dedicated to connecting hospitals with clean and
        efficient energy sources they need to run daily activities. Our
        solutions provide access to hydro-powered companies, ensuring access to
        clean, renewable, and affordable energy for the healthcare sector.
      </section>
    </>
  );
};

export default Home;
