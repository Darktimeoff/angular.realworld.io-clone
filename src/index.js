import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  Routes  from './routes';
import './index.scss'
import Context from './context/Context';
import CurrentUserChecker from './components/currentUserChecker/currentUserChecker';

const App = () => {
	return (
		<Context>
			<CurrentUserChecker>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</CurrentUserChecker>
		</Context>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

