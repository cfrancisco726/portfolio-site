import React, { Component } from 'react';

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
					<p className="modal-title">Projects</p>
					<div className="project-1">
						<p>
							<strong>Wanderlust: </strong> &nbsp; Enter origin city, &nbsp;
							departure date and number of days for a list of cheapest
							destinations plotted on a map. &nbsp; This list of flights is
							provided by the Amadeus API. &nbsp; Clicking on a marker provides
							flight information that may be saved to your saved trips page.
						</p>
						<p>
							<strong>Built with: </strong> &nbsp; React-Redux, &nbsp; MongoDB,
							&nbsp; ExpressJS, &nbsp; NodeJS and Material-UI<br />
							<strong>APIs:</strong> &nbsp; Google Maps and Amadeus.
						</p>
						<div className="project-img">
							<a
								href="https://destination-finder.herokuapp.com/"
								target="_blank"
							>
								<img
									src={require('../images/wanderlust.png')}
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
								</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
									href="https://github.com/cfrancisco726/destination-finder"
									target="_blank"
								>
									GITHUB
								</a>
							</p>
						</div>
						<div className="project-2">
							<p>
								<strong>Mail Monkey: </strong> &nbsp; Allows users to send and
								track surveys via email. &nbsp; A profile page displays a
								history of the emails sent, &nbsp; along with a bar chart of how
								their customers responded.
							</p>
							<p>
								<strong>Built with: </strong> &nbsp; React-Redux, &nbsp;
								MongoDB, ExpressJS, &nbsp; NodeJS and MaterializeCSS<br />
								<strong>APIs:</strong> &nbsp; Google Oauth, &nbsp; Stripe and
								Sendgrid.
							</p>
							<div className="project-img">
								<a href="https://surveyapps726.herokuapp.com" target="_blank">
									<img
										src={require('../images/mail_monkey_img.png')}
										alt="projects"
										width="80%"
										padding-top="20%"
									/>
								</a>
							</div>
							<div className="project-links">
								<p>
									<a href="https://surveyapps726.herokuapp.com" target="_blank">
										LIVE DEMO
									</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
										href="https://github.com/cfrancisco726/MailMonkey"
										target="_blank"
									>
										GITHUB
									</a>
								</p>
							</div>
							<div className="project-2">
								<p>
									<strong>Vinyl Records: </strong> &nbsp; A content management
									system that allows users to purchase records. &nbsp; An admin
									panel allows the site owner to add, edit, or delete inventory
									on the website.
								</p>
								<p>
									<strong>Built with: </strong> &nbsp; React-Redux, &nbsp;
									MongoDB, &nbsp; ExpressJS, &nbsp; NodeJS and React-Boostrap<br />
								</p>
								<div className="project-img">
									<a
										href="https://vinyl-records.herokuapp.com/"
										target="_blank"
									>
										<img
											src={require('../images/Vinyl_records_home.png')}
											alt="projects"
											width="80%"
											padding-top="20%"
										/>
									</a>
								</div>
								<div className="project-links">
									<p>
										<a
											href="https://vinyl-records.herokuapp.com/"
											target="_blank"
										>
											LIVE DEMO
										</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
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
			</div>
		);
	}
}

export default Projects;
