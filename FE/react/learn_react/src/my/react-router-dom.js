import React, { useContext, Component } from "react";
import { createBrowserHistory }from 'history';
import matchPath from './matchPath'

const Context = React.createContext();
const Provider = Context.Provider;
const Consumer = Context.Consumer;

const history = createBrowserHistory();

export class BrowserRouter extends Component {
  constructor(props) {
    super(props);

    this.history = history;
    this.state = {
      location: this.history.location
    }
    this.unlisten = this.history.listen(location => {
      this.setState({ location })
    });
  }

  componentWillUnmount() {
    this.unlisten && this.unlisten();
  }

  render() {
    const { children } = this.props;
    const { location } = this.state;

    return (
      <Provider value={{
        location,
        history: this.history
      }}>
        { children }
      </Provider>
    );
  }
}

export function Route(props) {
  const ctx = useContext(Context);
  const { location }  = ctx;
  const { component, children, path, render } = props;
  const match = matchPath(location.pathname, props);
  console.log("match", match);
  const matchCurrent = match && match.isExact;
  //const matchCurrent = path === location.pathname;
  const cmpProps = { ...ctx, match };
  console.log("render", render);
  if (matchCurrent && typeof children === "function") {
    return children(cmpProps);
  }
  return (
    <>
      {typeof children === "function" && children(cmpProps)}
      {matchCurrent && component
        ? React.createElement(component, cmpProps)
        : null}
      {matchCurrent && !component && render && render(cmpProps)}
    </>
  );
}

export class Link extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();

    const { to } = this.props;
    history.push(to)
  }

  render() {
    const { to, children, ...rest } = this.props;

    return (
      <Consumer>
        {
          ctx => (
            <a href={to} onClick={e => this.handleClick(e, ctx.history)} {...rest}>
              { children }
            </a>
          )
        }
      </Consumer>
    );
  }
}
