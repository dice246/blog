export const add = (payload) => {
  return {
    type: 'add',
    val: payload
  }
}

export const minus = () => {
  return {
    type: 'minus'
  }
}

export const reset = () => {
  return {
    type: 'reset'
  }
}

export const asyAdd = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: 'add'
    })
  },1000)
}
