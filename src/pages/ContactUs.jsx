import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/contact-us?populate[Locations][populate][all_locations][populate]=*`
      )
      .then((res) => {
        // console.log("-----", res);
        setContactData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching header data:", error);
      });
  }, []);
  console.log(contactData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/contact-forms`, {
        data: {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      });
      setStatus("Form submitted successfully!");
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <style>{`
    .navbar-brand p{
      color:#fff !important;
    }
      @media only screen and (max-width: 576px) {
       .hamburger i {
    color: #fff !important;
  }
      }
`}</style>
      {/* <!------contact-banner------> */}

      <div className="container-fluid px-0 bg_cover contact-banner">
        <div className="row mx-0">
          <div className="col-md-6 contact-col bg_cover d-flex align-items-center justify-content-end px-4">
            <span
              dangerouslySetInnerHTML={{ __html: contactData?.Heading }}
            ></span>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center px-5 form-col pt-5 pb-5">
            <div className="form-inner-div pt-5 pb-5 px-3 mt-5">
              <span
                dangerouslySetInnerHTML={{ __html: contactData?.Form_Heading }}
              ></span>
              <span
                dangerouslySetInnerHTML={{
                  __html: contactData?.Form_Description,
                }}
              ></span>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    WHAT'S YOUR NAME?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.company}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-submit btn_primary mt-2"
                >
                  Submit
                </button>
                {status && <p className="mt-2">{status}</p>}
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
              <h3 className="fw_600 text-white font_40">
                {contactData?.Locations.Heading}
              </h3>
            </div>
            <div className="col-md-6 locations-heading locations-heading-2">
              <div className="connect">
                <h3 className="fw_600 text-white font_40">
                  {contactData?.Contact_Heading}
                </h3>
                <p className="font_18 fw_500 text-dark">{contactData?.Email}</p>
              </div>
            </div>
          </div>
          <div className="row footer-row-2 locations_row pt-5 pb-3 mx-0">
            {contactData?.Locations?.all_locations?.map((location, index) => (
              <div key={index} className="col-md-2 footer-col footer-col-1">
                <div className="mb-3">
                  <img
                    src={`${baseUrl}${location?.image?.url}`}
                    alt={location?.name}
                  />
                </div>
                <h5>{location?.name}</h5>
                <ul>
                  <li>{location?.address?.[0]?.street}</li>
                  <li>{location?.address?.[0]?.officeLocation}</li>
                  <li>{location?.address?.[0]?.city}</li>
                  <li>{location?.address?.[0]?.state}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
