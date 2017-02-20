import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemEntry from './ItemEntry';
import Spinner from 'react-spinkit';

import { Grid, Row, Col } from 'react-bootstrap';
import helpers from './utility/helpers'

// export default class ItemWindow extends Component {
class ItemWindow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let loadingSpinner = null;
    let windowItems = null;

    if (this.props.isLoading) {
      loadingSpinner = (<Spinner spinnerName="circle" noFadeIn/>);
      windowItems = null;
    } else {
      loadingSpinner = null;
      windowItems = (
        <Grid>
          {this.props.itemList.map((row, rowIndex) => 
            <Row className="itemWindowRow" key={rowIndex}>
              {row.map((item, colIndex) =>
                <Col xs={3} md={3} className="itemWindowCol" key={colIndex}>
                  <ItemEntry details={item}/>
                </Col>
              )}
            </Row>
          )}
        </Grid>
      );
    }
    
    return (
      <div className="item-window">
        {loadingSpinner}
        {windowItems}
      </div>
    );
  }
};

var mapStateToProps = function(state){
  return {itemList: state.current.items,
          isLoading: state.isLoading };
};

module.exports = connect(mapStateToProps)(ItemWindow);