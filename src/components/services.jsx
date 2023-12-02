const Services = () => {
  return (
    <div>
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <i className="bi bi-briefcase" />
              </div>
              <h4 className="title">
                <a href>Gmail</a>
              </h4>
              <p className="description">
               try contacting my gmail at ndrstimoti@gmail.com
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="icon">
                <i className="bi bi-card-checklist" />
              </div>
              <h4 className="title">
                <a href>efficiency</a>
              </h4>
              <p className="description">
                its still not sattisfying but tryng my best
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="icon">
                <i className="bi bi-bar-chart" />
              </div>
              <h4 className="title">
                <a href>Ratings</a>
              </h4>
              <p className="description">
                3/5 Stars
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="icon">
                <i className="bi bi-binoculars" />
              </div>
              <h4 className="title">
                <a href>Chillnes</a>
              </h4>
              <p className="description">
                I can be pretty nervous if i cant do something that beyond my expetation
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="icon">
                <i className="bi bi-brightness-high" />
              </div>
              <h4 className="title">
                <a href>Time Work</a>
              </h4>
              <p className="description">
                I can only work at Night
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="icon">
                <i className="bi bi-calendar4-week" />
              </div>
              <h4 className="title">
                <a href>Available</a>
              </h4>
              <p className="description">
                My time of Available is only at the weekend
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </div>
  );
};

export default Services;
