export default function thunk({ dispatch, getState }) {
  return dispatch => action => {

    if(typeof action === 'function') {
      return action(dispatch, getState);
    }

    return dispatch(action);
  };
}
