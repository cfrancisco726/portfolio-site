import React, { Component } from 'react';
import Landing from './components/Landing';
import './App.css';
import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

const trackingId = "UA-159306779-1"; 
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
})

class App extends Component {
	render() {
		return (
			<div>
				<Landing />
			</div>
		);
	}
}
export default App;
