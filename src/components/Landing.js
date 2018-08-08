import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

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
									width="40%"
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
									width="40%"
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
									src={require('../images/skills.svg')}
									alt="skills"
									width="40%"
								/>
								<figcaption>skills</figcaption>
							</a>
						</figure>
						<Skills />
					</div>
					<div className="col s6 m3 l3">
						<figure className="icon">
							<a
								href="https://drive.google.com/file/d/10I30lrmjjBDpXg07YjljZzmT6t2-xl3r/view?usp=sharing"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img
									src={require('../images/resume.svg')}
									alt="resume"
									width="40%"
								/>
								<figcaption>resume</figcaption>
							</a>
						</figure>
					</div>
				</div>
				<div className="row social-links">
					<div className="col s4 m3 l4">
						<a
							href="https://www.linkedin.com/in/cfrancisco726"
							rel="noopener noreferrer"
							target="_blank"
						>
							<i className="fab fa-linkedin icon" aria-hidden="true" />
						</a>
					</div>
					<div className="col s4 m4 l4">
						<a
							href="https://github.com/cfrancisco726"
							rel="noopener noreferrer"
							target="_blank"
						>
							<i className="fab fa-github-square icon" aria-hidden="true" />
						</a>
					</div>
					<div className="col s4 m4 l4">
						<a
							href="mailto:cfrancisco726@gmail.com"
							rel="noopener noreferrer"
							target="_top"
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
