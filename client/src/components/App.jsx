import React, { Component } from 'react';
import { Navbar, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import server from '../../config/serverInfo';

import helpers from './utility/helpers'
import HeaderBar from './HeaderBar.jsx';
import StoreBar from './StoreBar.jsx';
import ItemWindow from './ItemWindow.jsx';
import Closet from './Closet.jsx';

export default class App extends Component {
  constructor(props) {
    // props contains store
    super(props);
  }

  componentWillMount(){
    // If user is logged in, GET user's closet from server
    let url = `/items/${this.props.currentUser.id}`
    axios.get(url)
    .then(function(response) {
      this.props.dispatch({
        type: 'LOAD_CLOSET',
        load: response.data
      })
    }.bind(this))
    .catch(function(error) {
      console.log('error during get to url', url);
      console.log(error);
    });
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

var mapStateToProps = function(state){
  return {currentUser: state.user};
};

module.exports = connect(mapStateToProps)(App);