import React, { Component } from 'react';
import { Navbar, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

import HeaderBar from './HeaderBar.jsx';
import StoreBar from './StoreBar.jsx';
import ItemWindow from './ItemWindow.jsx';
import Closet from './Closet.jsx';

import logo from '../../../server/public/images/dungeondoor.png';

export default class App extends Component {
  constructor(props) {
    // props contains store
    super(props);
  }

  render() {
    return (
      <div className="app">
        <HeaderBar />
        <StoreBar />
        <ItemWindow />
        <Closet />
      </div>
    );
  }
}