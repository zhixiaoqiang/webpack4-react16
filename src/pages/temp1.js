import React, { Component } from 'react'
// import DD from 'components/div'
import { ThemeContext } from 'routes'

export default class Temp extends Component {
  // static contextType = ThemeContext
  render () {
    console.warn(this.context)
    return (
      <div>
          111
        <ThemeContext.Consumer>
          {value => console.warn(value)}
        </ThemeContext.Consumer>
      </div>
    )
  }
}

Temp.contextType = ThemeContext