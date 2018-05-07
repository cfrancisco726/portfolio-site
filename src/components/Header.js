import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
	componentDidMount() {
		var elem = document.querySelector('.sidenav');
		var instance = M.Sidenav.init(elem, {
		});
	}

	render() {
		return (
			<div>
				<nav className="transparent">
					<div className="nav-wrapper">
						<Link to={'/'} className="left-brand-logo">
							<img
								src={require('../images/logo-1.svg')}
								alt="about"
								width="3%"
							/>
						</Link>
						<Link
							to={'/'}
							data-target="mobile-demo"
							className="sidenav-trigger"
						>
							<i className="material-icons">menu</i>
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
		);
	}
}

export default Header;
