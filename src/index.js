import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  Routes  from './routes';





const App = () => {
	return (
		<div>
			<h3>Welcome to hooks</h3>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

