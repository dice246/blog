import { createStore, applyMiddleware } from "../my/redux";
import logger from "../middleware/logger";
import thunk from "../middleware/thunk";

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

export const store = createStore(
  reducer,
  applyMiddleware(logger, thunk)
);


