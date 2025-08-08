import React from "react";

const BlogDetail = () => {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row banner-row mx-0">
          <div className="col-md-8 case_study-col-1 blog_col-1 px-5 pb-5">
            <div className="inner-div px-4">
              <p className="font_20">BLOG POST</p>
              <h2
                className="color_primary fw_600"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <span className="text-dark fw_500">
                  Navigating Leadership Change:
                </span>
                <br /> Why Every CEO Transition Needs a Communications Strategy?
              </h2>
            </div>
          </div>
          <div className="col-md-4 banner-col blog_col-1 case_study-col-1 px-5 pb-5">
            <div className="inner-div d-flex" style={{ width: "100%" }}>
              <div className=" d-flex justify-content-center">
                <div className="list-inner">
                  <p className="fw_600">SHARE THIS:</p>
                  <ul className="blog_icon_col d-flex justify-content-between">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-----blog-banner-section-----> */}

      <div className="container-fluid blog_banner bg_cover px-0">
        <div className="row mx-0">
          <div className="col-md-4 empty-overlay"></div>
          <div className="col-md-8"></div>
        </div>
      </div>

      {/* <!-----blog-detail-----> */}

      <div
        className="container-fluid px-0"
        data-bs-spy="scroll"
        data-bs-target="#sidebar"
        data-bs-offset="100"
        tabIndex="0"
      >
        <div className="row mx-0">
          {/* <!-- Sticky Left Column --> */}
          <div className="col-md-4 left-sidebar px-5 pt-5 pb-5">
            <div className="sticky-sidebar" id="sidebar">
              <a href="#last" className="heading-link"></a>
              <a href="#approach" className="heading-link">
                Our Approach: Strategy Before Statements
              </a>
              <a href="#execution" className="heading-link">
                Phase 2: Execution
              </a>
              <a href="#why" className="heading-link">
                Why It Works
              </a>
              <a href="#bottom" className="heading-link">
                The Bottom Line
              </a>
            </div>
          </div>

          {/* <!-- Scrollable Content Right Column --> */}
          <div className="col-md-8 px-5 pt-5 right-sidebar pb-5">
            <section id="last">
              {/* <!-- <h2>The Bottom Line</h2> --> */}
              <p>
                Leadership transitions are inevitable, but how they're
                communicated can define a brand's future. We've seen firsthand
                how a well-executed CEO transition communications plan can
                preserve trust, protect morale, and position a brand for
                long-term success. On the flip side, a poorly executed plan can
                damage a company's reputation, cause confusion, and even
                decrease shareholder value.
              </p>
              <p>
                A CEO isn't just a title, it's the face of a company's vision,
                culture, and credibility. When that face changes, stakeholders —
                from employees to investors — need clarity, reassurance, and a
                reason to stay engaged. Without a plan, transitions can trigger
                confusion, attrition, and reputational risk. With a plan, they
                can reinforce stability and signal growth.
              </p>
            </section>
            <section id="approach">
              {/* <!-- <h2>Our Approach</h2> --> */}
              <p>
                The first phase of developing a communications plan for a CEO
                transition is foundation setting: preparing all internal and
                external messaging before the transition is publicly announced.
                This way, all internal stakeholders are operating from the same
                playbook and messaging is synchronized. There are many "behind
                the scenes" steps to make this happen, like understanding the
                incoming and outgoing CEO's values, interpersonal management
                style, and more, but ultimately the output includes:
              </p>
              <ul className="ps-3">
                <li>
                  Message Development: Crafting the internal announcement with
                  the outgoing CEO.
                </li>
                <li>
                  Stakeholder Mapping: Identifying areas of concern across
                  departments and leadership.
                </li>
                <li>
                  FAQ Creation: Developing department-specific FAQs to address
                  anticipated questions.
                </li>
                <li>
                  Video Messaging: Writing, filming, and producing a video
                  message from the outgoing CEO.
                </li>
                <li>
                  Pre-Written Communications: Preparing press releases, vendor
                  announcements, and social media responses — ready to deploy
                  when the transition is announced.
                </li>
              </ul>
              <p>
                In the lead-up to announcing the CEO transition, our teams also
                outline internal protocols for message dissemination and social
                media use and provide one-on-one executive coaching for message
                delivery and team communication. These exercises are designed to
                ensure clarity, stability, and confidence across all
                stakeholders.
              </p>
            </section>

            <section id="execution">
              {/* <!-- <h2>Phase 2: Execution</h2> --> */}
              <p>
                Then, the second phase begins when the announcement is ready to
                be made. In the execution phase, we distribute the transition
                announcement internally and externally, manage media and social
                media responses, and welcome the new CEO with internal
                introductions. Often, this phase is partnered with a targeted PR
                campaign to drive external awareness.
              </p>
            </section>

            <section id="why">
              {/* <!-- <h2>Why It Works</h2> --> */}
              <p>
                CEO transitions are more than HR updates, they're brand-defining
                moments. Our plan ensures that every stakeholder, from employees
                to investors, hears a consistent, confident message.
              </p>
            </section>

            <section id="bottom">
              {/* <!-- <h2>The Bottom Line</h2> --> */}
              <p>
                Whether you're a startup or a national brand, a CEO transition
                is a high-stakes moment that demands more than a memo. It
                requires a strategic communications plan that's proactive,
                people-focused, and aligned with your business goals. At
                Piccadilly, we help brands turn leadership change into a
                leadership opportunity.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* <!-----project-section-----> */}

      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-md-6 project-col px-0">
            <a href="#">
              <div className="overlay-div text-end">
                <span className="mb-5"> ⟵</span>
                <br />
                <h5 className="text-white mb-3 font_18 fw_500">Category :</h5>
                <h3 className="text-white fw_600">Previous Blog Header</h3>
              </div>
              <img src="images/previous-blog.png" />
            </a>
          </div>
          <div className="col-md-6 project-col px-0">
            <a href="#">
              <div className="overlay-div text-start">
                <span className="mb-5"> ⟶</span>
                <br />
                <h5 className="text-white mb-3 font_18 fw_500">Category :</h5>
                <h3 className="text-white font_40 fw_600">Next Blog Header</h3>
              </div>
              <img src="images/next-blog.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
