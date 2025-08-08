import React from "react";

const Work = () => {
  return (
    <>
      <div className="container-fluid executive_banner work_banner">
        <div className="container"></div>
        <div className="executive_col">
          <h2 className="large_heading_2 text-center fw_300 text-white wow animate__fadeInDownBig">
            A Diverse <span className="fw-bold text-dark">Portfolio</span>
          </h2>
        </div>
      </div>

      {/* <!-- start portfolio section --> */}

      <div className="portfolio_row">
        <div className="links_col">
          <div className="item_link">Valley Christian Schools</div>
          <div className="item_link">CA Bank of Commerce</div>
          <div className="item_link">Visit Visalia</div>
          <div className="item_link default">Sesloc Credit Union</div>
          <div className="item_link ">Travis Credit Union</div>
          <div className="item_link">Cal Poly</div>
          <div className="item_link">San Luis Obispo</div>
        </div>

        <div className="links_img_col">
          <div className="img_wrapper">
            <img
              id="prevThumb"
              className="img_thumbnail"
              src=""
              alt="Previous Thumbnail"
            />
            <div className="overlay_text" id="prevText"></div>
          </div>

          <div className="img_wrapper main">
            <img
              id="mainImage"
              className="main-image"
              src=""
              alt="Main Image"
            />
            <div className="overlay_text" id="mainText"></div>
          </div>

          <div className="img_wrapper">
            <img
              id="nextThumb"
              className="img_thumbnail"
              src=""
              alt="Next Thumbnail"
            />
            <div className="overlay_text" id="nextText"></div>
          </div>
        </div>
      </div>

      {/* <!-- testimonials-section --> */}
      <div className="container-fluid bg_cover testimonials_part px-0">
        <div className="container">
          <div className="row mx-0">
            <div className="testimonials-heading mt-5 pt-3">
              <h3
                className="fw_600 text-light wow animate__slideInLeft text-start"
                style={{ fontSize: "36px" }}
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                Don't just take our word for it, hear what our satisfied clients
                have to say!
              </h3>
            </div>
            <div className="testimonials d-flex justify-content-end">
              <div className="testimonials-inner">
                {/* <!-- Carousel --> */}
                <div
                  id="demo"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  {/* <!-- Indicators/dots --> */}
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#demo"
                      data-bs-slide-to="0"
                      className="active"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#demo"
                      data-bs-slide-to="1"
                    ></button>
                  </div>

                  {/* <!-- The slideshow/carousel --> */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <p
                        className="text-dark"
                        style={{ fontSize: "23px", lineHeight: "30px" }}
                      >
                        "You guys are awesome, no wonder you have such a
                        successful business. Thank you for always listening to
                        me and identifying exactly what I need."
                      </p>
                      <p className="text-dark fw_600">
                        Director, Integrated Corporate Comms, Electronics
                        Manufacturing
                      </p>
                    </div>
                    <div className="carousel-item">
                      <p
                        className="text-dark"
                        style={{ fontSize: "23px", lineHeight: "30px" }}
                      >
                        "Your group is fantastic. I am speechless with your
                        speed and thoroughness!" 
                      </p>
                      <p className="text-dark fw_600">
                        Leader, Global Branding and Channel Marketing, Global
                        Healthcare
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
