import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ConfigSelector from './components/ConfigSelector';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<ConfigSelector />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
