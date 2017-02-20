import React, { Component } from 'react';
import { Image } from 'react-bootstrap';


export default class ItemEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item-entry">
        <Image src={this.props.details.image} responsive/>
      </div>
    );
  }
}