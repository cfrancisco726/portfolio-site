import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class About extends Component {
	componentDidMount() {
		var elem = document.querySelectorAll('.modal');
		var instance = M.Modal.init(elem, {
			opacity: 0.6
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
							width="30%"
						/>
						<p>
							Full Stack Developer with 8 years of experience in Investment
							Banking Operations and 4 years playing Poker professionally. The
							analytical skills I acquired from working in finance along with
							the problem solving techniques needed in poker, have strongly
							influenced the way I approach programming. Poker is about looking
							at every angle, building a story, and solving a puzzle, much like
							coding. I loved figuring out my opponent just like I obsess about
							how to put pieces of an app together. In 2017, I graduated from
							DevBootCamp in NYC. The experience has fed my thirst for coding.
							Currently developing my skills in Javascript, React, MongoDB,
							Node.js and Express. I am interested in joining a team where I can
							continue to grow and contribute as a developer.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
