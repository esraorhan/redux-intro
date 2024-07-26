import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux"; //redux a bağlanmamızı sağlaayacak.

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseCounter());
          }}
        >
          1 arttır
        </button>
      </div>
    );
  }
}

function mapDispathcToProps(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) };

  //bu kodda counteraction içindeki fonk. çağırmış olduk.
}

export default connect(mapDispathcToProps)(IncreaseCounter);
