import React, {useContext, useEffect, useState} from "react";

const Context = React.createContext();

export function Provider(props) {
  return (
    <Context.Provider value={props.store}>
      {props.children}
    </Context.Provider>
  )
}

export function connect(mapStateToProps = state => state, mapDispatchToProps = {}) {
  return Cmp => {
    return () => {
      const store = useContext(Context);
      const getProps = () => {
        const stateProps = mapStateToProps(store.getState());
        const dispatchProps = bindActionCreators(
          mapDispatchToProps,
          store.dispatch
        );

        return {
          ...stateProps,
          ...dispatchProps
        }
      }

      useEffect(() => {
        store.subscribe(() => {
          setProps({...props, ...getProps()})
        })
      })

      const [props, setProps] = useState({...getProps()});

      return (
        <Cmp {...props}/>
      )
    }
  }
}

function bindActionCreator(creator, dispatch) {
  return (...args) => {
    return dispatch(creator(...args))
  };
}

function bindActionCreators(creators, dispatch) {
  return Object.keys(creators).reduceRight((ret, item) => {
    ret[item] = bindActionCreator(creators[item], dispatch);
    return ret;
  }, {})
}
