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
					<p>Mail Monkey</p>

					<img
						src={require('../images/mail_monkey.png')}
						alt="projects"
						width="100%"
					/>

					<p>
						Mail Monkey allows users to send and track surveys via email. Users
						pay to add credits in order to send emails to their customers. Their
						profile page displays a history of the emails sent, along with a bar
						chart of how their customers responded. Built with React Redux,
						MongoDB, Express and Node.js.
					</p>
					<p>APIs and Services: Google Oauth, Stripe and Sendgrid</p>
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
