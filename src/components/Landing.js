import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';

class Landing extends Component {
	render() {
		return (
			<div className="container">
				<div className="banner-text">
					<h1>CARLO FRANCISCO</h1>
					<h6>FULL STACK DEVELOPER</h6>
				</div>
				<div className="row icon-list">
					<div className="col s6 m3 l3">
						<figure className="icon">
							<a className="modal-trigger" href="#modal1">
								<img
									src={require('../images/about.svg')}
									alt="about"
									width="70%"
								/>
								<figcaption>about</figcaption>
							</a>
						</figure>
						<About />
					</div>
					<div className="col s6 m3 l3">
						<figure className="icon">
							<a className="modal-trigger" href="#modal2">
								<img
									src={require('../images/projects.svg')}
									alt="projects"
									width="70%"
								/>
								<figcaption>projects</figcaption>
							</a>
						</figure>
						<Projects />
					</div>
					<div className="col s6 m3 l3">
						<figure className="icon">
							<a className="modal-trigger" href="#modal3">
								<img
									src={require('../images/skills-1.svg')}
									alt="skills"
									width="70%"
								/>
								<figcaption>skills</figcaption>
							</a>
						</figure>
					</div>
					<div className="col s6 m3 l3">
						<figure className="icon">
							<a to={'/resume'} activeClassName="active">
								<img
									src={require('../images/resume.svg')}
									alt="resume"
									width="70%"
								/>
								<figcaption>resume</figcaption>
							</a>
						</figure>
					</div>
				</div>
				<div className="row social-links">
					<div className="col s4 m3 l4">
						<a
							href="http://google.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<i className="fab fa-linkedin icon" aria-hidden="true" />
						</a>
					</div>
					<div className="col s4 m4 l4">
						<a
							href="http://google.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<i className="fab fa-github-square icon" aria-hidden="true" />
						</a>
					</div>
					<div className="col s4 m4 l4">
						<a
							href="http://google.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<i className="fas fa-envelope icon" aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
