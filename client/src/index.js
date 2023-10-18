import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/css/index.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);