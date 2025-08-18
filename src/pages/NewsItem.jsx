import React from "react";

const NewsItem = () => {
  return (
    <>
      <div className="container-fluid news_item_banner blog_detail_banner">
        <div className="row banner-row mx-0">
          <div className="col-md-8 case_study-col-1 blog_col-1 px-0 pb-5">
            <div className="inner-div">
              <p className="font_20">ARTICLE</p>
              <h2
                className="color_primary fw_600"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <span className="text-dark fw_500">
                  4 Reasons Why You Should Hire
                </span>
                <br /> a Consultant to Support Your Marketing Needs
              </h2>
            </div>
          </div>
          <div className="col-md-4 banner-col blog_col-1 blog_col_2 case_study-col-1 px-0 px-md-5 pb-5">
            <div className="inner-div d-flex">
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
      {/* <!-----News-banner-section----> */}

      <div className="container-fluid news_banner-img bg_cover">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      {/* <!-----blog-detail-----> */}

      <div
        className="container-fluid px-0"
        data-bs-spy="scroll"
        data-bs-target="#sidebar"
        data-bs-offset="100"
        tabindex="0"
      >
        <div className="row mx-0">
          {/* <!-- Sticky Left Column --> */}
          <div className="col-md-4 left-sidebar px-5 pt-5 pb-5">
            <div className="sticky-sidebar" id="sidebar">
              {/* <!-- <a href="#last" className="heading-link"></a> --> */}
              <a href="#approach" className="heading-link">
                A Smart Business Strategy
              </a>
              {/* <!--     <a href="#execution" className="heading-link">Phase 2: Execution</a>
        <a href="#why" className="heading-link">Why It Works</a>
        <a href="#bottom" className="heading-link">The Bottom Line</a> --> */}
            </div>
          </div>

          {/* <!-- Scrollable Content Right Column --> */}
          <div className="col-md-8 px-5 pt-5 right-sidebar pb-5">
            <section id="approach">
              {/* <!-- <h2>Our Approach</h2> --> */}
              <p>
                In today’s fast-paced, information-overloaded world, the
                importance of marketing and communications is greater than ever.
                It’s no wonder that your marketing demands might be surpassing
                your team’s capacity—whether your resources are maxed out or you
                have a special project requiring focused attention, you need
                help and you need it yesterday.   Here are four reasons why
                hiring a consultant for your marketing needs is a smart business
                strategy.
              </p>
              <ol className="ps-3">
                <li>
                  Fill Specialization Gaps We’re living in an increasingly
                  specialized world, where marketing teams are composed of a
                  range of specialists. You may already have marketing and
                  communications professionals on staff but in today’s
                  fast-paced world, gaps can quickly become evident. Utilizing a
                  marketing consultant can bridge gaps and drive your marketing
                  strategy forward with expert insights and flexible support.
                </li>
                <li>
                  Beyond addressing skills gaps, there’s also the importance of
                  industry knowledge and experience. By hiring a consultant with
                  specific industry expertise, they will already understand the
                  nuances of your business, while deep subject matter expertise
                  will enable them to minimize the learning curve and quickly
                  ramp up. As an expert in their field, a consultant hired from
                  a consulting firm will be able to efficiently contribute to
                  your team, blending in seamlessly and working to get critical
                  projects completed.
                </li>
                <li>
                  Provide Fresh Perspectives There’s a lot of talk these days
                  about silos and breaking out of them. But, even if you’re able
                  to knock down the interdepartmental walls within your own
                  company, there’s still one silo that’s not only often hard to
                  escape from, but whose existence is often hard to even
                  recognize. That’s the silo of your company, and in some cases,
                  your entire industry.
                </li>
                <li>
                  Because consultants come from outside your company – but still
                  have the expertise and knowledge to understand your industry –
                  they are able to bring an outside perspective to your
                  marketing and communications projects and challenges. An
                  outside consultant with a deep background in product marketing
                  across different categories may provide experience with
                  activations and business trends unheard of within your own
                  sector, but which promise to attract the attention of your
                  audience, differentiating you right out of the starting gate.
                </li>
                <li>
                  And, sometimes, the best thing that a fresh perspective can
                  offer is reassurance you have the right strategies and tactics
                  in place, as a consultant works with and helps guide your team
                  across the finish line.
                </li>
                <li>
                  Grow On-Demand The cost of hiring new employees can be
                  substantial—a business faces expenses related to recruiting
                  and onboarding, training, wages, benefits and payroll taxes.
                  Even for smaller companies, these expenses can easily add up
                  to tens of thousands of dollars for each new hire. And the
                  impact of poor recruitment, high employee turnover, and an
                  unsuccessful hire can lead to additional costs down the line.
                  Studies show that the cost of replacing an employee can be
                  1.5-2 times the employee’s annual salary.
                </li>
                <li>
                  With the implications of cost-per-hire, an advantage of
                  marketing and communications consultants is that they can be
                  hired on a project-by-project or interim basis. A business
                  owner can test the business strategy, the need, the skillset
                  of a consultant, or hire for a temporary vacancy without
                  having to go into all the costly risks of hiring and offering
                  benefits and stock options.{" "}
                </li>
                <li>
                  For instance, when a communications director for one national
                  family welfare agency went out on maternity leave, a
                  communications consultant was hired to continue driving
                  multiple projects in her absence, including a social media
                  audit, social media strategy development, and an SEO audit
                  among other deliverables. The consultant had a brief period of
                  onboarding prior to the client’s departure and continued the
                  projects seamlessly to completion prior to the client’s
                  return.
                </li>
                <li>
                  Because consultants are only selected if they are at the top
                  of their professions with a depth of knowledge and experience,
                  you can be assured of rapid deployment and integration. There
                  isn’t precious time spent on creating job vacancy ads, having
                  them approved by HR and legal, then the long process of
                  waiting for resumes to come in and reviewing them, followed by
                  finally hiring and onboarding. Skilled and qualified marketing
                  and communications consultants are the workforce equivalent of
                  plug-and-play.
                </li>
                <li>
                  Increase Growth, Not Friction Whether your company is a
                  startup, a high growth organization, a Fortune 500 corporation
                  or a regional non-profit, a common goal is often growth. But
                  growth and business development isn’t always a straight line
                  and can come with growing pains and associated costs. And it
                  often means moving quickly and scaling to meet demands by
                  adding additional talent and expertise.
                </li>
                <li>
                  As we’ve mentioned, by leveraging a professional services firm
                  to hire a consultant, companies can tap into a diverse pool of
                  specialized skills and knowledge and experience, providing
                  greater flexibility and efficiency. This approach reduces the
                  necessity for a sizable in-house team, resulting in
                  substantial cost savings and allowing businesses to scale and
                  adapt their marketing strategies more effectively.
                </li>
                <li>
                  Another benefit of a consultant is the ability to “try them on
                  for size” before making a full-time hire.
                </li>
                <li>
                  Not only can you scale quickly to meet growth demands, if the
                  expertise is new to the business and you’re wondering if it
                  requires creating a new role and adding headcount, a
                  consultant allows you to prove the value and impact to the
                  business, building a case to create a new full-time headcount.
                  All of this while gaining immediate traction.
                </li>
                <li>
                  Another advantage of project-based hiring compared to
                  full-time employment is the positive flexibility and
                  scalability it brings. By their very nature, project-based
                  professionals are agile and adaptive. Their contribution can
                  be both strategic and tactical based on your current and
                  upcoming business priorities. As you approach an increased
                  growth cycle, they can be brought in to help execute the extra
                  work and then let go (without any concerns about exit
                  compensation) enabling you to scale as needed for spurts of
                  growth and expansion.
                </li>
                <li>
                  Lastly, growth often means change, and we all know that not
                  everyone is comfortable with change. That discomfort can lead
                  to dissatisfaction and, ultimately, employee turnover. For
                  example, it may become necessary to reorg internally to
                  achieve growth targets and milestones.
                </li>
                <li>
                  Bringing in outside perspective for marketing and
                  communications can provide continuity in the event of this
                  type of turmoil. Not only can it mean that your business is
                  able to maintain its regular cadence of marketing efforts, but
                  a marketing consultant can also help ensure your internal
                  communications are effectively supporting the changes to the
                  reorganization efforts. This drives adoption, increases
                  employee engagement, and ensures staff turnover doesn’t become
                  contagious.
                </li>
                <li>
                  In today’s dynamic business environment, leveraging the
                  expertise of marketing and communications consultants can be a
                  game-changer. Whether it’s filling gaps in specialized skills,
                  providing fresh perspectives, or enabling growth without
                  friction, consultants offer flexible and efficient solutions
                  tailored to your unique needs. At AMF Strategic Consultant
                  Services, we have the experience and deep skilled workforce to
                  help everyone from startups to Fortune 500 companies make
                  their marcom efforts a success. Click here to start the
                  conversation. 
                </li>
              </ol>
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
                <div className="project-inner-col">
                <span className="mb-5"> ⟵</span>
                <br />
                <h5 className="text-white mb-3 font_18 fw_600">ARTICLES :</h5>
                <h3 className="text-white font_40 fw_600">
                  Mastering Omnichannel Communications: A Q&A with Seasoned
                  Marketing Leader, Luke Sinclair
                </h3>
                </div>
              </div>
              <img src="images/previous-blog.png" />
            </a>
          </div>
          <div className="col-md-6 project-col px-0">
            <a href="#">
              <div className="overlay-div text-start">
                <div className="project-inner-col">
                <span className="mb-5"> ⟶</span>
                <br />
                <h5 className="text-white mb-3 font_18 fw_600">
                  HEALTHCARE ARTICLES :
                </h5>
                <h3 className="text-white fw_600">
                  Healthcare Labor Shortage Predicted By 2028, With Uneven State
                  Impacts: Report
                </h3>
                </div>
              </div>
              <img src="images/next-blog.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
