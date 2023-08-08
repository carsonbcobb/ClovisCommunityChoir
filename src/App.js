import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './sections/home/home';
import Events from './sections/events/events.jsx';
import Contact from './sections/contact/contact';
import About from './sections/about/about';
import Director from './sections/director/director';
import Accompanist from './sections/accompanist/accompanist';
import History from './sections/history/history';
import './App.scss';

function App() {
	useEffect(() => {
		window.location.href = 'https://choirofthevalley.com';
	}, []);

	return null; // No need to render anything since we are redirecting immediately
}

export default App;
