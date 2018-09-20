import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './reducers';

export default function configureStore(initialState) {
  const middleware = [thunk, promise];
	const enhancer = compose.apply(null, [applyMiddleware(...middleware)]);
	return createStore(reducers, initialState, enhancer);
}
