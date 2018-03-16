import { createStore } from 'redux';
import reducer from './reducer/index';
import { Provider } from 'react-redux';



const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;