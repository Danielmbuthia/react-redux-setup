import { combineReducers } from 'redux';
import sliderReducer from './sliderReducers';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const appReducers = combineReducers(
  Object.assign({ router: connectRouter(history) }, sliderReducer)
);
const rootReducer = (state, action) => {
  return appReducers(state, action);
};

export default rootReducer;
