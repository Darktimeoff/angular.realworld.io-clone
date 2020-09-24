import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  Routes  from './routes';
import './index.scss'
import Context from './context/Context';







const App = () => {
	return (
		<Context>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Context>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

