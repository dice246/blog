import Component from './Component'

function createElement(type, props, ...children) {
  props.children = children;

  let vtype;

  if (typeof type === 'string') {
    vtype = 1
  }

  if (typeof type === 'function') {
    vtype = type.isReactComponent ? 3 : 2
  }

  return {
    vtype,
    type,
    props
  }
}

const React = {
  createElement,
  Component
}

export default React
