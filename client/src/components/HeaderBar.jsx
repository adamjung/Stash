import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, 
         ButtonGroup, 
         Button, 
         Image } from 'react-bootstrap';
import server from '../../config/serverInfo';
import helpers from './utility/helpers'

import Closet from './Closet.jsx';
import logo from 'images/dungeondoor.png';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.closetClick = this.closetClick.bind(this);
  }

  closetClick() {
    this.props.dispatch({type: 'SHOW_CLOSET'});
  }

  render() {
    return (
      <Navbar className="nav-bar">
        <div className="title">
          <Image src={logo} className="logo"/>
          <span className="titleText">Stash</span>
          <div className="closetText" onClick={this.closetClick}>Closet</div>
        </div>
      </Navbar>
    );
  }
}

const mapStateToProps = function(state){
  return {appStore: state};
};

module.exports = connect(mapStateToProps)(HeaderBar);