import React from 'react'

export default class Head extends React.Component {
  render() {
    return (
      <head>
        <title>{this.props.title}</title>
        <link href="/build/styles.css" rel="stylesheet" />
      </head>
    )
  }
}
