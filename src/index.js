import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  Routes  from './routes';
import './index.scss'
import NavDefault from './components/navBar/navDefault/navDefault';
//import NavAuth from './components/navBar/navAuth/navAuth';






const App = () => {
	return (
		<>
			<BrowserRouter>
				<NavDefault />
				<Routes />
			</BrowserRouter>
		</>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

