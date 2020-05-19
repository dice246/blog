import React from "react";
import { Route, Redirect } from 'react-router-dom'

export function AuthRoute(props) {
  const { component: Cmp, isLogin, ...rest} = props;

  console.log(props);

  function check(props) {
    console.log(isLogin);
    if (isLogin) {
      return(
        <Cmp {...props}/>
      )
    } else {
      return (
        <Redirect to={{pathname: '/login'}}/>
      )
    }
  }

  return(
    <div>
      <Route
        {...rest}
        render={props => {
          return isLogin ? (
            <Cmp {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }}
      />
    </div>
  )
}
