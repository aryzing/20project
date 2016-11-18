import React from 'react'
import Head from './Head'

export default class Main extends React.Component {
  render() {
    return (
      <html>
        <Head title='React and CSS Modules' />
        <body>
          {/* This is where our content for various pages will go */}
          {this.props.children}
        </body>
      </html>
    )
  }
}
