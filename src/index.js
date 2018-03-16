import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));
registerServiceWorker();
