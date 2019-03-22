import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'normalize.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Repositorys from './container/Repositorys';
import { store } from './store';
import './styles.scss';

function App() {
	const [ state, setstate ] = useState('accesstoken');
	return (
		<Provider store={store}>
			<Repositorys />
			{/* {sessionStorage.getItem('accesstoken') !== null ? (
				<Repositorys />
			) : (
				<Authenitcation props={state} state={setstate} />
			)} */}
		</Provider>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
