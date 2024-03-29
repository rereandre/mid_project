const Header = () => {
  return (
    <div>
      {/* ======= Mobile nav toggle button ======= */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none" />
      {/* ======= Header ======= */}
      <header id="header">
        <div className="d-flex flex-column">
        <div className="profile">
                    <img src="src/assets/img/rere.jpeg" alt className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Andreas Timothy Pattinaja</a></h1>
                    <div className="social-links mt-3 text-center">
                    <a href="#" className="twitter"><i className="bi bi-instagram" /></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                    <a href="#" className="instagram"><i className="bi bi-threads" /></a>
                    <a href="#" className="google-plus"><i className="bi bi-skype" /></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home" /> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user" /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank" /> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content" /> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bx bx-server" /> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope" /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
        </div>
      </header>
      {/* End Header */}
    </div>
  );
};

export default Header;
