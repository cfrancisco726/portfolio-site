import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
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
						<Route exact path="/resume" component={Resume} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
