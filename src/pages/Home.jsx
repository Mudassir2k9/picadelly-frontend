const Home = () => {
  return (
    <>
      <div className="container-fluid banner_section">
        <div className="container">
          <div className="row banner-row">
            <div className="col-md-6 banner-col">
              <div className="inner-div">
                <h2
                  className="wow animate__fadeInDownBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  Where <b>Strategy,</b>
                  <br />
                  <b>Creativity,</b> and
                  <br />
                  <b>Results</b> <i>Converge.</i>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_video">
          <video autoPlay muted loop id="myVideo">
            <source src="images/home-banner-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* start layered video section  */}
      <section className="section2 container-sticky">
        <div className="video-sticky">
          <div className="video-container">
            <h1 className="fw-bold">
              Operating Precisely Where
              <span className="color_primary">Message, Media</span> and
              <span className="color_primary">Momentum</span> Intersect.
            </h1>
            <video autoPlay="" muted="" loop="" className="second_video">
              <source src="images/happening-video.mp4" type="video/mp4" />
            </video>
            <svg
              className="clip"
              width="90"
              height="100"
              viewBox="0 0 90 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="svgTextPath">
                <path
                  d="M0 100H51.3887C59.2448 100 67.9204 98.2941 73.293 95.9007C83.664 91.2797 89.1139 82.8904 89.1139 72.4579V72.1729C89.1139 60.005 81.1951 50.5512 69.0953 47.6297C78.0635 44.1236 84.7009 35.7406 84.7009 25.5072V25.2221C84.7009 18.7421 81.8515 12.5199 78.2956 8.95297C71.8882 2.52955 63.4739 0 51.1065 0H0V100Z"
                  fill="white"
                />
              </clipPath>
            </svg>
          </div>
        </div>
      </section>
      {/* end layered video section  */}
      {/* <!-- start results section --> */}
      <section>
        <div className="parallax_container">
          <div className="left-column d-flex align-items-center">
            <h2
              className="large_heading fw-bold px-0 px-md-5 mx-0 mx-md-3 text-center text-md-start wow animate__fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              Outstanding Results<span className="color_primary">.</span>
            </h2>
          </div>
          <div className="right-column">
            <section className="parallax-section">
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="3s"
                data-wow-delay="0.5s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part">
                    <h5 className="color_green">Financial Services</h5>
                    <h2>25% Growth</h2>
                    <p>in New Members</p>
                  </div>
                </div>
                <div className="result-div-2 circle o_bg_green">
                  <h5>View The Case Study</h5>
                  <i className="fa-regular fa-arrow-right-long text-dark"></i>
                </div>
              </div>
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="3s"
                data-wow-delay="0.8s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part">
                    <h5 className="color_primary">Healthcare:</h5>
                    <h2>148% Increase</h2>
                    <p>in Web Traffic</p>
                  </div>
                </div>
                <div className="result-div-2 circle o_bg_primary">
                  <h5>View The Case Study</h5>
                  <i className="fa-regular fa-arrow-right-long text-dark"></i>
                </div>
              </div>
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="3s"
                data-wow-delay="1s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part">
                    <h5 className="color_yellow">Tourism</h5>
                    <h2>12% Jump</h2>
                    <p>in Occupancy Tax</p>
                  </div>
                </div>
                <div className="result-div-2 circle o_bg_yellow">
                  <h5>View The Case Study</h5>
                  <i className="fa-regular fa-arrow-right-long text-dark"></i>
                </div>
              </div>
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="3s"
                data-wow-delay="1.3s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part">
                    <h5 className="color_primary">Non Profit:</h5>
                    <h2>0.73% Increase</h2>
                    <p>Average click-Through Rate</p>
                  </div>
                </div>
                <div className="result-div-2 circle o_bg_primary">
                  <h5>View The Case Study</h5>
                  <i className="fa-regular fa-arrow-right-long"></i>
                </div>
              </div>
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="3s"
                data-wow-delay="1.6s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part">
                    <h5 className="color_teal">Education:</h5>
                    <h2>182% Increase</h2>
                    <p>in Student Re-enrollment</p>
                  </div>
                </div>
                <div className="result-div-2 circle o_bg_teal">
                  <h5>View The Case Study</h5>
                  <i className="fa-regular fa-arrow-right-long text-dark"></i>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* start creative section  */}
      <section className="horizontal_parallax">
        <div className="panel">
          <div className="row">
            <div className="heading_col d-flex align-items-center px-5">
              <h1
                className="large_heading fw-bold text-white wow animate__slideInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                Great Creative
              </h1>
            </div>
            <div className="right_content_col px-5 d-flex align-items-center">
              <h1
                className="large_heading text-start text-white fw-bold wow animate__fadeInDownBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                is collaborative. champions the unique. drives impact.
              </h1>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="row reverse_row">
            <div className="heading_col d-flex align-items-center px-5">
              <div
                className="px-0 px-md-5 mx-3 mx-md-5 text-start wow animate__fadeInDownBig"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h1 className="fw-bold text-white text-start font_40">
                  Valley Childern's
                </h1>
                <h2 className="fw_300 text-white text-start py-4">
                  Specialized Care that
                  <br />
                  Truly Cares and HKHF
                </h2>
                <a href="javascript:void(0)" className="btn_light">
                  View Project
                </a>
              </div>
            </div>
            <div className="right_content_col px-5 d-flex align-items-center right_video_col">
              <video autoPlay muted loop id="myVideo">
                <source src="images/creative-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="row reverse_row">
            <div className="video_col d-flex align-items-center px-5"></div>
            <div className="right_content_col px-5 d-flex align-items-center">
              <div className="px-0 px-md-5 mx-3 mx-md-5 text-start">
                <h1
                  className="fw-bold text-white text-start font_40 wow animate__slideInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  California Bank of Commerce.
                </h1>
                <h2
                  className="fw_300 text-white text-start py-4 wow animate__slideInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  The Premier <br />
                  Business Bank.
                </h2>
                <a href="javascript:void(0)" className="btn_light color_teal">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- start mobile slider section --> */}
      <section className="mobile_slider">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <img
                src="images/mobile-slide1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="images/mobile-slide2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="images/mobile-slide3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          {/* <!--   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
               </button> --> */}
        </div>
        {/* <!--   <div className="logo-slider">
            <div className="logo-track">
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
            
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
              <div className="logo"><img src="images/logo1.png" alt="Adobe" /></div>
            
            </div>
            </div>
            --> */}
      </section>
      {/* <!----------Happening-section----------> */}
      <div className="container-fluid happening_section pb-5 position-relative">
        <div className="container">
          <h2
            className="wow animate__fadeInDownBig"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            What's Happening
          </h2>
          <div className="row happening-row">
            <div
              className="circle white-div wow animate__fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div className="inner-col">
                <h5>Hot News</h5>
                <p>
                  <a href="#">
                    CEO Leadership Transition and AI is not Going Away.
                    <i className="fa-regular fa-arrow-right-long"></i>
                    <br />
                  </a>
                </p>
              </div>
            </div>
            <div
              className="circle orange-div wow animate__fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.7s"
            >
              <div className="inner-col">
                <h5>Blog Spotlight</h5>
                <p>
                  <a href="#">
                    CEO Leadership Transition and AI is not Going Away.
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </p>
                <p>
                  <a href="#">
                    CEO Leadership Transition and AI is not Going Away.
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </p>
              </div>
            </div>
            <div
              className="circle sky-div wow animate__fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.9s"
            >
              <div className="inner-col">
                <h5>Piccadilly Buzz</h5>
                <li>
                  <a href="#">
                    Team in action
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Award Wins<i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Announcements
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="happening_video" id="myVideo">
          <video autoPlay="" muted="" loop="">
            <source src="images/happening-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      {/* <!--------Happening-section-end-----------> */}
    </>
  );
};

export default Home;
