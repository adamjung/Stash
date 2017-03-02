import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Modal } from 'react-bootstrap';

import ClosetItem from './ClosetItem.jsx';
import helpers from './utility/helpers'

export default class Closet extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.props.dispatch({type: 'HIDE_CLOSET'});
  }

  render() {
    var body = (<div className="empty-closet-msg">Stash is Empty</div>);
    var closetItems = helpers.formatArrayIntoGrid(this.props.closet.items, 4);
    if (closetItems.length > 0) {
      body = (<Grid>
               {closetItems.map((row, rowIndex) =>
                 <Row className="closetWindowRow" key={rowIndex}>
                   {row.map((item, colIndex) =>
                     <Col xs={3} md={3} className="closetWindowCol" key={colIndex}>
                       <ClosetItem details={item} index={rowIndex*4+colIndex}/>
                     </Col>
                   )}
                 </Row>
               )}
             </Grid>);
    }

    return (
      <Modal show={this.props.closet.show} 
             onHide={this.hideModal} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Closet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body}
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = function(state){
  return {closet: state.closet};
};

module.exports = connect(mapStateToProps)(Closet);