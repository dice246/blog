import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

const reducer = function (state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}

const reducer2 = function (state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    counter: reducer,
    counter2: reducer2
  }),
  composeEnhancers(
    applyMiddleware(thunk)
  )
);


