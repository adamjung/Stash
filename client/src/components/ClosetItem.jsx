import React, { Component } from 'react';
import { Image, ButtonGroup, Button } from 'react-bootstrap';

export default class ClosetItem extends Component {
  constructor(props) {
    super(props);
    this.onBuyClick = this.onBuyClick.bind(this);
    this.onStashClick = this.onStashClick.bind(this);
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
              <Button onClick={this.onBuyClick}>{this.props.buttonText1}</Button>
            </ButtonGroup>
            <ButtonGroup className="button-stash">
              <Button onClick={this.onStashClick}>{this.props.buttonText2}</Button>
            </ButtonGroup>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}