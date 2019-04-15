import React, { Component } from 'react'
import {  Switch, Route } from "react-router-dom";
import Loadable from 'react-loadable';  //  按需加载

import PageConfig from 'routes/pagePath'

function LoadingComponent() {
  return <div>Loading...</div>
}

const lazyLoad = (src) => {
  return Loadable({
    loader: () => import(`views/${src}`),
    loading: LoadingComponent 
  });
} 

export default class CustomSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Switch>
      {
        PageConfig.map((item,index) => (
          <Route path={item.path} component={lazyLoad(item.src)} />
        ))
      }
      </Switch>
    )
  }
}
