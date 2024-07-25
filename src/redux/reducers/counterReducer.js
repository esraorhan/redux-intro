import * as actionTypes from "../actions/actionTypes";
// reducerin içerisinde tamamen state yöentimi yapılır.api vs işlemleri yapılmaz.

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }
}; 
// javascript Immutability
export default counterReducer;