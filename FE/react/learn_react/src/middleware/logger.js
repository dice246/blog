export default function logger({ dispatch, getState }) {
  return dispatch => action => {
    console.log(action.type + "执行了！");
    dispatch(action);
  };
}
