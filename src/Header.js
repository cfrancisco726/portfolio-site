import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="" style={{ backgroundColor: 'black' }}>
					<Link to={'/'} className="left-brand-log" style={{ margin: '5px' }}>
						Carlo Francisco
					</Link>
					<ul className="right">
						<li>
							<Link to={'/about'}>about</Link>
						</li>
						<li>
							<Link to={'/projects'}>projects</Link>
						</li>
						<li>
							<Link to={'/skills'}>skills</Link>
						</li>
						<li>
							<Link to={'/experience'}>experience</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
