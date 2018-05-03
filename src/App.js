import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/about" component={About} />
						<Route exact path="/projects" component={Projects} />
						<Route exact path="/skills" component={Skills} />
						<Route exact path="/experience" component={Experience} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
