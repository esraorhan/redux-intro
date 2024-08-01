import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { increaseByTenCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux"; //redux a bağlanmamızı sağlaayacak.


 class IncreaseByTenCounter extends Component {
  render() {
    return (
      <div>
           <button
          onClick={(e) => {
            this.props.dispatch(increaseByTenCounter());
          }}
        >
          10 arttır
        </button>
      </div>
    )
  }
}

function mapDispathcToProps(dispatch) {
    return { actions: bindActionCreators(increaseByTenCounter, dispatch) };
  
    //bu kodda counteraction içindeki fonk. çağırmış olduk.
  }
  
  export default connect(mapDispathcToProps)(IncreaseByTenCounter);
  
