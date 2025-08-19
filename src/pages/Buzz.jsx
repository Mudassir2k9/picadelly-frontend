import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const Buzz = () => {
  const [buzzData, setBuzzData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/buzz?populate[Announcement][populate]=*&populate[Team_Action][populate]=*&populate[Awards][populate][All_Awards][populate]=Image`
      )
      .then((res) => {
        // console.log("-----", res);
        setBuzzData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching header data:", error);
      });
  }, []);
  console.log(buzzData);

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
  }, 5000); // small delay to allow DOM to render

  return (
    <>

    <style>{`
  .hamburger i {
    color: #fff !important;
  }
`}</style>
      <div className="container-fluid buzz-banner pt-5 px-0 bg_cover">
        <div
          className="container buzz_col mt-0 d-flex flex-column align-items-center justify-content-center position-relative"
          style={{ height: "400px" }}
        >
          <img
            src="/images/buzz-ring.svg"
            alt="buzz_banner"
            height="400"
            width="400"
            className="img-fluid"
          />
          <h1
            className="large_heading text-center text-light position-absolute w-100"
            dangerouslySetInnerHTML={{
              __html: buzzData?.BannerHeading || "",
            }}
          ></h1>
        </div>
      </div>
          <section className="team_section bg_cover py-0">
        <div className="row w-auto mx-0 team_row">
          <div className="col-lg-6 col-md-12 col-12 px-0 ">
            <img
              src={`${baseUrl}${buzzData?.Team_Action?.Image.url}`}
              alt="team"
              width="100%"
            />
          </div>
           <div className="col-lg-6 col-md-12 col-12 bg-light team-item">
            <h2 className="color_primary fw-bold pb-3 ">{buzzData?.Team_Action?.Heading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: buzzData?.Team_Action?.Description || "",
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className="culture_section announcement-section bg_cover">
        <div className="container">
          <div className="row pt-5 w-auto mx-0">
            <h2 className="culture-heading color_primary">{buzzData?.Announcement?.Heading1}</h2>
            <h2 className="text-dark pt-2 pb-5">
              {buzzData?.Announcement?.Heading2}
            </h2>
            <div
              className="col-md-7 col-sm-12 text-dark announcement_para"
              dangerouslySetInnerHTML={{
                __html:
                  buzzData?.Announcement?.Announcement_Description_1 || "",
              }}
            ></div>
            <div
              className="col-md-5 col-sm-12 text-dark announcement_para"
              dangerouslySetInnerHTML={{
                __html:
                  buzzData?.Announcement?.Announcement_Description_2 || "",
              }}
            ></div>
          </div>
        </div>
        <div className="overflow_slider py-5">
          <div className="owl-carousel owl-theme c_slider">
            {buzzData?.Announcement?.Images?.map((img, index) => (
              <div className="item col-sm-12" key={img.id || index}>
                <img
                  src={`${baseUrl}${img.url}`}
                  alt={img.alternativeText || `Announcement Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  

      <section className="culture_section awards_section bg_cover px-0">
        <div className="container">
          <div className="row pt-5 pb-5 mx-0">
            <div className="col-12">
              <h2 className="color_primary culture-heading py-5 text-start">
                {buzzData?.Awards?.Heading}
              </h2>
            </div>

            {/* Column 1 */}
            {buzzData?.Awards?.All_Awards?.map((award) => (
              <div key={award.id} className="col-lg-3 award-col col-md-6 col-12 mb-5">
                <div className="text-center buzz_img text-md-start"><img
                  src={`${baseUrl}${award.Image?.url}`}
                  alt={
                    award.Image?.alternativeText || award.Title || "Award Image"
                  }
                  width="250px"
                  height="250px"
                />
                </div>
                <h5 className="py-3 text-start">
                  <b>{award.Title}</b>
                </h5>
                <span dangerouslySetInnerHTML={{ __html: award.Description }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Buzz;
