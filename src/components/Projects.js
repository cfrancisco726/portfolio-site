import React, { Component } from 'react';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { active: 0 };
	}
	render() {
		return (
			<div className="row">
				<div className="col s5 m5">
					<div className="card blue-grey darken-1">
						<div className="card-content white-text">
							<span className="card-title">Project "1"</span>
							<p>
								I am a very simple card. I am good at containing small bits of
								information. I am convenient because I require little markup to
								use effectively.
							</p>
						</div>
						<div className="card-action">
							<a href="#">github</a>
							<a href="#">live Demo</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
