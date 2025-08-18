import React from "react";

const ContactUs = () => {
  return (
    <>
      {/* <!------contact-banner------> */}

      <div className="container-fluid px-0 bg_cover contact-banner">
        <div className="row mx-0">
          <div className="col-md-6 contact-col bg_cover d-flex align-items-center justify-content-end px-4">
            <h3 className="text-white fw_500 text-end">
              Let's Shake
              <br /> Things Up
            </h3>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center px-5 form-col pt-5 pb-5">
            <div className="form-inner-div pt-5 pb-5 px-3 mt-5">
              <h5 className="text-dark fw-bold font_18">
                Time to Make an impact
              </h5>
              <p>
                We want to know more — your goals, aspirations and what makes
                you great. Contact us using the following form.
              </p>
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    WHAT'S YOUR NAME?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                  />
                </div>

                <div className="mb-3">
                  <label for="company" className="form-label">
                    WHAT COMPANY DO YOU WORK FOR?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    placeholder="Company Name"
                  />
                </div>

                <div className="mb-3">
                  <label for="email" className="form-label">
                    HOW CAN WE REACH YOU?
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>

                <div className="mb-3">
                  <label for="phone" className="form-label">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="mb-3">
                  <label for="message" className="form-label">
                    WHAT CAN WE HELP WITH?
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-submit btn_primary mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!------Locations-section------> */}

      <div className="container-fluid locations-section pt-5 pb-5 d-flex justify-content-center px-0">
        <div className="container">
          <div className="row pt-5 mx-0 contact-row">
            <div className="col-md-6 locations-heading">
              <h3 className="fw_600 text-white font_40">Our Locations</h3>
            </div>
            <div className="col-md-6 locations-heading locations-heading-2">
              <div className="connect">
                <h3 className="fw_600 text-white font_40">Connect With Us</h3>
                <p className="font_18 fw_500 text-dark">
                  hello@piccadilly.com
                </p>
              </div>
            </div>
          </div>
          <div className="row footer-row-2 locations_row pt-5 pb-3 mx-0">
            <div className="col-md-2 footer-col footer-col-1">
              <div className="mb-3">
                <img src="images/location-1.png" />
              </div>
              <h5>Piccadilly HQ</h5>
              <ul>
                <li>2700 Camino Ramon</li>
                <li>Suite 350</li>
                <li>San Ramon</li>
                <li>California 94583</li>
              </ul>
            </div>
            <div className="col-md-2 footer-col footer-col-1">
              <div className="mb-3">
                <img src="images/location-2.png" />
              </div>
              <h5>San Francisco</h5>
              <ul>
                <li>44 Montgomery Street</li>
                <li>Suite 3000</li>
                <li>San Francisco</li>
                <li>California 94104</li>
              </ul>
            </div>
            <div className="col-md-2 footer-col footer-col-1">
              <div className="mb-3">
                <img src="images/location-3.png" />
              </div>
              <h5>Vancouver</h5>
              <ul>
                <li>999 W Hastings Street</li>
                <li>Suite 1250</li>
                <li>Vancouver, BC,</li>
                <li>V6C 1M3</li>
              </ul>
            </div>
            <div className="col-md-2 footer-col footer-col-1">
              <div className="mb-3">
                <img src="images/location-4.png" />
              </div>
              <h5>Los Angeles</h5>
              <ul>
                <li>11766 Wilshire Blvd.</li>
                <li>9th Floor</li>
                <li>Los Angeles</li>
                <li>California 90025</li>
              </ul>
            </div>
            <div className="col-md-2 footer-col footer-col-1">
              <div className="mb-3">
                <img src="images/location-5.png" />
              </div>
              <h5>Dallas</h5>
              <ul>
                <li>15950 Dallas Parkway</li>
                <li>Suite 600</li>
                <li>Dallas</li>
                <li>Texas 75248</li>
              </ul>
            </div>
            <div className="col-md-2 footer-col footer-col-1">
              <div className="mb-3">
                <img src="images/location-6.png" />
              </div>
              <h5>Denver</h5>
              <ul>
                <li>999 18th Street</li>
                <li>Suite 3300</li>
                <li>Denver</li>
                <li>Colorado 80202</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
