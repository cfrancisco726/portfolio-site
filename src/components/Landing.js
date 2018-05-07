import React, { Component } from 'react';
import About from './About';
import { Link } from 'react-router-dom';

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
						<About />
					</div>
					<div className="col s6 m3 l3">
						<figure>
							<Link to={'/projects'} activeClassName="active">
								<img
									src={require('../images/projects.svg')}
									alt="projects"
									width="70%"
								/>
								<figcaption>projects</figcaption>
							</Link>
						</figure>
					</div>
					<div className="col s6 m3 l3">
						<figure>
							<Link to={'/skills'} activeClassName="active">
								<img
									src={require('../images/skills-1.svg')}
									alt="skills"
									width="70%"
								/>
								<figcaption>skills</figcaption>
							</Link>
						</figure>
					</div>
					<div className="col s6 m3 l3">
						<figure>
							<Link to={'/resume'} activeClassName="active">
								<img
									src={require('../images/resume.svg')}
									alt="resume"
									width="70%"
								/>
								<figcaption>resume</figcaption>
							</Link>
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
							<i className="fab fa-linkedin" aria-hidden="true" />
						</a>
					</div>
					<div className="col s4 m4 l4">
						<a
							href="http://google.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<i className="fab fa-github-square" aria-hidden="true" />
						</a>
					</div>
					<div className="col s4 m4 l4">
						<a
							href="http://google.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<i className="fas fa-envelope" aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
