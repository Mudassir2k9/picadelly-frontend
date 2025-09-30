import { useEffect, useState, useRef } from "react";
import Slideshow from "../components/Slideshow";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [showSlideshow, setShowSlideshow] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/home?populate[Results][populate][Results_List][populate]=*&populate[Slider][populate]=*&populate[Whats_Happening][populate][Happening_List][populate]=*&populate[Company][populate]=*&populate[seo][populate]=*`
      )
      .then((res) => {
        // console.log("-----", res);
        setHomeData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching header data:", error);
      });

      const referrer = document.referrer;
        if (referrer.includes("qmlogics.com")) {
          setShowSlideshow(true);
        }
  }, []);
  
console.log(homeData);
  setTimeout(() => {
    if (window.$) {
      const $cSlider = window.$(".companies_logos_sliders");

      // If already loaded, destroy it first
      if ($cSlider.hasClass("owl-loaded")) {
        $cSlider.trigger("destroy.owl.carousel");
        $cSlider.removeClass("owl-loaded");
        $cSlider.find(".owl-stage-outer").children().unwrap();
        $cSlider.find(".owl-item").children().unwrap();
        $cSlider.find(".owl-dots.disabled").removeClass("disabled");
      }

      // Reinitialize carousel
      var isMobile = window.innerWidth < 768;

      $cSlider.owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: isMobile ? 3000 : 800,
        margin: 10,
        autoWidth: false, // false on mobile, true otherwise
        responsive: {
          0: { items: 1 },
          768: { items: 1 },
          992: { items: 1 },
          1200: { items: 1 },
        },
      });
    }
    jQuery(".parent_container_snap").removeClass("parent_container_snap");
  }, 3000);

  let lastScrollTop = 0; // previous scroll position

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    // At the very top → always remove sticky
    header.classList.remove("sticky");
  } else if (currentScroll > lastScrollTop) {
    // Scrolling DOWN → hide navbar
    header.classList.remove("sticky");
  } else {
    // Scrolling UP → show navbar
    header.classList.add("sticky");
  }

  // update last scroll position
  lastScrollTop = currentScroll;
});

  return (
    <>
    
    <title>{homeData?.seo?.metaTitle || homeData?.PageTitle}</title>
        <meta
          name="description"
          content={homeData?.seo?.metaDescription || "Default description"}
        />
        <meta name="keywords" content={homeData?.seo?.keywords || ""} />
        <link
          rel="canonical"
          href={homeData?.seo?.canonicalURL || window.location.href}
        />

        {/* OpenGraph */}
        <meta property="og:title" content={homeData?.seo?.openGraph?.ogTitle} />
        <meta
          property="og:description"
          content={homeData?.seo?.openGraph?.ogDescription}
        />
        <meta property="og:type" content={homeData?.seo?.openGraph?.ogType} />
        <meta property="og:url" content={homeData?.seo?.openGraph?.ogUrl} />
        {homeData?.seo?.metaImage?.url && (
          <meta property="og:image" content={`${baseUrl}${homeData?.seo?.metaImage?.url}`} />
        )}
    <div className="parent_slideshow">
     {showSlideshow ? (
        <Slideshow />
      ):(
        <Slideshow />
      )}
    </div>
      <style>{`
.menu-line{
      background-color: #000 !important;
}
      
      #header{
      transform: translateY(0) !important;
      }
//   body .parent_container_snap {
//   scroll-snap-type: none;
//   overflow-y: unset;
//   height: 100vh;
// }
      

`}</style>

      {/* start layered video section */}
      <section className="section2 container-sticky" id="myBox">
        <div className="video-sticky">
          <div className="video-container">
           {/* <span
              dangerouslySetInnerHTML={{
                __html: homeData?.Section2_Heading || "",
              }}
            ></span>*/}

            <video autoPlay muted controls playsinline loop className="second_video">
              <source src="images/new_compressed_reel.mp4" type="video/mp4" />
            </video>

            {/* SVG Mask */}
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
      <div className=" container-fluid banner_section"  >
        <div className="container">
          <div className="row banner-row">
            <div className="col-md-6 banner-col">
              <div
                className="inner-div"
                dangerouslySetInnerHTML={{
                  __html: homeData?.mainHeading || "",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="banner_video">

          <video autoPlay muted loop playsinline id="myVideo">
            <source src="images/home-video-cropped.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* start results section */}

      {/* <!-- start results section --> */}
      <section id="myBox1" className="">
        <div className="parallax_container">
          <div
            className="left-column d-flex align-items-center"
            dangerouslySetInnerHTML={{
              __html: homeData?.Results?.Left_Column_Heading || "",
            }}
          ></div>
          <div className="right-column">
            <section className="">
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="1.4s"
                data-wow-delay="0.1s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part"
                  dangerouslySetInnerHTML={{
                        __html: homeData?.Results?.Results_List?.slice(-6)[0]?.Heading || "",
                      }}
                  >
                    
                  </div>
                </div>
                <a href={homeData?.Results?.Results_List?.slice(-6)[0]?.Case_Study_Link}>
                  <div className="result-div-2 circle o_bg_green">
                    <div
                      dangerouslySetInnerHTML={{
                      __html: homeData?.Results?.Results_List?.slice(-6)[0]?.View_Button_Label || "",
                    }}
                    ></div>
                    <i className="fa-regular fa-arrow-right-long text-dark"></i>
                  </div>
                </a>
              </div>
            </section>
            <section className="">
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part"dangerouslySetInnerHTML={{
                        __html: homeData?.Results?.Results_List?.slice(-6)[1]?.Heading || "",
                      }}
                  >
                  </div>
                </div>
                <a href={homeData?.Results?.Results_List?.slice(-6)[1]?.Case_Study_Link}>
                  <div className="result-div-2 circle o_bg_primary">
                    <div
                      dangerouslySetInnerHTML={{
                      __html: homeData?.Results?.Results_List?.slice(-6)[1]?.View_Button_Label || "",
                    }}
                    ></div>
                    <i className="fa-regular fa-arrow-right-long text-dark"></i>
                  </div>
                </a>
              </div>
            </section>
            <section className="">
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="1.6s"
                data-wow-delay="0.3s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part"dangerouslySetInnerHTML={{
                        __html: homeData?.Results?.Results_List?.slice(-6)[2]?.Heading || "",
                      }}
                  >
                  </div>
                </div>
                <a href={homeData?.Results?.Results_List?.slice(-6)[2]?.Case_Study_Link}>
                  <div className="result-div-2 circle o_bg_yellow">
                    <div
                      dangerouslySetInnerHTML={{
                      __html: homeData?.Results?.Results_List?.slice(-6)[2]?.View_Button_Label || "",
                    }}
                    ></div>
                    <i className="fa-regular fa-arrow-right-long text-dark"></i>
                  </div>
                </a>
              </div>
            </section>
            <section className="">
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="1.7s"
                data-wow-delay="0.4s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part"dangerouslySetInnerHTML={{
                        __html: homeData?.Results?.Results_List?.slice(-6)[3]?.Heading || "",
                      }}
                  >
                  </div>
                </div>
                <a href={homeData?.Results?.Results_List?.slice(-6)[3]?.Case_Study_Link}>
                  <div className="result-div-2 circle o_bg_primary">
                    <div
                      dangerouslySetInnerHTML={{
                      __html: homeData?.Results?.Results_List?.slice(-6)[3]?.View_Button_Label || "",
                    }}
                    ></div>
                    <i className="fa-regular fa-arrow-right-long text-dark"></i>
                  </div>
                </a>
              </div>
            </section>
            <section className="">
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="1.8s"
                data-wow-delay="0.5s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part"dangerouslySetInnerHTML={{
                        __html: homeData?.Results?.Results_List?.slice(-6)[4]?.Heading || "",
                      }}
                  >
                  </div>
                </div>
                <a href={homeData?.Results?.Results_List?.slice(-6)[4]?.Case_Study_Link}>
                  <div className="result-div-2 circle o_bg_teal">
                    <div
                      dangerouslySetInnerHTML={{
                      __html: homeData?.Results?.Results_List?.slice(-6)[4]?.View_Button_Label || "",
                    }}
                    ></div>
                    <i className="fa-regular fa-arrow-right-long text-dark"></i>
                  </div>
                </a>
              </div>
            </section>

            <section className="">
              <div
                className="inner-row wow animate__zoomIn"
                data-wow-duration="1.8s"
                data-wow-delay="0.5s"
              >
                <div className="result-div-1 circle">
                  <div className="inner-part"dangerouslySetInnerHTML={{
                        __html: homeData?.Results?.Results_List?.slice(-6)[5]?.Heading || "",
                      }}
                  >
                  </div>
                </div>
                <a href={homeData?.Results?.Results_List?.slice(-6)[5]?.Case_Study_Link}>
                  <div className="result-div-2 circle o_bg_green">
                    <div
                      dangerouslySetInnerHTML={{
                      __html: homeData?.Results?.Results_List?.slice(-6)[5]?.View_Button_Label || "",
                    }}
                    ></div>
                    <i className="fa-regular fa-arrow-right-long text-dark"></i>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* start creative section */}
      <section className="d-none ">
        <div className="horizontal_parallax home_parallax">
          <div className="panel">
            <div className="row">
              <div
                className="heading_col d-flex align-items-center px-5"
                dangerouslySetInnerHTML={{
                  __html: homeData?.Slider[0]?.Left_Column_Heading || "",
                }}
              ></div>
              <div
                className="right_content_col px-5 d-flex align-items-center"
                dangerouslySetInnerHTML={{
                  __html: homeData?.Slider[0]?.Right_Column_Heading || "",
                }}
              ></div>
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
                  <span
                    dangerouslySetInnerHTML={{
                      __html: homeData?.Slider[1]?.Left_Column_Heading || "",
                    }}
                  ></span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        homeData?.Slider[1]?.Left_Column_Description || "",
                    }}
                  ></span>
                  <a
                    href={`${baseUrl}${homeData?.Slider[1]?.Left_Column_Button_Link}`}
                    className="btn_light"
                  >
                    {homeData?.Slider[1]?.Left_Column_Button_Label}
                  </a>
                </div>
              </div>
              <div className="right_content_col px-5 d-flex align-items-center right_video_col">
                <video autoPlay muted loop playsinline id="myVideo">
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
                  <span
                    dangerouslySetInnerHTML={{
                      __html: homeData?.Slider[2]?.Right_Column_Heading || "",
                    }}
                  ></span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        homeData?.Slider[2]?.Right_Column_Description || "",
                    }}
                  ></span>
                  <a
                    href={`${baseUrl}${homeData?.Slider[2]?.Right_Column_Button_Link}`}
                    className="btn_light"
                  >
                    {homeData?.Slider[2]?.Right_Column_Button_Label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* start mobile creative section */}
      <div className=" container-fluid px-0 team-section mobile-creative-section d-flex justify-content-center align-items-center d-none">
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
          </div>

          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row mx-0">
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

            <div className="carousel-item">
              <div className="row mx-0">
                <div className="heading_col d-flex align-items-center px-5">
                  <div
                    className="px-0 px-md-5 mx-3 mx-md-5 text-start wow animate__fadeInDownBig"
                    data-wow-duration="1s"
                    data-wow-delay="0.3s"
                  >
                    <h1 className="fw-bold text-white text-start font_40">
                      Valley Children's
                    </h1>
                    <h2 className="fw_300 text-white text-start py-4">
                      Specialized Care that
                      <br /> Truly Cares and HKHF
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

            <div className="carousel-item">
              <div className="row mx-0">
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
                      The Premier <br /> Business Bank.
                    </h2>
                    <a
                      href="javascript:void(0)"
                      className="btn_light color_teal"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className=" mobile_slider">
        <div className="mobile_slider_left_heading">
          <h3 className="text-white fw-bold large_heading">Company</h3>
        </div>
        <div className="mobile_slider_right_heading">
          <h3 className="text-white fw-bold large_heading">
            We Keep<span className="color_primary">.</span>
          </h3>
        </div>
        <div className="container marquee-container">
          <div
            className="owl-carousel owl-theme companies_logos_slider marquee-content "
            direction="up"
            loop="1"
          >
            {Array.from({ length: 130 }, (_, i) => homeData?.Company?.Logos[i % homeData.Company.Logos.length])
            .reduce((rows, logo, index) => {
              if (index % 4 === 0) rows.push([]);
              rows[rows.length - 1].push(logo);
              return rows;
            }, [])
            .map((group, i) => (
              <div className="item marquee-item" key={i}>
                {group.map((logo, j) => (
                  <img
                    key={j}
                    src={`${baseUrl}${logo?.url}`}
                  />
                ))}
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Happening-section */}
      <div className=" container-fluid happening_section pb-5 position-relative">
        <div className="container">
          <span
            dangerouslySetInnerHTML={{
              __html: homeData?.Whats_Happening?.Heading || "",
            }}
          ></span>
          <div className="row happening-row">
            <div
              className="circle white-div wow animate__fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div className="inner-col">
                <h5>{homeData?.Whats_Happening?.Happening_List[0]?.Title}</h5>
                <p>
                  <a
                    href={`${baseUrl}${homeData?.Whats_Happening?.Happening_List[0]?.Happening_List[0]?.link}`}
                  >
                    {
                      homeData?.Whats_Happening?.Happening_List[0]
                        ?.Happening_List[0]?.text
                    }
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
                <h5>{homeData?.Whats_Happening?.Happening_List[1]?.Title}</h5>
                <p>
                  <a
                    href={`${baseUrl}${homeData?.Whats_Happening?.Happening_List[1]?.Happening_List[0]?.link}`}
                  >
                    {
                      homeData?.Whats_Happening?.Happening_List[1]
                        ?.Happening_List[0]?.text
                    }
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </p>
                <p>
                  <a
                    href={`${baseUrl}${homeData?.Whats_Happening?.Happening_List[1]?.Happening_List[1]?.link}`}
                  >
                    {
                      homeData?.Whats_Happening?.Happening_List[1]
                        ?.Happening_List[1]?.text
                    }
                    {/* <i className="fa-regular fa-arrow-right-long"></i> */}
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
                <h5>{homeData?.Whats_Happening?.Happening_List[2]?.Title}</h5>
                <ul>
                  <li>
                    <a
                      href={`${baseUrl}${homeData?.Whats_Happening?.Happening_List[2]?.Happening_List[0]?.link}`}
                      className="color_black"
                    >
                      {
                        homeData?.Whats_Happening?.Happening_List[2]
                          ?.Happening_List[0]?.text
                      }
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${baseUrl}${homeData?.Whats_Happening?.Happening_List[2]?.Happening_List[1]?.link}`}
                      className="color_black"
                    >
                      {
                        homeData?.Whats_Happening?.Happening_List[2]
                          ?.Happening_List[1]?.text
                      }
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${baseUrl}${homeData?.Whats_Happening?.Happening_List[2]?.Happening_List[2]?.link}`}
                      className="color_black"
                    >
                      {
                        homeData?.Whats_Happening?.Happening_List[2]
                          ?.Happening_List[2].text
                      }
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="happening_video" id="myVideo">
          <video autoPlay playsinline muted loop>
            <source src="images/happening-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Home;
