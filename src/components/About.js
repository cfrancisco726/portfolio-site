import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class About extends Component {
	componentDidMount() {
		var elem = document.querySelectorAll('.modal');
		var instance = M.Modal.init(elem, {
			opacity: 0.8
		});
	}
	render() {
		return (
			<div>
				<div id="modal1" className="modal">
					<div className="modal-content">
						<div className=" right-align">
							<button className="btn modal-close">&times;</button>
						</div>
						<p className="modal-title">About me</p>
						<img
							src={require('../images/profile-img.jpg')}
							alt="profile"
							class="profile-img"
						/>
						<p>
							Full Stack Developer with an interest in delivering solutions that
							combine clean code with well thought-out user-experience.
							Possesses a leadership quality as exemplified in being team lead
							at DevBootCamp. Looking to utilize my professional experience as
							an Investment Banking Operations Analyst to support a team of
							developers by leveraging my analytical skills and ability to work
							under pressure.
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
		);
	}
}

export default About;
