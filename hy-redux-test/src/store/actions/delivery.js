import * as actionTypes from "./actionType";

export const addOrderCompany = (orderCompany) => {
  return {
    type: actionTypes.ADD_ORDER_COMPANY,
    orderCompany: orderCompany,
  };
};

export const addOrderEmployee = (orderEmployee) => {
  return {
    type: actionTypes.ADD_ORDER_EMPLOYEE,
    orderEmployee: orderEmployee,
  };
};
