import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="btn-group btn-group-justified pad" roleName="group">
        <div className="btn-group" roleName="group">
          <button typeName="button" className="btn btn-default" onClick={this.props.play.bind(this, 'Rock')}>R</button>
        </div>
        <div className="btn-group" roleName="group">
          <button typeName="button" className="btn btn-default" onClick={this.props.play.bind(this, 'Paper')}>P</button>
        </div>
        <div className="btn-group" roleName="group">
          <button typeName="button" className="btn btn-default" onClick={this.props.play.bind(this, 'Scissors')}>S</button>
        </div>
      </div>
    )
  }
}
