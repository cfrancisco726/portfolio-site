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

					<p>
						Mail Monkey allows users to send and track surveys via email. A
						profile page displays a history of the emails sent, along with a bar
						chart of how their customers responded.{' '}
					</p>
					<p>
						<strong>Built with:</strong> React Redux, MongoDB, Express and
						Node.js.<br />
						<strong>APIs and Services:</strong> Google Oauth, Stripe and
						Sendgrid.
					</p>
					<a href="https://surveyapps726.herokuapp.com" target="_blank">
						<img
							src={require('../images/mail_monkey.png')}
							alt="projects"
							width="100%"
						/>
					</a>

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
			</div>
		);
	}
}

export default Projects;
