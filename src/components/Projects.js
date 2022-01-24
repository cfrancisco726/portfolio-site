import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }

  render() {
    return (
      <div id="modal2" className="modal">
        <div className="modal-content">
          <div class=" right-align">
            <button className="btn modal-close">&times;</button>
          </div>

          <h1 className="modal-title">Projects</h1>

          <div className="project">
            <div className="dj_majestik">
              <div className="copy">
                <p>
                  <strong>Movie Trailers: </strong> Responsive server side
                  rendered website displaying movie trailers and sorted by
                  category
                </p>
                <p>
                  <strong>Built with: </strong> React, NextJS, TailwindCSS
                  <br />
                  <strong>APIs:</strong> TMDB
                </p>
              </div>

              <div className="project-img">
                <a
                  href="https://moviedb-nextjs-tailwind.vercel.app/"
                  target="_blank"
                >
                  <img
                    src={require("../images/moviedb.png")}
                    alt="projects"
                    width="80%"
                    padding-top="20%"
                  />
                </a>
              </div>

              <div className="project-links">
                <p>
                  <a
                    href="https://moviedb-nextjs-tailwind.vercel.app/"
                    target="_blank"
                  >
                    LIVE DEMO
                  </a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a
                    href="https://github.com/cfrancisco726/moviedb-nextjs-tailwind"
                    target="_blank"
                  >
                    GITHUB
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="dj_majestik">
              <div className="copy">
                <p>
                  <strong>DJ Majestik: </strong> Responsive website for DJ/Radio
                  Personality, featuring responsive background video, custom
                  podcasts and upcoming events displayed in animated cards.
                </p>
                <p>
                  <strong>Built with: </strong> Javscript, HTML5, CSS3
                  <br />
                </p>
              </div>

              <div className="project-img">
                <a href="https://dj-majestik.netlify.app/" target="_blank">
                  <img
                    src={require("../images/dj_majestik_landing.png")}
                    alt="projects"
                    width="80%"
                    padding-top="20%"
                  />
                </a>
              </div>

              <div className="project-links">
                <p>
                  <a href="https://dj-majestik.netlify.app/" target="_blank">
                    LIVE DEMO
                  </a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a
                    href="https://github.com/cfrancisco726/DJ_Majestik"
                    target="_blank"
                  >
                    GITHUB
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="dashboard">
              <p>
                <strong>Covid-19 Dashboard: </strong> Artifical Intelligence
                model that uses predictor sliders to see how increasing or
                decreasing restrictions affects the number of covid-19 cases.
                Collaborated with Evolutionary Artifical Intelligence group to
                integrate their existing model into cognizant.com and improve
                the UI/UX.
              </p>

              <p>
                <strong>Built with: </strong>Dash
                <br />
              </p>

              <div className="project-img">
                <a
                  href="https://www.cognizant.com/pandemic-response"
                  target="_blank"
                >
                  <img
                    src={require("../images/dashboard.png")}
                    alt="projects"
                    width="80%"
                    padding-top="20%"
                  />
                </a>
              </div>

              <div className="project-links">
                <p>
                  <a
                    href="https://www.cognizant.com/pandemic-response"
                    target="_blank"
                  >
                    LIVE DEMO
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="nextgensmiles">
              <div className="copy">
                <p>
                  <strong>Next Gen Smile Care: </strong> Responsive website for
                  dental practice, featuring a list of services, testimonials,
                  and contact form. Worked closely with client and designer on
                  information architecture and UX prior to development.
                  Utitlized Sketch to develop pixel-perfect website. Also
                  developed animated banner ads and email.
                </p>
                <p>
                  <strong>Built with: </strong> React, React-Boostrap, EmailJS,
                  JQuery
                  <br />
                  <strong>APIs:</strong> Google Maps
                </p>
              </div>

              <div className="project-img">
                <a href="http://nextgensmilecare.com" target="_blank">
                  <img
                    src={require("../images/next_gen_smile_care.png")}
                    alt="projects"
                    width="80%"
                    padding-top="20%"
                  />
                </a>
              </div>

              <div className="project-links">
                <p>
                  <a href="http://nextgensmilecare.com" target="_blank">
                    LIVE DEMO
                  </a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a
                    href="https://github.com/cfrancisco726/next-gen-smile-care"
                    target="_blank"
                  >
                    GITHUB
                  </a>
                </p>
              </div>

              <div className="banner_ad">
                <p>
                  <strong>Animated Banner Ad </strong>
                </p>
              </div>

              <div className="project-img">
                <a
                  href="https://nextgenbanner300x250.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={require("../images/NextGenSmiles_300x250.png")}
                    alt="projects"
                    width="40%"
                    padding-top="20%"
                  />
                </a>
              </div>

              <div className="project-links">
                <p>
                  <a
                    href="https://nextgenbanner300x250.herokuapp.com"
                    target="_blank"
                  >
                    LIVE DEMO
                  </a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a
                    href="https://github.com/cfrancisco726/NextGenBannerAd_300x250"
                    target="_blank"
                  >
                    GITHUB
                  </a>
                </p>
              </div>

              <div className="project-img">
                <a
                  href="https://nextgenbanner728x90.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={require("../images/NextGenSmiles_728x90.png")}
                    alt="projects"
                    width="60%"
                    padding-top="20%"
                  />
                </a>
              </div>

              <div className="project-links">
                <p>
                  <a
                    href="https://nextgenbanner728x90.herokuapp.com/"
                    target="_blank"
                  >
                    LIVE DEMO
                  </a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a href="https://github.com/cfrancisco726/NextGenBannerAd_728x90">
                    GITHUB
                  </a>
                </p>
              </div>

              <div className="email-ad">
                <p>
                  <strong> Email </strong>
                </p>
              </div>
              <div className="project-img">
                <a
                  href="https://nextgensmileemail.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={require("../images/NextGenSmiles_email.png")}
                    alt="projects"
                    width="40%"
                    padding-top="20%"
                  />
                </a>
              </div>

              <div className="project-links">
                <p>
                  <a
                    href="https://nextgensmileemail.herokuapp.com/"
                    target="_blank"
                  >
                    LIVE DEMO
                  </a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a
                    href="https://github.com/cfrancisco726/NextGenSmileEmail"
                    target="_blank"
                  >
                    GITHUB
                  </a>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="project">
            <div className="wanderlust">
              <p>
                <strong>Wanderlust: </strong> Search for the cheapest flights
                based on origin city, date and trip duration. This list of
                flights is provided by the Amadeus API. You will have the
                ability to save flight information.
              </p>

              <p>
                <strong>Built with: </strong> React-Redux, MongoDB, ExpressJS,
                NodeJS and Material-UI
                <br />
                <strong>APIs:</strong> Google Maps and Amadeus
              </p>

              <div className="project-img">
                <a
                  href="https://destination-finder.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={require("../images/wanderlust.png")}
                    alt="projects"
                    width="80%"
                    padding-top="20%"
                  />
                </a>
              </div>

              <div className="project-links">
                <p>
                  <a
                    href="https://destination-finder.herokuapp.com/"
                    target="_blank"
                  >
                    LIVE DEMO
                  </a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a
                    href="https://github.com/cfrancisco726/destination-finder"
                    target="_blank"
                  >
                    GITHUB
                  </a>
                </p>
              </div>
            </div>
          </div>

          <hr />

          <div className="project"></div>
          <div className="project-2">
            <p>
              <strong>Mail Monkey: </strong> Allows users to send and track
              surveys via email. A profile page displays a history of the emails
              sent, along with a bar chart of how their customers responded.
            </p>
            <p>
              <strong>Built with: </strong> React-Redux, MongoDB, ExpressJS,
              NodeJS and MaterializeCSS
              <br />
              <strong>APIs:</strong> Google Oauth, Stripe and Sendgrid
            </p>
            <div className="project-img">
              <a href="https://surveyapps726.herokuapp.com" target="_blank">
                <img
                  src={require("../images/mail_monkey_img.png")}
                  alt="projects"
                  width="80%"
                  padding-top="20%"
                />
              </a>
            </div>
            <div className="project-links">
              <p>
                {/* <a href="https://surveyapps726.herokuapp.com" target="_blank">
                  LIVE DEMO
                </a> */}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://github.com/cfrancisco726/MailMonkey"
                  target="_blank"
                >
                  GITHUB
                </a>
              </p>
            </div>
          </div>
          <hr />

          <div className="project">
            <div className="vinyl-records">
              <p>
                <strong>Vinyl Records: </strong> A content management system
                that allows users to purchase records. An admin panel allows the
                site owner to add, edit, or delete inventory on the website.
              </p>
              <p>
                <strong>Built with: </strong> React-Redux, MongoDB, ExpressJS,
                NodeJS and React-Boostrap
                <br />
              </p>
              <div className="project-img">
                <a href="https://vinyl-records.herokuapp.com/" target="_blank">
                  <img
                    src={require("../images/Vinyl_records_home.png")}
                    alt="projects"
                    width="80%"
                    padding-top="20%"
                  />
                </a>
              </div>
              <div className="project-links">
                <p>
                  {/* <a
                    href="https://vinyl-records.herokuapp.com/"
                    target="_blank"
                  >
                    LIVE DEMO
                  </a> */}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://github.com/cfrancisco726/Record_Store_CMS"
                    target="_blank"
                  >
                    GITHUB
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
