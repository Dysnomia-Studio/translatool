import React from 'react';
import { createRoot } from 'react-dom/client';

import Index from './Index';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Index />
	</React.StrictMode>
);