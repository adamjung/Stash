import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
// import css from 'style.css';

import StoreBar from './StoreBar.jsx';
import ItemWindow from './ItemWindow.jsx';

export default class App extends Component {
  constructor(props) {
    // props contains store
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Navbar>
          <div className="title">Stash</div>
        </Navbar>
        <StoreBar />
        <ItemWindow />
      </div>
    );
  }
}