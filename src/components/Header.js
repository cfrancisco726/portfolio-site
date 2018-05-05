import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link to={'/carlofrancisco'} className="left-brand-logo">
							<img src={require('../images/logo.svg')} alt="about" width="3%" />
						</Link>
						<Link
							to={'/carlofrancisco'}
							data-target="mobile-demo"
							className="sidenav-trigger"
						>
							<i className="material-icons">menu</i>
							<img src={require('../images/logo.svg')} alt="about" width="3%" />

						</Link>
						<ul className="right hide-on-med-and-down">
							<li>
								<NavLink to={'/about'} activeClassName="active">
									about
								</NavLink>
							</li>
							<li>
								<NavLink to={'/projects'}>projects</NavLink>
							</li>
							<li>
								<NavLink to={'/skills'}>skills</NavLink>
							</li>
							<li>
								<NavLink to={'/resume'}>resume</NavLink>
							</li>
						</ul>
					</div>
				</nav>

				<ul className="sidenav" id="mobile-demo">
					<li>
						<NavLink to={'/about'}>about</NavLink>
					</li>
					<li>
						<NavLink to={'/projects'}>projects</NavLink>
					</li>
					<li>
						<NavLink to={'/skills'}>skills</NavLink>
					</li>
					<li>
						<NavLink to={'/experience'}>experience</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
