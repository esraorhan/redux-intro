import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { decreaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux"; //redux a bağlanmamızı sağlaayacak.

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(decreaseCounter());
          }}
        >
          1 eksilt
        </button>
      </div>
    );
  }
}

function mapDispathcToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCounter, dispatch) };
  //bu kodda counteraction içindeki fonk. çağırmış olduk.
}

export default connect(mapDispathcToProps)(DecreaseCounter);
