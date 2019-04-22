import React, { Component } from 'react'
import {  Switch, Route } from "react-router-dom";
import Loadable from 'react-loadable';  //  按需加载

import PageConfig from 'routes/pathConfig'

function LoadingComponent() {
  return <div>Loading...</div>
}

const lazyLoad = (src) => {
  return Loadable({
    loader: () => import(`pages/${src}`),
    loading: LoadingComponent 
  });
} 

const ThemeContext = React.createContext('light');

export {
  ThemeContext
}

export default class CustomSwitch extends Component {
  render() {
    return (
      <ThemeContext.Provider value={{a: 1}}>
        <Switch>
          {
            PageConfig.map(item => (
              <Route key={item.path} path={item.path} component={lazyLoad(item.src)} />
            ))
          }
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
