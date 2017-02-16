import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemEntry from './ItemEntry';

// export default class ItemWindow extends Component {
class ItemWindow extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="item-window">
        <ul>
          {this.props.itemList.map((item,index) =>
            <ItemEntry details={item} key={index}/>
          )}
        </ul>
      </div>
    );
  }
};

var mapStateToProps = function(state){
  return {itemList: state.current.items};
};

module.exports = connect(mapStateToProps)(ItemWindow);