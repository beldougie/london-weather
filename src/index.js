import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './assets/styles/weather-icons.css';
import './assets/styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';

render(
	<Provider store={createStore({})}>
  	<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
