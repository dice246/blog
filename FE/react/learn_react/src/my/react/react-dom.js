function render(vnode, container) {
   console.log('render: ', vnode);

   mount(vnode, container);
}

function mount(vnode, container) {
  const { vtype } = vnode;

  if (!vtype) { // 文本节点
    mountTextNode(vnode, container)
  }

  if (vtype === 1) {  // html节点
    mountHtml(vnode, container)
  }

  if (vtype === 2) {  // function组件
    mountFunction(vnode, container)
  }

  if (vtype === 3) {  // class组件
    mountClass(vnode, container)
  }
}

function mountTextNode(vnode, container) {
  const node = document.createTextNode(vnode);

  container.appendChild(node)
}

function mountHtml(vnode, container) {
  const { type, props } = vnode;
  let node = document.createElement(type);

  const { children, ...rest } = props;

  children.map(item => {
    if (Array.isArray(item)) {
      item.map(c => mount(c, node))
    } else {
      mount(item, node)
    }
  })

  Object.keys(rest).forEach(item => {
    if (item === 'className') {
      node.setAttribute('class', rest[item])
    }

    if (item.slice(0, 2) === 'on') {
      node.addEventListener('click', rest[item])
    }
  })

  container.appendChild(node)
}

function mountFunction(vnode, container) {
  const { type, props } = vnode;
  const node = new type(props);
  mount(node, container)
}

function mountClass(vnode, container) {
  const { type, props } = vnode;
  const cmp = new type(props);
  const node = cmp.render();
  mount(node, container);
}

export default {
  render
}
