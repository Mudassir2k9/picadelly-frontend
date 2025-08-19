import React from "react";

const NewsLanding = () => {
  return (
    <>
    <style>{`
     @media only screen and (max-width: 576px){
     .hamburger i {
    color: #fff !important;
  }
     } 
`}</style>
      <div className="container-fluid executive_banner work_banner news_banner">
        <div className="container">
        <div className="executive_col">
          <h2 className="large_heading_2 text-center fw_300 text-white wow animate__fadeInDownBig">
            What's <span className="fw-bold text-dark">Happening</span>
          </h2>
        </div>
        </div>
      </div>

      <div className="container-fluid px-0 blog-spotlight d-flex justify-content-center align-items-center" id="blog-spotlights">
        <div className="row mx-0">
          <div className="col-md-6 px-5 d-flex  justify-content-center align-items-center bg-cover">
            <div className="content px-5">
              <h3
                className="color_teal fw-300 mb-2"
                style={{ fontSize: "33px" }}
              >
                <span className="fw_600">
                  Navigating Leadership Change:
                  <br />
                </span>{" "}
                Why Every CEO Transition Needs a Communications Strategy?
              </h3>
              <p className="font_20 text-dark">
                Leadership transitions are inevitable, but how they're
                communicated can define a brand's future. We've seen firsthand
                how a well-executed CEO transition communications plan can
                preserve trust, protect morale, and position a brand for
                long-term success. On the flip side, a poorly executed plan can
                damage a company's reputation, cause confusion, and even
                decrease shareholder value.
              </p>

              <a
                href="#"
                className="btn_light bg_teal text-white mt-3"
                style={{ display: "inline-block" }}
              >
                Read Blog
              </a>
            </div>
          </div>
          <div className="col-md-6 blog-right-col d-flex align-items-center px-5">
            <h3
              className="font_40 fw-semibold text-white px-5"
              style={{ fontSize: "60px" }}
            >
              Blog <br />
              Spotlight
            </h3>
          </div>
        </div>
      </div>

      {/* <!------Articles-section-------> */}

      <div className="container-fluid px-0 pt-5 pb-5 latest-news" id="hot-news">
        <div className="container px-0">
          <div className="row px-0 mx-0 pt-5 pb-5">
            <div className="col-md-12 px-0">
              <div className="pills-part">
                {/* <!-- Nav pills --> */}
                <ul className="nav nav-pills" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="pill"
                      href="#menu1"
                    >
                      All Categories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#menu2">
                      Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#menu3">
                      Credit Union Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#menu4">
                      Healthcare Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#menu5">
                      News and PR
                    </a>
                  </li>
                </ul>

                {/* <!-- Tab panes --> */}
                <div className="tab-content">
                  <div id="menu1" className="container tab-pane active">
                    <br />
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                  </div>
                  <div id="menu2" className="container tab-pane fade">
                    <br />
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                  </div>
                  <div id="menu3" className="container tab-pane fade">
                    <br />
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                  </div>
                  <div id="menu4" className="container tab-pane fade">
                    <br />
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                  </div>
                  <div id="menu5" className="container tab-pane fade">
                    <br />
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
                    <a href="#">
                    <div className="Articles_intro">
                      <div className="info">
                        <p className="text-dark">Category</p>
                        <h3 className="text-dark" style={{ maxWidth: "80%" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </h3>
                      </div>
                      <div className="on_hover-img">
                        <img src="images/news_img.png" />
                      </div>
                    </div>
                    </a>
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

export default NewsLanding;
