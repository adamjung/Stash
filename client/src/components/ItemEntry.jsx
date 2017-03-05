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
    var insert = Object.assign({}, this.props.details,
                               {userId: this.props.currentUser.id});
    // post item to server
    let url = `/items`;
    axios.post(url, insert)
    .then(function(response) {
      this.props.dispatch({type: 'ADD_TO_CLOSET', insert: response.data});
    }.bind(this))
    .catch(function(error) {
      console.log('error during post to closet route', url);
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
              <Button onClick={this.onStashClick}>Stash</Button>
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