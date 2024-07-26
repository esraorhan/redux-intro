import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux"; //redux a bağlanmamızı sağlaayacak.


 class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
         <button
          onClick={(e) => {
            this.props.dispatch(increaseByTwoCounter());
          }}
        >
          2 arttır
        </button>
      </div>
    )
  }
}


function mapDispathcToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) };

  //bu kodda counteraction içindeki fonk. çağırmış olduk.
}

export default connect(mapDispathcToProps)(IncreaseByTwoCounter);
