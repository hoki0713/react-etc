import * as actionTypes from "../actions/actionType";

const initialState = {
  orderNumber: "",
  orderType: "",
  requestNumber: "",
  processType: "",
};

const addOrderNumber = (state, action) => {
  console.log(state);
  return {
    ...state,
    orderNumber: action.orderNumber,
  };
};

const addOrderType = (state, action) => {
  return {
    ...state,
    orderType: action.orderType,
  };
};

const addRequestNumber = (state, action) => {
  return {
    ...state,
    requestNumber: action.requestNumber,
  };
};

const addProcessType = (state, action) => {
  return {
    ...state,
    processType: action.processType,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER_NUMBER:
      return addOrderNumber(state, action);
    case actionTypes.ADD_ORDER_TYPE:
      return addOrderType(state, action);
    case actionTypes.ADD_REQUEST_NUMBER:
      return addRequestNumber(state, action);
    case actionTypes.ADD_PROCESS_TYPE:
      return addProcessType(state, action);
    default:
      return state;
  }
};

export default reducer;
