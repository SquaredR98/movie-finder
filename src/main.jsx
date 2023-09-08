import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App.jsx';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
