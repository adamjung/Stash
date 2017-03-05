import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import server from '../../config/serverInfo';

export default class ItemEntry extends Component {
  constructor(props) {
    super(props);
    this.onBuyClick = this.onBuyClick.bind(this);
    this.onStashClick = this.onStashClick.bind(this);
  }

  onBuyClick() {
    open(this.props.details.link);
  }

  onStashClick() {
    // remove item from closet
    this.props.dispatch({type: 'REMOVE_FROM_CLOSET', index: this.props.index});
    // remove item from server
    let url = `/items/${this.props.details.id}`;
    axios.delete(url)
    .catch(function(error) {
      console.log('error during delete to closet route', url);
      console.log(error);
    });
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
              <Button onClick={this.onStashClick}>Remove</Button>
            </ButtonGroup>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

var mapStateToProps = function(state){
  return {currentUser: state.user};
};

module.exports = connect(mapStateToProps)(ItemEntry);