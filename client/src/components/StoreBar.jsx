import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ButtonGroup, Button } from 'react-bootstrap';

import axios from 'axios';
import server from '../../config/serverInfo';
import helpers from './utility/helpers'

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
      return response.data;
    })
    // dispatch new items to redux store
    .then(function(items) {
      this.props.dispatch({
        type: 'UPDATE_CURRENT_SITE',
        site: name,
        items: helpers.formatArrayIntoGrid(items, 4),
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
      <ButtonGroup justified>
        <ButtonGroup>
          <Button type="submit" className="storeBtn" onClick={() => (this.storeClick('haven'))}>Haven</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="submit" className="storeBtn" onClick={() => (this.storeClick('ssense'))}>Ssense</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="submit" className="storeBtn" onClick={() => (this.storeClick('mrPorter'))}>MrPorter</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="submit" className="storeBtn" onClick={() => (this.storeClick('antonioli'))}>Antonioli</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="submit" className="storeBtn" onClick={() => (this.storeClick('maasandstacks'))}>Maas&Stacks</Button>
        </ButtonGroup>
      </ButtonGroup>
    );
  }
}

const mapStateToProps = function(state){
  return {appStore: state};
};

module.exports = connect(mapStateToProps)(StoreBar);
