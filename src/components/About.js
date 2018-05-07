import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class About extends Component {
	componentDidMount() {
		var elem = document.querySelectorAll('.modal');
		var instance = M.Modal.init(elem, {
			opacity: 0.5
		});
	}
	render() {
		return (
			<div>
				<figure>
					<a className="modal-trigger" href="#modal1">
						<img src={require('../images/about.svg')} alt="about" width="70%" />
						<figcaption>skills</figcaption>
					</a>
					<div id="modal1" className="modal">
						<div className="modal-content .modal-close">
							<h4>About Header</h4>
							<p>''</p>
						</div>
						<div className="modal-footer btn .modal-close">
							<button className="modal-close">x</button>
						</div>
					</div>
				</figure>
			</div>
		);
	}
}

export default About;
