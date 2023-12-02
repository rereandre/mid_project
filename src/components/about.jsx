const About = () => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <p>
              My profession right now is a collage Student, trying my best to learn about coding. My mom opened a business at our house and my job sometimes to help her, and also earn easy cash from her, my coding skills are very weak but trying my best to be better.  
            </p><br/>
            <p>
             I also like to play Video games but never acctually have a very good skills, especially FPS game, My dream is to become a musician so i can use my coding to promote my music, lesson etc.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/wyn_cj.jpeg" className="img-fluid" alt />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Drummer &amp; Musician</h3>
              <p className="fst-italic">
                trying my best on learning coding
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Birthday:</strong> <span>9 September 2004</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>www.Andreas.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phone:</strong> <span>081245782901</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>City:</strong> <span>North Sulawesi, Manado</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Age:</strong> <span>19</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Degree:</strong> <span>FreeCodeCamp</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong>{" "}
                      <span>ndstimoti@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Hobbies:</strong> <span>Music and gaming </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};

export default About;
