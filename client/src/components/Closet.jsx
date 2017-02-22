import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Modal } from 'react-bootstrap';
import ItemEntry from './ItemEntry.jsx';

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
    
    if (this.props.closet.items.length > 0) {
      body = this.props.closet.items.map((item,index) => {
        <ItemEntry details={item} key={index}/>
      });
    }

    return (
      <Modal {...this.props} show={this.props.closet.show} 
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