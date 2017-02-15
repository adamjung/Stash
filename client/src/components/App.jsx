import React, { Component } from 'react';

import StoreBar from './StoreBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.storeClick = this.storeClick.bind(this);
  }
  storeClick(name) {
    console.log(name, 'clicked yo');
    // if store is clicked, query the server for corresponding new items
    var url = `${name}`;
  }
  render() {
    return (
      <div className="app">
        <div className="logo">STASH</div>
        <StoreBar storeClick={this.storeClick}/>
      </div>
    );
  }
}