export function createStore(reducer, enhancer) {

  if (enhancer) {
    return enhancer(createStore)(reducer)
  }

  let currentState = undefined;
  let currentListeners = [];

  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.forEach(v => v());
  }

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    currentListeners.push(listener)
  }

  dispatch({
    type: '@@MY-REDUX'
  })

  return {
    dispatch,
    getState,
    subscribe
  }
}

export function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    let store = createStore(...args);

    const midApi = {
      getState: store.getState,
      dispatch: store.dispatch
    }

    let chain = middlewares.map(mid => mid(midApi));
    let dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch
    }
  }
}

export function compose(...funcs) {
  const len = funcs.length;

  if (len === 0) {
    return args => args
  }

  if (len === 1) {
    return funcs[0]
  }

  // 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
  return funcs.reduce((left, right) => {
    return (...args) => {
      return right(left(...args))
    }
  })
}
