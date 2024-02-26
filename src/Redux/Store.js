import { createStore,applyMiddleware } from 'redux';
import ConterReducer from '../Reducer/ConterReducer';
import ReduxThunk from 'redux-thunk'
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const Store=createStore(ConterReducer, enhancer(applyMiddleware(ReduxThunk)));

export default Store;