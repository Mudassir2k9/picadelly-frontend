import { useEffect, useState, useRef } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/about?populate[PicadellyTeam][populate]=*&populate[Section2][populate]=*&populate[ImagesSlider][populate]=*`
      )
      .then((res) => {
        setAboutData(res.data.data);

        // Delay initialization slightly
        setTimeout(() => {
          if (window.$ && sliderRef.current) {
            const $slider = window.$(sliderRef.current);

            if ($slider.hasClass("owl-loaded")) {
              $slider.trigger("destroy.owl.carousel");
              $slider.removeClass("owl-loaded");
              $slider.find(".owl-stage-outer").children().unwrap();
              $slider.find(".owl-item").children().unwrap();
              $slider.find(".owl-dots.disabled").removeClass("disabled");
            }

            $slider.owlCarousel({
              loop: true,
              nav: false,
              autoplay: true,
              autoplayTimeout: 3000,
              autoplaySpeed: 800,
              margin: 10,
              responsive: {
                0: { items: 1 },
                1200: { items: 1 },
              },
            });

             // Background toggle using class
              $slider.on("changed.owl.carousel", function (event) {
                const current = $(event.target)
                  .find(".owl-item")
                  .eq(event.item.index)
                  .find(".item");

                if (current.hasClass("Piccadilly")) {
                  $(".about_row .about_right_content_col")
                    .removeClass("default-bg")
                    .addClass("transparent-bg");
                } else {
                  $(".about_row .about_right_content_col")
                    .removeClass("transparent-bg")
                    .addClass("default-bg");
                }
              });

          }
        }, 1000);
      })

      .catch((error) => {
        console.error("Error fetching about data:", error);
      });
  }, []);

  setTimeout(() => {
    if (window.$) {
      const $cSlider = window.$(".c_slider");

      if ($cSlider.hasClass("owl-loaded")) {
        $cSlider.trigger("destroy.owl.carousel");
        $cSlider.removeClass("owl-loaded");
        $cSlider.find(".owl-stage-outer").children().unwrap();
        $cSlider.find(".owl-item").children().unwrap();
        // $cSlider.find(".owl-dots.disabled").removeClass("disabled");
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
  }, 5000);

  console.log(aboutData);
  window.addEventListener("load", function () {
    setTimeout(function () {
      document
        .querySelectorAll(".culture_section .col-md-7 p.color_black")
        .forEach((p) => {
          p.innerHTML = p.innerHTML.replace(
            "measurable results.",
            "measurable results.</br>" 
          );
        });
    }, 2000); // 2000 ms = 2 seconds

  });

  return (
    <>
      <style>{`
      .about_row .about_right_content_col.transparent-bg {
        background: transparent !important;
      }
        .piccadilly-style {
  font-size: 98pt !important;
  font-weight: 700 !important;
  color: black !important;
}
      .menu-line{
      background-color: #000 !important;
}
      @media only screen and (max-width: 576px) {
       .hamburger i {
    color: #fff !important;
  }
  }
`}</style>
      {/* <!-- team modals --> */}
      {aboutData?.PicadellyTeam?.map((member) => {
        const {
          id,
          FirstName,
          LastName,
          Portfolio,
          Description,
          ProfileImage,
          Contact,
        } = member;

        const fullName = `${FirstName} ${LastName}`;
        const imgSrc = ProfileImage?.url
          ? `${baseUrl}${ProfileImage.url}`
          : "/default.jpg";

        return (
          <div
            className="modal fade team_popup"
            id={`team${id}`}
            key={`modal-${id}`}
            tabIndex="-1"
            aria-labelledby={`modalLabel-${id}`}
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
                      <img src={imgSrc} alt={fullName} className="img-fluid" />
                      <h5 className="text-dark fw-bold pt-3">{fullName}</h5>
                      <p>{Portfolio}</p>
                      <p className="team_contacts">
                        {Contact?.map((contact, i) => (
                          <a
                            key={i}
                            href={
                              contact.platform === "Email"
                                ? `mailto:${contact.url}`
                                : contact.platform === "Phone"
                                ? `tel:${contact.url}`
                                : contact.url
                            }
                            className="me-2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {contact.platform === "LinkedIn" && (
                              <i className="fa-brands fa-linkedin-in"></i>
                            )}
                            {contact.platform === "Email" && (
                              <i className="fa-solid fa-envelope"></i>
                            )}
                            {contact.platform === "Phone" && (
                              <i className="fa-solid fa-phone"></i>
                            )}
                          </a>
                        ))}
                      </p>
                    </div>
                    <div className="col-md-8">
                      <p className="font_14" style={{ whiteSpace: "pre-line" }}>
                        {Description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

{/*      <section className="container-fluid executive_banner about_banner">
        <div className="container">
          <div className="executive_col">
            <h2
              className="large_heading_2 text-center text-dark fw_300 wow animate__fadeInDownBig"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              {aboutData?.MainHeading1}
              <span className="fw-bold"> {aboutData?.MainHeading2} </span>
            </h2>
          </div>
        </div>
      </section>*/}

      {/* <!-- start about section --> */}

      <section className="about_section container-fluid executive_banner about_banner px-0" id="We-are-Picadilly">
        <div className="about_row row mx-0">
          <div className="about_heading_col d-flex align-items-end align-items-md-center justify-content-center justify-content-md-end overflow-hidden">
            <h1
              className="large_heading px-0 text-center text-md-start wow animate__fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              {aboutData?.Section2.Text}
            </h1>
          </div>
          <div className="about_right_content_col px-0 transparent-bg">
            {/* <div className="about_text">
             <h4 className="large_heading text-white ps-5 pe-5 text-center text-md-start pt-4 pt-md-0">
              A Refreshing Alternative
                  </h4>
          </div>
           <div className="about_text">
             <h4 className="large_heading text-white ps-5 pe-5 text-center text-md-start pt-4 pt-md-0">
              A Refreshing Alternative
                  </h4>
          </div>
           <div className="about_text">
             <h4 className="large_heading text-white ps-5 pe-5 text-center text-md-start pt-4 pt-md-0">
              A Refreshing Alternative
                  </h4>
          </div> */}
            <div
              className="owl-carousel owl-theme about_slider px-0 mx-0"
              ref={sliderRef}
            >
              {aboutData?.Section2?.slidingText?.map((item) => (
               <div className={`item ${item.Text}  `} key={item.id}>
                  <h4 className={`large_heading text-white ps-5 pe-5 text-center text-md-start pt-4 pt-md-0 ${item.Text === "Piccadilly" ? "piccadilly-style" : ""} `}
                   
                  >
                    {item.Text}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- start team section --> */}
      <section className="team_section meet_team">
        <div className="row mx-0">
          <div className="heading_col d-flex align-items-center px-5 team_col">
            <div className="px-3 px-md-5 mx-0 mx-md-5">
              <h3
                className="font_40 fw-bold color_primary wow animate__slideInLeft text-start"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                 {aboutData?.TeamSectionHeading}
              </h3>
              <p className="font_18 text-dark">
                {aboutData?.TeamSectionDescription}
              </p>
            </div>
          </div>
          <div className="right_content_col px-5 d-flex align-items-center team_right_col"></div>
        </div>
      </section>
      <section
        className="horizontal_parallax team_section d-none"
            
      >
        {/* <div className="panel">
          <div className="row">
            <div className="heading_col d-flex align-items-center px-5 team_col">
              <div className="px-3 px-md-5 mx-0 mx-md-5">
                <h3
                  className="font_40 fw-bold color_primary wow animate__slideInLeft text-start"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  {aboutData?.TeamSectionHeading}
                </h3>
                <p className="font_18 text-dark">
                  {aboutData?.TeamSectionDescription}
                </p>
              </div>
            </div>
            <div className="right_content_col px-5 d-flex align-items-center team_right_col"></div>
          </div>
        </div> */}
        {aboutData?.PicadellyTeam?.map((member, index) => {
          const {
            FirstName,
            LastName,
            Portfolio,
            TagLine,
            LeftImage,
            RightImage,
          } = member;

          const leftImgUrl = LeftImage?.url
            ? `${baseUrl}${LeftImage.url}`
            : "/default-left.jpg";
          const rightImgUrl = RightImage?.url
            ? `${baseUrl}${RightImage.url}`
            : "/default-right.jpg";

          return (
            <div className="panel" key={index}>
              <div className="team_overlay">
                <a
                  href="javascript:void(0)"
                  className="text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target={`#team${member.id}`} // Unique target
                >
                  <div className="team_circle text-center d-flex align-items-center justify-content-center">
                    <div>
                      <h3 className="text-dark fw-bold team_name font_40">
                        {FirstName}
                      </h3>
                      <h4 className="text-dark fw-bold team_last_name">
                        {LastName}
                      </h4>
                      <p className="team_post text-dark text-center">
                        {Portfolio}
                      </p>
                      <p className="text-dark text-center">{TagLine}</p>
                      <i className="fa-solid fa-circle-user text-dark"></i>
                    </div>
                  </div>
                </a>
              </div>

              <div className="row">
                <div className="heading_col d-flex align-items-end justify-content-center px-5 left_member_col bg_teal">
                  <img src={leftImgUrl} alt={`${FirstName} Left`} />
                </div>
                <div className="right_content_col d-flex align-items-end justify-content-center px-0 right_member_col">
                  <img
                    src={rightImgUrl}
                    className="img-fluid w-100"
                    alt={`${FirstName} Right`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* //for mobile view */}

      {/* <!-- team modals for mobile --> */}
      <div
        className="modal fade team_popup "
        id="m-team2"
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
                  <img src="images/pop-up-craig.png" />
                  <h5 className="text-dark fw-bold pt-3">Craig Brown</h5>
                  <p>Chief Digital Officer</p>
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
                    Craig is a seasoned advertising and marketing leader with
                    over 30 years of experience working with C-level executives
                    and brand specialists to deliver performance-driven digital
                    advertising. Widely recognized for his innovative thinking
                    and strong technical acumen, Craig has spent the past decade
                    at the forefront of digital transformation, helping brands
                    harness data, driving programmatic platforms and employing
                    the latest advances in artificial intelligence to drive
                    measurable growth. Craig leads Piccadilly’s digital
                    marketing team, applying emerging technologies to deliver
                    highly efficient, ROI-focused campaigns. Outside of work,
                    Craig is a passionate cyclist who brings the same focus,
                    endurance and drive from the road into his leadership and
                    strategic thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- team modals for mobile --> */}
      <div
        className="modal fade team_popup "
        id="m-team1"
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

      {/* <!----about-mobile-slider-section----> */}

        <div className="container-fluid px-0 team-section mobile-creative-section about-mobile-slider d-flex justify-content-center d-flex align-items-center" id="team-leaders">
        {/* <!-- Carousel --> */}
        <div
          id="demo"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
         

          {/* <!-- The slideshow/carousel --> */}
          <div className="carousel-inner">
  {aboutData?.PicadellyTeam?.map((member, index) => {
    const {
      FirstName,
      LastName,
      Portfolio,
      TagLine,
      LeftImage,
      RightImage,
    } = member;

    const leftImgUrl = LeftImage?.url
      ? `${baseUrl}${LeftImage.url}`
      : "/default-left.jpg";
    const rightImgUrl = RightImage?.url
      ? `${baseUrl}${RightImage.url}`
      : "/default-right.jpg";

    return (
      <div
        className={`carousel-item ${index === 0 ? "active" : ""}`} // ✅ make first active
        key={index}
        data-bs-interval="10000"
      >
        <div className="carousel-inner-div">
          <div className="team_overlay">
            <a
              href="javascript:void(0)"
              className="text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target={`#team${member.id}`}
            >
              <div className="team_circle text-center d-flex align-items-center justify-content-center">
                <div>
                  <h3 className="text-dark fw-bold team_name font_40">
                    {FirstName}
                  </h3>
                  <h4 className="text-dark fw-bold team_last_name">
                    {LastName}
                  </h4>
                  <p className="team_post text-dark text-center">
                    {Portfolio}
                  </p>
                  <p className="text-dark text-center">{TagLine}</p>
                  <i className="fa-solid fa-circle-user text-dark"></i>
                </div>
              </div>
            </a>
          </div>

          <div className="row mx-0">
            <div className="heading_col d-flex align-items-end wow animate__slideInUp justify-content-center px-5 left_member_col bg_teal"  data-wow-duration="0.6s" data-wow-delay="0.1s">
            
              <img src={leftImgUrl} alt={`${FirstName} Left`} />
            </div>
            <div className="right_content_col d-flex align-items-end wow animate__slideInDown justify-content-center px-0 right_member_col"  data-wow-duration="0.6s" data-wow-delay="0.1s">
              <img
                src={rightImgUrl}
                className="img-fluid w-100"
                alt={`${FirstName} Right`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>




  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
          
        </div>
      </div>

      {/* //for mobile view */}

      {/* <!-- start culture section --> */}
      <section className="culture_section bg_cover" id="our-culture">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-7">
              <h3 className="color_black fw-bold pb-2">
                {aboutData?.InfoHeading1}
              </h3>
              <p className="color_black">{aboutData?.InfoDescription1}</p>
            </div>
            <div className="col-md-5">
              <h3 className="color_black fw-bold pb-2">
                {aboutData?.InfoHeading2}
              </h3>
              <p className="color_black">{aboutData?.InfoDescription2}</p>
            </div>
          </div>
        </div>
        <div className="overflow_slider py-5">
       <div className="overflow_slider_inner">
           <img src="images/c-img1.jpg"></img>
           <img src="images/c-img2.jpg"></img>
           <img src="images/c-img3.jpg"></img>
           <img src="images/c-img4.jpg"></img>
            <img src="images/c-img1.jpg"></img>
           <img src="images/c-img2.jpg"></img>
           <img src="images/c-img3.jpg"></img>
           <img src="images/c-img4.jpg"></img>
        </div>
          {/* <div className="owl-carousel owl-theme c_slider">
            {aboutData?.ImagesSlider?.Images?.map((item, index) => (
              <div className="item" key={index}>
                <img
                  src={`${baseUrl}${item.url}`}
                  alt={`Slide ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default About;
