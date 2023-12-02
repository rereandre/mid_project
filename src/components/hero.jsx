/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Andreas Timothy Pattinaja</h1>
          <p>
          University Student.{" "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            />
          </p>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
};

export default Hero;
