import React from "react";

const CaseStudy = () => {
  return (
    <>
      <div className="container-fluid case_study_banner">
        <div className="row banner-row mx-0">
          <div className="col-md-6 case_study-col-1 px-0 ">
            <div className="inner-div">
              <p className="font_20">Brand Refresh and Marketing Campaign</p>
              <h2
                className="color_primary fw-bold"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                style={{ fontSize: "50px" }}
              >
                <span className="text-dark">California</span> Bank of Commerce
              </h2>
            </div>
          </div>
          <div className="col-md-6 banner-col case_study-col-1">
            <div className="inner-div d-flex" style={{ width: "100%" }}>
              <div
                className="list-col d-flex justify-content-center"
                style={{ width: "40%" }}
              >
                <div className="list-inner">
                  <h5 className="fw_600">Channels</h5>
                  <ul style={{ paddingLeft: "26px" }}>
                    <li className="font_18 mb-1">Digital Ads</li>
                    <li className="font_18 mb-1">Print</li>
                    <li className="font_18 mb-1">Outdoor</li>
                    <li className="font_18 mb-1">Public Relations</li>
                  </ul>
                </div>
              </div>
              <div
                className="list-col d-flex justify-content-center"
                style={{ width: "60%" }}
              >
                <div className="list-inner">
                  <h5 className="fw_600">Integrated Services</h5>
                  <ul style={{ paddingLeft: "26px" }}>
                    <li className="font_18 mb-1">Brand Strategy & Identity</li>
                    <li className="font_18 mb-1">
                      Campaign Strategy & Development
                    </li>
                    <li className="font_18 mb-1">
                      TV/Radio Creative & Production
                    </li>
                    <li className="font_18 mb-1">
                      Digital & Traditional Media
                    </li>
                    <li className="font_18 mb-1">Public Relations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!------case-study-faqs------> */}

      <div className="container-fluid case-study-faqs bg-cover px-0">
        <div className="row mx-0 d-flex">
          <div className="heading_col d-flex align-items-center px-5 team_col pt-5 pb-5">
            <div className="px-5 content">
              <h3
                className="fw_600 color_primary text-start d-flex justify-content-center align-items-center"
                style={{ fontSize: "35px", minHeight: "200px" }}
              >
                Piccadilly Positions a Premier B2B Bank for Growth
              </h3>
            </div>

            <div className="accordion-part px-5 ">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item  mb-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button font_20 color_teal collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Not Enough Bandwidth or Know-How
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Your workforce is maxed out or you’re missing key
                        capabilities. We’ll recruit someone who not only can
                        fill the gap but accelerate impact.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button font_20 color_teal collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Need Flexible Options Fast
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>
                        A part-time CMO? A demand-gen expert? Have a stellar
                        employee out on leave? We’ve got flexible options to fit
                        your needs — no long-term commitment required and
                        expertise guaranteed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item  mb-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button font_20 collapsed color_teal fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Interim Support While Hiring
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Hiring and onboarding takes time but your projects can’t
                        wait. Our contractor will step in and keep your
                        productivity on track until a team member is in place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item  mb-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button font_20 collapsed color_teal fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Adaptive Solutions
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>
                        No cookie-cutter approaches. Whether you require the
                        expertise of individual specialists or the collaborative
                        power of integrated teams, our solutions are tailored to
                        your unique requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 case-study-col-2 pb-5">
            <div className="circle-1 circle-one">
              <h2>4.5M</h2>
              <p className="fw_600 font_18">New impressions</p>
            </div>
            <div className="circle-1 circle-two">
              <h2>18K</h2>
              <p className="fw_600 font_18">
                Site visits,
                <br />
                /first 4-months
              </p>
            </div>
            <div className="circle-1 circle-three">
              <h2>162%</h2>
              <p className="fw_600 font_18">
                increase in
                <br />
                contact us form
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-----case-study-posts-----> */}

      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-1.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-2.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-3.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-4.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-6.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 image-container px-0">
            <a href="#">
              <div>
                <img src="images/project-5.png" />
                <div className="hover-text">
                  <i className="fa-solid fa-play"></i>
                  <p>
                    <span className="fw_600" style={{ fontSize: "28px" }}>
                      CALIFORNIA
                    </span>
                    <br />
                    BANK OF COMMERCE
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <!------video-section------> */}

      <div className="container-fluid d-flex justify-content-center align-items-center bg-cover video-section px-0">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center mx-0">
            <div className="col-md-8">
              <video controls muted="" loop="">
                <source src="images/home-banner-video.mp4" type="video/mp4" />
              </video>
              <h5 className="Video-title text-white mt-2">TV Spot</h5>
            </div>
          </div>
        </div>
      </div>
      {/* <!-----project-section-----> */}

      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-md-6 project-col px-0">
            <a href="#">
              <div className="overlay-div text-end">
                <span
                  className="mb-5"
                  style={{
                    fontSize: "32px",
                    color: "#ffffffad",
                    display: "inline-block",
                  }}
                >
                  ⟵
                </span>
                <br />
                <h5 className="text-white mb-3 font_18 fw_600">
                  Previous Project :
                </h5>
                <h3 className="text-white font_40 fw_600">Cal Poly</h3>
              </div>
              <img src="images/previous-project.png" width="100%" />
            </a>
          </div>
          <div className="col-md-6 project-col px-0">
            <a href="#">
              <div className="overlay-div text-start">
                <span
                  className="mb-5"
                  style={{
                    fontSize: "32px",
                    color: "#ffffffad",
                    display: "inline-block",
                  }}
                >
                  ⟶
                </span>
                <br />
                <h5 className="text-white mb-3 font_18 fw_600">
                  Next Project :
                </h5>
                <h3 className="text-white font_40 fw_600">
                  SELSOC Credit Union
                </h3>
              </div>
              <img src="images/next-project.png" width="100%" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
