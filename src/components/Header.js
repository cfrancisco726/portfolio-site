import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
	componentDidMount() {
		var elem = document.querySelector('.sidenav');
		var instance = M.Sidenav.init(elem, {
			edge: 'left',
			outDuration: 100
		});
	}

	render() {
		return (
			<div>
				<nav className="transparent z-depth-0">
					<div className="nav-wrapper">
						<Link
							to={'/'}
							data-target="mobile-demo"
							className="sidenav-trigger"
						>
							<i class="material-icons">menu</i>
						</Link>
						<ul className="right hide-on-med-and-down">
							<li>
								<Link to={'/'} className="left-brand-logo">
									Home
								</Link>
							</li>
							<li>
								<NavLink to={'/about'} activeClassName="active">
									About
								</NavLink>
							</li>
							<li>
								<NavLink to={'/projects'}>Projects</NavLink>
							</li>
							<li>
								<NavLink to={'/skills'}>Skills</NavLink>
							</li>
							<li>
								<NavLink to={'/resume'}>Resume</NavLink>
							</li>
						</ul>
					</div>
				</nav>

				<ul className="sidenav" id="mobile-demo">
					<li>
						<NavLink to={'/'} onClick="sidenav-close">
							home
						</NavLink>
					</li>
					<li>
						<NavLink to={'/about'} onClick="sidenav-close">
							about
						</NavLink>
					</li>
					<li>
						<NavLink to={'/projects'} onClick="sidenav-close">
							projects
						</NavLink>
					</li>
					<li>
						<NavLink to={'/skills'} onClick="sidenav-close">
							skills
						</NavLink>
					</li>
					<li>
						<NavLink to={'/resume'} onClick="sidenav-close">
							resume
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
