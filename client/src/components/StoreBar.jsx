import React, { Component } from 'react';

export default class StoreBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // REFACTOR BELOW FOR DRY CODE
      <div className="store-bar">
        <button type="submit" className="storeBtn" onClick={() => (this.props.storeClick('haven'))}>Haven</button>
        <button type="submit" className="storeBtn" onClick={() => (this.props.storeClick('ssense'))}>Ssense</button>
        <button type="submit" className="storeBtn" onClick={() => (this.props.storeClick('mrPorter'))}>MrPorter</button>
        <button type="submit" className="storeBtn" onClick={() => (this.props.storeClick('antonioli'))}>Antonioli</button>
        <button type="submit" className="storeBtn" onClick={() => (this.props.storeClick('maasandstacks'))}>Maas&Stacks</button>
      </div>
    );
  }
}