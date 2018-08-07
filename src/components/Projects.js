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
							Mail Monkey allows users to send and track surveys via email. A
							profile page displays a history of the emails sent, along with a
							bar chart of how their customers responded.{' '}
						</p>
						<p>
							<strong>Built with:</strong> React Redux, MongoDB, ExpressJS,
							NodeJS and Materialize<br />
							<strong>APIs:</strong> Google Oauth, Stripe and
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
								Vinyl Records is a content management system that allows users
								to purchase records and admin to update the content.
							</p>
							<p>
								<strong>Built with:</strong> React Redux, MongoDB, ExpressJS and
								Node.js.<br />
							</p>
							<div className="project-img">
								<a
									href="http://recordstorec.rn8d3he9wv.us-east-1.elasticbeanstalk.com/"
									target="_blank"
								>
									<img
										src={require('../images/vinyl_records_sample.png')}
										alt="projects"
										width="80%"
										padding-top="20%"
									/>
								</a>
							</div>
							<div className="project-links">
								<p>
									<a
										href="http://recordstorec.rn8d3he9wv.us-east-1.elasticbeanstalk.com/"
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
		);
	}
}

export default Projects;
