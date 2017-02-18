import React, { Component } from 'react';
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
        <div className="logo">Stash</div>
        <StoreBar />
        <ItemWindow />
      </div>
    );
  }
}