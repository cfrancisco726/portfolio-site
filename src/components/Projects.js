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
							<strong>Wanderlust: </strong> Search for the cheapest flights
							based on origin city, date and trip duration. This list of flights
							is provided by the Amadeus API. You will have the ability to save
							flight information.
						</p>
						<p>
							<strong>Built with: </strong> React-Redux, MongoDB, ExpressJS,
							NodeJS and Material-UI<br />
							<strong>APIs:</strong> Google Maps and Amadeus.
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
								<strong>Mail Monkey: </strong> Allows users to send and track
								surveys via email. A profile page displays a history of the
								emails sent, along with a bar chart of how their customers
								responded.
							</p>
							<p>
								<strong>Built with: </strong> React-Redux, MongoDB, ExpressJS,
								NodeJS and MaterializeCSS<br />
								<strong>APIs:</strong> Google Oauth, Stripe and Sendgrid.
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
									<strong>Vinyl Records: </strong> A content management system
									that allows users to purchase records. An admin panel allows
									the site owner to add, edit, or delete inventory on the
									website.
								</p>
								<p>
									<strong>Built with: </strong> React-Redux, MongoDB, ExpressJS,
									NodeJS and React-Boostrap<br />
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
