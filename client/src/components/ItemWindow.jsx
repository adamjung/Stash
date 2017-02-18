import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemEntry from './ItemEntry';
import Spinner from 'react-spinkit';

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
        <ul>
          {this.props.itemList.map((item,index) =>
            <ItemEntry details={item} key={index}/>
          )}
        </ul>
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