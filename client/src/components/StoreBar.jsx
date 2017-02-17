import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import server from '../../config/serverInfo';

class StoreBar extends Component {
  constructor(props) {
    super(props);
  }

  storeClick(name, dispatch) {
    // if store is clicked, query the server for corresponding new items
    var url = `${server.url}/newItems/${name}`;
    
    // set loading state
    this.props.dispatch({ type: 'START_LOADING' });

    // fetch new items
    axios.get(url)
    .then(function(response) {
      console.log('response is ',response);
      return response.data;
    })
    // dispatch new items to redux store
    .then(function(items) {
      console.log('successful get from server');
      this.props.dispatch({
        type: 'UPDATE_CURRENT_SITE',
        site: name,
        items: items,
      });
      this.props.dispatch({ type: 'FINISHED_LOADING' });
    }.bind(this))
    .catch(function(error) {
      console.log('error during get to url', url);
      console.log(error);
    })
  }

  render() {
    return (
      // REFACTOR BELOW FOR DRY CODE
      <div className="store-bar">
        <button type="submit" className="storeBtn" onClick={() => (this.storeClick('haven'))}>Haven</button>
        <button type="submit" className="storeBtn" onClick={() => (this.storeClick('ssense'))}>Ssense</button>
        <button type="submit" className="storeBtn" onClick={() => (this.storeClick('mrPorter'))}>MrPorter</button>
        <button type="submit" className="storeBtn" onClick={() => (this.storeClick('antonioli'))}>Antonioli</button>
        <button type="submit" className="storeBtn" onClick={() => (this.storeClick('maasandstacks'))}>Maas&Stacks</button>
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return {appStore: state};
};

module.exports = connect(mapStateToProps)(StoreBar);
