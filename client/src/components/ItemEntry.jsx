import React, { Component } from 'react';
import { Image, ButtonGroup, Button } from 'react-bootstrap';

export default class ItemEntry extends Component {
  constructor(props) {
    super(props);
    this.onBuyClick.bind(this);
    this.onStashClick.bind(this);
  }

  onBuyClick() {
    console.log("BUY");
  }

  onStashClick() {
    console.log("STASH");
  }

  render() {
    return (
      <div className="item-entry">
        <Image className="item-image" src={this.props.details.image} responsive/>
        <div className="item-hoverContent">
          <div className="item-textContent">
            <div>{this.props.details.brand}</div>
            <div>{this.props.details.text}</div>
            <div>{this.props.details.price}</div>
          </div>
          <ButtonGroup className="button-buy-stash" justified>
            <ButtonGroup className="button-buy">
              <Button onClick={this.onBuyClick}>Buy</Button>
            </ButtonGroup>
            <ButtonGroup className="button-stash">
              <Button onClick={this.onStashClick}>Stash</Button>
            </ButtonGroup>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}