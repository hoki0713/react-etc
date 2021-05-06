import * as actionTypes from "./actionType";

export const addOrderNumber = (orderNumber) => {
  return {
    type: actionTypes.ADD_ORDER_NUMBER,
    orderNumber: orderNumber,
  };
};

export const addOrderType = (orderType) => {
  return {
    type: actionTypes.ADD_ORDER_TYPE,
    orderType: orderType,
  };
};

export const addRequestNumber = (requestNumber) => {
  return {
    type: actionTypes.ADD_REQUEST_NUMBER,
    requestNumber: requestNumber,
  };
};

export const addProcessType = (processType) => {
  return {
    type: actionTypes.ADD_PROCESS_TYPE,
    processType: processType,
  };
};
