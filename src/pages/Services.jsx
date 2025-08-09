import React from "react";

const Services = () => {


setTimeout(() => {
          if (window.$) {
            const $cSlider = window.$(".strategy_slider");

            if ($cSlider.hasClass("owl-loaded")) {
              $cSlider.trigger("destroy.owl.carousel");
              $cSlider.removeClass("owl-loaded");
              $cSlider.find(".owl-stage-outer").children().unwrap();
              $cSlider.find(".owl-item").children().unwrap();
              $cSlider.find(".owl-dots.disabled").removeClass("disabled");
            }

            $cSlider.owlCarousel({
              loop: true,
              nav: false,
              autoplay: true,
              // center: true,
              // autoWidth: true, // ❌ commented to match strategy_slider
              autoplayTimeout: 5000,
              autoplaySpeed: 800,
              margin: 10,
              responsive: {
                0: {
                  items: 1,
                },
                1200: {
                  items: 5,
                },
              },
            });
          }
        }, 1000);
setTimeout(() => {
          if (window.$) {
            const $cSlider = window.$(".c_slider");

            if ($cSlider.hasClass("owl-loaded")) {
              $cSlider.trigger("destroy.owl.carousel");
              $cSlider.removeClass("owl-loaded");
              $cSlider.find(".owl-stage-outer").children().unwrap();
              $cSlider.find(".owl-item").children().unwrap();
              $cSlider.find(".owl-dots.disabled").removeClass("disabled");
            }

            $cSlider.owlCarousel({
              loop: true,
              nav: false,
              dots: true,
              autoplay: true,
              autoWidth: true,
              autoplayTimeout: 5000,
              autoplaySpeed: 800,
              margin: 10,
              responsive: {
                0: { items: 2 },
                1200: { items: 4 },
              },
            });
          }
        }, 1000); // small delay to allow DOM to render

  return (
    <>
      {/* <!-- team modals --> */}
      <div
        className="modal fade team_popup "
        id="team1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable shadow radius-0">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close text-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-5 pb-5">
              <div className="row">
                <div className="col-md-4">
                  <img src="images/pop-up-vintage.png" />
                  <h5 className="text-dark fw-bold pt-3">Vintage Foster</h5>
                  <p>CEO</p>
                  <p className="team_contacts">
                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  </p>
                </div>
                <div className="col-md-8">
                  <p className="font_14">
                    Vintage founded Piccadilly in the Bay Area in 2007 and has
                    since expanded it across multiple cities, including Los
                    Angeles, Dallas, and Vancouver. Under his leadership,
                    Piccadilly delivers integrated marketing, branding, digital,
                    and public relations services to a slate of national brands
                    as well as regional powerhouses. A committed philanthropist,
                    Vintage has been honored as Citizen of the Year by the Bay
                    Area Leadership Foundation and the East Bay Economic
                    Development Alliance, and named a Scholarship Impact Award
                    recipient by Bay Area Blacks in Philanthropy for his work
                    helping disadvantaged youth attend college. He is also
                    widely sought after for his expertise in crisis
                    communications, leading Piccadilly to be named Crisis
                    Communications Firm of the Year by Dow Jones and Ragan's PR
                    Daily. Vintage has also served as an adjunct professor at
                    the University of the Pacific and Middlebury College. A
                    vintage car enthusiast in every sense, Vintage spends his
                    weekends behind the wheel of a 1965 Corvette—a timeless
                    classic that mirrors his appreciation for craftsmanship,
                    performance, and enduring style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container-fluid executive_banner services_banner">
        <div className="container">
          <div className="executive_col">
            <h2
              className="large_heading_2  text-center text-white fw_300 wow animate__fadeInDownBig"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              {" "}
              A Full-Service<span className="fw-bold"> Marketing Agency </span>
            </h2>
          </div>
        </div>
      </section>

      {/* <!-- start about section --> */}

      <section className="about_section d-flex align-items-center justify-content-center text-center">
        <div className="row w-100">
          <div className="mx-auto d-flex justify-content-center fix_width_content">
            <h1
              className="large_heading  wow animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              Authentically Integrated <strong>– All in House</strong>
            </h1>
          </div>
        </div>
      </section>

      {/* <!-- start services section --> */}

      <section className="services_section bg_cover sec_py">
        <div className="container">
          <div className="row">
            <div className="fix_width_content mx-auto text-center">
              <h3 className="large_heading">
                Authentically Integrated <strong>– All in House</strong>
              </h3>
            </div>
          </div>
        </div>
        <div className="overflow_slider py-5">
          <div className="owl-carousel owl-theme strategy_slider">
            <div className="item">
              <div className="strategy_wrap">
                <div className="inner_wrap">
                  <p className="text-dark">
                    Marketing Strategy and Planning that Delivers Results and
                    Market Growth
                  </p>
                  <a href="javascript:void(0)" className="btn btn_primary">
                    Learn More
                  </a>
                </div>
                <p className="text-dark fw-bold pt-3 font_18 px-4">
                  Market Research
                </p>
              </div>
              <div>
                <img src="images/markte-strategy-img.jpg" />
                <p className="text-white fw-bold font_18 pt-3 fade_text">
                  Market Research
                </p>
              </div>
            </div>
            <div className="item">
              <div className="strategy_wrap">
                <div className="inner_wrap">
                  <p className="text-dark">
                    Marketing Strategy and Planning that Delivers Results and
                    Market Growth
                  </p>
                  <a href="javascript:void(0)" className="btn btn_primary">
                    Learn More
                  </a>
                </div>
                <p className="text-dark fw-bold pt-3 font_18 px-4">
                  Market Research
                </p>
              </div>
              <div>
                <img src="images/strat.jpg" />
                <p className="text-white fw-bold pt-3 font_18 fade_text px-4">
                  Strategic Planning
                </p>
              </div>
            </div>
            <div className="item">
              <div className="strategy_wrap">
                <div className="inner_wrap">
                  <p className="text-dark">
                    Marketing Strategy and Planning that Delivers Results and
                    Market Growth
                  </p>
                  <a href="javascript:void(0)" className="btn btn_primary">
                    Learn More
                  </a>
                </div>
                <p className="text-dark fw-bold pt-3 font_18 px-4">
                  Brand Strategy & Identity
                </p>
              </div>
              <div>
                <img src="images/brand-strategy-img.jpg" />
                <p className="text-white fw-bold pt-3 font_18 fade_text px-4">
                  Brand Strategy & Identity
                </p>
              </div>
            </div>
            <div className="item">
              <div className="strategy_wrap">
                <div className="inner_wrap">
                  <p className="text-dark">
                    Marketing Strategy and Planning that Delivers Results and
                    Market Growth
                  </p>
                  <a href="javascript:void(0)" className="btn btn_primary">
                    Learn More
                  </a>
                </div>
                <p className="text-dark fw-bold pt-3 font_18 px-4">
                  Campaign Strategy & Development
                </p>
              </div>
              <div>
                <img src="images/compaign-strategy-img.jpg" />
                <p className="text-white fw-bold pt-3 font_18 fade_text px-4">
                  Campaign Strategy & Development
                </p>
              </div>
            </div>
            <div className="item">
              <div className="strategy_wrap">
                <div className="inner_wrap">
                  <p className="text-dark">
                    Marketing Strategy and Planning that Delivers Results and
                    Market Growth
                  </p>
                  <a href="javascript:void(0)" className="btn btn_primary">
                    Learn More
                  </a>
                </div>
                <p className="text-dark fw-bold pt-3 font_18 px-4">
                  Video, TV, Radio & Podcast Production Services
                </p>
              </div>
              <div>
                <img src="images/digital-img.jpg" />
                <p className="text-white fw-bold pt-3 font_18 fade_text px-4">
                  Video, TV, Radio & Podcast Production Services
                </p>
              </div>
            </div>
            <div className="item">
              <div className="strategy_wrap">
                <div className="inner_wrap">
                  <p className="text-dark">
                    Marketing Strategy and Planning that Delivers Results and
                    Market Growth
                  </p>
                  <a href="javascript:void(0)" className="btn btn_primary">
                    Learn More
                  </a>
                </div>
                <p className="text-dark fw-bold pt-3 font_18 px-4">
                  Digital & Traditional Media
                </p>
              </div>
              <div>
                <img src="images/website-img.jpg" />
                <p className="text-white fw-bold pt-3 font_18 fade_text px-4">
                  Digital & Traditional Media
                </p>
              </div>
            </div>
            <div className="item">
              <div className="strategy_wrap">
                <div className="inner_wrap">
                  <p className="text-dark">
                    Marketing Strategy and Planning that Delivers Results and
                    Market Growth
                  </p>
                  <a href="javascript:void(0)" className="btn btn_primary">
                    Learn More
                  </a>
                </div>
                <p className="text-dark fw-bold pt-3 font_18 px-4">
                  Website Audit, SEO & Design
                </p>
              </div>
              <div>
                <img src="images/public-media-img.jpg" />
                <p className="text-white fw-bold pt-3 font_18 fade_text px-4">
                  Website Audit, SEO & Design
                </p>
              </div>
            </div>
            <div className="item">
              <div className="strategy_wrap">
                <div className="inner_wrap">
                  <p className="text-dark">
                    Marketing Strategy and Planning that Delivers Results and
                    Market Growth
                  </p>
                  <a href="javascript:void(0)" className="btn btn_primary">
                    Learn More
                  </a>
                </div>
                <p className="text-dark fw-bold pt-3 font_18 px-4">
                  Public & Media Relations
                </p>
              </div>
              <div>
                <img src="images/social-media-img.jpg" />
                <p className="text-white fw-bold pt-3 font_18 fade_text px-4">
                  Public & Media Relations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- start team section --> */}
<div className="container-fluid px-0 team-section d-flex justify-content-center align-items-center">
  {/* Carousel */}
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
    </div>

    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      {/* Healthcare */}
      <div className="carousel-item active">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col bg_primary healthcare_col">
            <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
              <h3 className="font_40 fw-bold text-white">Healthcare</h3>
              <p className="font_18 text-white py-4">
                Named one of America's top marketing agencies in healthcare, Piccadilly’s deep knowledge generates measurable results and impact for your organization.
              </p>
              <a href="#" className="btn btn_light">View the Work</a>
            </div>
          </div>
          <div className="right_content_col px-0 d-flex align-items-center team_right_col">
            <img src="images/healthcare-img.jpg" className="img-fluid w-100 h-100 object_cover" alt="Healthcare" />
          </div>
        </div>
      </div>

      {/* Financial Services */}
      <div className="carousel-item">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col bg_primary financial_col">
            <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
              <h3 className="font_40 fw-bold text-white">Financial Services</h3>
              <p className="font_18 text-white py-4">
                Our strategic planning and results-driven marketing capabilities spark engagement and foster long-term customer growth, maximizing your ROI.
              </p>
              <a href="#" className="btn btn_light">View the Work</a>
            </div>
          </div>
          <div className="right_content_col d-flex align-items-center justify-content-center px-0 mx-0 right_member_col financial_right_col position-relative">
            <img src="images/financial-img.jpg" className="img-fluid w-100 h-100 object_cover" alt="Financial Services" />
          </div>
        </div>
      </div>

      {/* Tourism */}
      <div className="carousel-item">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col bg_primary tourism_col">
            <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
              <h3 className="font_40 fw-bold text-white">Tourism</h3>
              <p className="font_18 text-white py-4">
                Our award-winning travel and tourism experience grabs your audience's attention, increases visitor spending, and boosts transient occupancy tax revenue.
              </p>
              <a href="#" className="btn btn_light">View the Work</a>
            </div>
          </div>
          <div className="right_content_col d-flex align-items-center justify-content-center px-0 mx-0 right_member_col tourism_right_col financial_right_col position-relative">
            <img src="images/tourism_img.jpg" className="img-fluid w-100 h-100 object_cover" alt="Tourism" />
          </div>
        </div>
      </div>

      {/* Non-Profit */}
      <div className="carousel-item">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col bg_primary non-profit_col">
            <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
              <h3 className="font_40 fw-bold text-white">Non-Profit</h3>
              <p className="font_18 text-white py-4">
                Piccadilly has a proven track record of leveraging nonprofit marketing dollars to produce measurable impact and raise awareness of your mission.
              </p>
              <a href="#" className="btn btn_light">View the Work</a>
            </div>
          </div>
          <div className="right_content_col d-flex align-items-center justify-content-center px-0 mx-0 right_member_col tourism_right_col financial_right_col non-stop_right_col position-relative">
            <img src="images/non-profit_img.jpg" className="img-fluid w-100 h-100 object_cover" alt="Non-Profit" />
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="carousel-item">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col bg_primary education_col mx-0">
            <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
              <h3 className="font_40 fw-bold text-white">Education</h3>
              <p className="font_18 text-white py-4">
                Piccadilly's team of marketing experts craft campaigns and messaging designed to increase brand visibility and differentiation, and to catapult enrollment.
              </p>
              <a href="#" className="btn btn_light">View the Work</a>
            </div>
          </div>
          <div className="right_content_col d-flex align-items-center justify-content-center px-0 mx-0 right_member_col financial_right_col education_right_col position-relative">
            <img src="images/education_img.jpg" className="img-fluid w-100 h-100 object_cover" alt="Education" />
          </div>
        </div>
      </div>
    </div>

    {/* Controls (optional) */}
    {/*
    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
    */}
  </div>
</div>


      {/* <!-- start culture section --> */}
   
    </>
  );
};

export default Services;
