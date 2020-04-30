import React, { Component } from 'react';

class Skills extends Component {
	render() {
		return (
        <figure className="icon">
            <a
                href="https://drive.google.com/file/d/1-G0wMrSoaSyznbsxCHbyyQLF9gLV51vz/view?usp=sharing"
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
		);
	}
}

export default Skills;
