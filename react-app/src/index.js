import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import './index.css';
import * as sessionActions from './store/session';

const store = configureStore();

function Root() {
	return (
		<Provider store={store}>
			<ModalProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ModalProvider>
		</Provider>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById('root')
);
