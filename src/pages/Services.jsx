import { useEffect, useState, useRef } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const Services = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/service?populate[AllServices][populate]=*&populate[Slider][populate]=*`
      )
      .then((res) => {
        // console.log("-----", res);
        setServiceData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching header data:", error);
      });
  }, []);

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
  const headingClassMap = {
    Healthcare: "healthcare_col",
    "Education ": "education_col",
    Tourism: "tourism_col",
    "Non-Profit": "non-profit_col",
    "Financial Services": "financial_col",
  };
  const headingRightClassMap = {
    Healthcare: "team_right_col",
    "Education ": "education_right_col",
    Tourism: "tourism_right_col",
    "Non-Profit": "non-stop_right_col",
    "Financial Services": "financial_right_col",
  };
  return (
    <>
      {/* <!-- team modals --> */}
      <style>{`
  .hamburger i {
    color: #fff !important;
  }
`}</style>

      <div
        className="modal fade team_popup service_modal"
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
              <div className="row px-0">
                <div className="col-md-4">
                  <img src="images/markte-strategy-img.jpg" />
                  <h5 className="text-dark fw_600 font_28 pt-3">
                    Market Research
                  </h5>
                  {/* <a href="javascript:void(0)" className="btn btn_primary">Button Orange</a> */}
                </div>
                <div className="col-md-8">
                  <p className="font_14">
                    Our qualitative and quantitative research delivers valid,
                    reliable and strategic insights — your compass for
                    navigating market trends, consumer behavior and business
                    opportunities with confidence. Unlock powerful market
                    assessment analysis and consumer insights to drive smarter
                    business decisions and fuel growth.<br></br>
                    To truly understand what drives your audiences, the right
                    research approach is essential. These are some of the market
                    research tools we use to get to the core of target audience
                    behavior and attitudes:
                  </p>

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
                          Online Surveys
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Piccadilly offers expertise in developing and
                            deploying surveys across multiple platforms,
                            including laptops, tablets, mobile devices and even
                            social media. We collaborate closely with you to
                            design questionnaires that align with project goals,
                            develop the survey instrument, select the
                            appropriate sample, and conduct statistical
                            analysis. The result is a streamlined, data-driven
                            approach to gathering primary data efficiently.
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
                          In-Depth Interviews and Focus Groups
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Piccadilly conducts both in-person and virtual focus
                            groups to explore deeper insights through moderated
                            discussions and open-ended questions. Our team
                            manages all logistics — recruitment, facilitation
                            and summary reporting — ensuring a smooth and
                            insightful process. Piccadilly’s in-depth interviews
                            provide confidential insights, particularly with
                            niche or hard-to-reach populations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item  mb-2">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button font_18 collapsed color_teal fw-semibold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Phone Surveys
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            There are times when the nature of the research
                            objectives or target demographics are better served
                            by a phone survey. This is particularly true in the
                            case where a small geography is being investigated.
                            Piccadilly can provide the framework for phone
                            surveys to be conducted in accordance with all
                            national regulations.
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
                          Mail Surveys
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Though deployed on a more limited basis, a mail
                            survey can accomplish similar goals as online or
                            phone surveys. With certain samples, such as
                            digitally adverse respondents or a smaller set of
                            targeted populations, it may be more efficient and
                            economical to use a mail survey. We provide guidance
                            for printing, incentives, distribution, data
                            collection and analysis.
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
                          Personas
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Piccadilly can provide segmentation analysis
                            (personas), which can be appended to your database
                            to learn more about audiences. Matching segments can
                            be based on physical or email addresses. It is an
                            effective technique to augment more traditional
                            market research and understand which market segments
                            offer the most growth potential.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container-fluid executive_banner services_banner">
        <div className="container">
          <div
            className="executive_col"
            dangerouslySetInnerHTML={{
              __html: serviceData?.BannerHeading || "",
            }}
          ></div>
        </div>
      </section>

      {/* <!-- start about section --> */}

      <section className="about_section d-flex align-items-center justify-content-center text-center">
        <div className="row w-100">
          <div
            className="mx-auto d-flex justify-content-center fix_width_content"
            dangerouslySetInnerHTML={{
              __html: serviceData?.Section2_Heading || "",
            }}
          ></div>
        </div>
      </section>

      {/* <!-- start services section --> */}

      <section
        className="services_section bg_cover sec_py"
        id="marketing-services"
      >
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
                  <a
                    href="javascript:void(0)"
                    className="btn btn_primary"
                    data-bs-toggle="modal"
                    data-bs-target="#team1"
                  >
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
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="3"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="4"
            ></button>
          </div>

          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            {/* Healthcare */}

            {serviceData?.Slider?.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row mx-0">
                  {/* Left Column */}
                  <div
                    className={`heading_col d-flex align-items-center px-5 team_col bg_primary ${
                      headingClassMap[item.Heading] || ""
                    }`}
                  >
                    <div className="heading_inner_col px-3 px-md-5 mx-0 mx-md-5">
                      <h3 className="font_40 fw-bold color_black">
                        {item.Heading}
                      </h3>
                      <p className="font_18 color_black py-4">
                        {item.Description}
                      </p>
                      <a
                        href={item.ButtonUrl}
                        className="btn btn_light color_black"
                      >
                        {item.ButtonLabel}
                      </a>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div
                    className={`right_content_col px-0 d-flex align-items-center team_right_col ${
                      headingRightClassMap[item.Heading] || ""
                    }`}
                  >
                    <img
                      src={`${baseUrl}${item.image?.url}`}
                      className="img-fluid w-100 h-100 object_cover"
                      alt={item.image?.alternativeText || item.Heading}
                    />
                  </div>
                </div>
              </div>
            ))}
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
