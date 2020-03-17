import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers/index';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// import createSagaMiddleware from 'react-saga';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
// const sagaMiddleware = createSagaMiddleware();
const middlewares = [routeMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  // sagaMiddleware.run(rootSaga);
  return store;
}
export { history };
