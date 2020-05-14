import { createStore, applyMiddleware, combineReducers, compose } from "../my/redux";
import thunk from "../middleware/thunk";

const reducer = function (state = 0, action) {
  switch (action.type) {
    case 'add':
      const addState = action.val ? state + action.val : state + 1;
      return addState;
    case 'minus':
      return state - 1;
    case 'reset':
      return 0;
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
  reducer,
  applyMiddleware(thunk)
);


