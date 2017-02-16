import React, { Component } from 'react';

export default class ItemEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item-entry">
        <img src={this.props.details.image}/>
      </div>
    );
  }
}