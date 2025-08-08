import React from "react";

const Buzz = () => {
  return (
    <>
      <div className="container-fluid buzz-banner bg-light pb-5 px-0 py-0">
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
          <h1 className="large_heading text-center text-black position-absolute top-50 start-50 translate-middle">
            <strong>Piccadilly </strong>Buzz
          </h1>
        </div>
      </div>

      <section className="culture_section announcement-section">
        <div className="container">
          <div className="row pt-5">
            <h2>Announcements</h2>
            <h2 className="text-white pt-2 pb-5">
              Fixing the Fracture: Rebuilding Patient Trust
            </h2>
            <div className="col-md-7 col-sm-12">
              <p className="text-white">
                A new, nationwide survey conducted by AMF Media Group (now
                Piccadilly), in partnership with Armanino, leaders in healthcare
                consulting, and the Medical Group Management Association (MGMA),
                the nation's largest association focused on the business of
                medical practice management, reveals telling insights into the
                growing dichotomy of Americans' trust in healthcare, where and
                why it breaks down, and how it can be rebuilt. <br />
                <br />
                Based on responses from 2,400 adults across diverse
                socioeconomic backgrounds, the full report: Fixing the Fracture:
                Rebuilding Patient Trust, sheds light on the primary drivers of
                distrust, with an important focus on often-overlooked trust gaps
                tied to race and access. <br />
                <br />
                While national trust in the U.S. healthcare system continues to
                erode, the 'bedside caregiver' is the most credible messenger —
                doctors, nurses, and other frontline staff. Improving trust in
                our system cannot solely rest on the shoulders of healthcare
                employees. Now that we have firsthand data from patients
                themselves telling our industry what matters most, it's an
                invaluable perspective that can lead to change.
              </p>
            </div>
            <div className="col-md-5 col-sm-12">
              <p className="text-white">
                <b>
                  “Just as a doctor looks at a patient's holistic diagnostics,
                  we must do the same for our industry," says Joe Denneny,
                  Research Director at AMF. "This survey fills a critical gap in
                  understanding the lived experiences of patients. We designed
                  this research to give healthcare systems the insights they
                  need to realign services, improve communication, and rebuild
                  credibility, especially with the patients they risk leaving
                  behind.”
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className="overflow_slider py-5">
          <div className="owl-carousel owl-theme c_slider">
            <div className="item col-sm-12">
              <img src="images/announcement-1 .jpg" />
            </div>
            <div className="item col-sm-12">
              <img src="images/announcement-2 .jpg" />
            </div>
            <div className="item col-sm-12">
              <img src="images/announcement-3.jpg" />
            </div>
            <div className="item col-sm-12">
              <img src="images/announcement-1 .jpg" />
            </div>
            <div className="item col-sm-12">
              <img src="images/announcement-2 .jpg" />
            </div>
            <div className="item col-sm-12">
              <img src="images/announcement-3.jpg" />
            </div>
            <div className="item col-sm-12">
              <img src="images/announcement-1 .jpg" />
            </div>
            <div className="item col-sm-12">
              <img src="images/announcement-2 .jpg" />
            </div>
            <div className="item col-sm-12">
              <img src="images/announcement-3.jpg" />
            </div>
          </div>
        </div>
      </section>
      <section className="team_section bg_cover py-0">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 bg-light team-item">
            <h2 className="color_primary ">Team in Action</h2>
            <p className="">
              Piccadilly team members, along with our parent company Armanino,
              once again participated in our annual "Great Give" community
              outreach event. During one day in May, each employee takes the day
              to help in their communities — either with their teammates,
              virtually, or individually for our remote workforce. This year,
              2,600 team members from the U.S., India, and Canada volunteered
              17,680 hours in a single day, supporting organizations in 108
              communities near our offices and 38 hometowns. We're proud of our
              team for stepping away from their day-to-day work to give back and
              be part of something bigger than themselves. <br />
              <br />
              Thank you to the 150+ organizations that welcomed us. We're
              grateful for the opportunity to make a meaningful impact together.
              Seventeen years strong, and the impact keeps growing!
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-12 px-0 ">
            <img
              src="images/Group 222.jpg"
              alt="team"
              width="100%"
              height="700px"
            />
          </div>
        </div>
      </section>

      <section className="culture_section bg_cover">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-12">
              <h2 className="text-white py-5 text-start">
                Awards & Recognition
              </h2>
            </div>

            {/* Column 1 */}
            <div className="col-lg-3 col-md-6 col-12 mb-5">
              <img
                src="/images/Group 218.svg"
                alt="AVA Digital Awards"
                width="200px"
                height="200px"
              />
              <h5 className="py-3 text-start">
                <b>AVA Digital Awards</b>
              </h5>
              <h6 className="text-white text-start">
                Platinum Award (Nonprofit)
              </h6>
              <ul>
                <li className="text-white lists">
                  Impact Teen Drivers: “Alana's Story” True Story Video
                </li>
              </ul>
              <h6 className="text-white text-start">Gold Award (Healthcare)</h6>
              <ul>
                <li className="text-white lists">
                  Roots Community Health: “Real Talk” Campaign & PSA
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col-lg-3 col-md-6 col-12 mb-5">
              <img
                src="/images/Group 219.svg"
                alt="Telly Awards"
                width="200px"
                height="200px"
              />
              <h5 className="py-3 text-start">
                <b>Telly Awards</b>
              </h5>
              <h6 className="text-white text-start">Gold People’s Telly</h6>
              <ul>
                <li className="text-white lists">
                  Roots Community Health: “Unlock Mental Wellness with
                  #RealTalk”
                </li>
              </ul>
              <h6 className="text-white text-start">
                Silver Regional TV (Use of Stock)
              </h6>
              <ul>
                <li className="text-white lists">
                  County of Santa Clara Behavioral Health System: “Fentanyl, Any
                  One Can Die”
                </li>
              </ul>
              <h6 className="text-white text-start">
                Silver Regional TV (Public Service & PSA)
              </h6>
              <ul>
                <li className="text-white lists">
                  Valley Children’s Healthcare: “Healthy Kids. Healthy Futures.”
                  Mental Health Campaign
                </li>
              </ul>
              <h6 className="text-white text-start">
                Silver Regional TV (Public Service & PSA)
              </h6>
              <ul>
                <li className="text-white lists">
                  Valley Children’s Healthcare: “Healthy Kids. Healthy Futures.”
                  Physical Health Campaign
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-lg-3 col-md-6 col-12 mb-5">
              <img
                src="/images/Group 220.png"
                alt="ADDY Awards"
                width="200px"
                height="200px"
              />
              <h5 className="py-3 text-start">
                <b>American Advertising Awards; ADDY Awards</b>
              </h5>
              <h6 className="text-white text-start">Silver</h6>
              <ul>
                <li className="text-white lists">
                  San Luis Obispo Museum of Modern Art: “AWAKEN” Campaign & TV
                  Commercial
                </li>
                <li className="text-white lists">
                  SESLOC Credit Union: “Today. Tomorrow. Together.” TV
                  Commercial
                </li>
                <li className="text-white lists">
                  Natividad Healthcare: “Inspiring Healthy Lives,” Magazine
                </li>
              </ul>
              <h6 className="text-white text-start">Bronze</h6>
              <ul>
                <li className="text-white lists">
                  Visit Visalia: Logo & Brand Redesign
                </li>
                <li className="text-white lists">
                  Impact Teen Drivers: “Reckless & Distracted Driving” Campaign
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-lg-3 col-md-6 col-12 mb-5">
              <img
                src="/images/Group 221.svg"
                alt="American Advertising Federation"
                width="200px"
                height="200px"
                style={{ display: "block", margin: "0 auto" }}
              />
              <h5 className="py-3 text-start">
                <b>American Advertising Federation</b>
              </h5>
              <h6 className="text-white text-start">Best of Show & Gold</h6>
              <ul>
                <li className="text-white lists">
                  City of San Luis Obispo Tourism: “Be Inspired Here” Campaign
                </li>
              </ul>
              <h6 className="text-white text-start">Gold</h6>
              <ul>
                <li className="text-white lists">
                  San Luis Obispo County Farmers Market Association: Logo &
                  Brand Identity
                </li>
              </ul>
              <h6 className="text-white text-start">Silver</h6>
              <ul>
                <li className="text-white lists">
                  Cal Poly College of Architecture and Environmental Design:
                  “Connections” Magazine
                </li>
              </ul>
              <h6 className="text-white text-start">Bronze</h6>
              <ul>
                <li className="text-white lists">
                  Valley Children’s Healthcare: Impact Report
                </li>
                <li className="text-white lists">
                  Sierra Vista (now Adventist Health): “Birth Center” Campaign
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Buzz;
