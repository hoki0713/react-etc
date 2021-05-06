import { useDispatch, useSelector } from "react-redux";

import "./Order.css";
import Input from "../UI/Input/Input";
import * as actions from "../../store/actions";

const Order = (props) => {
  const dispatch = useDispatch();

  const orderNumber = useSelector((state) => state.order.orderNumber);
  const orderType = useSelector((state) => state.order.orderType);
  const requestNumber = useSelector((state) => state.order.requestNumber);
  const processType = useSelector((state) => state.order.processType);

  const orderOptions = {
    domestic: {
      value: "domestic",
      text: "국내",
    },
    import: {
      value: "import",
      text: "수입",
    },
    export: {
      value: "export",
      text: "수출",
    },
  };
  const processOptions = {
    new: {
      value: "new",
      text: "신규",
    },
    consignment: {
      value: "consignment",
      text: "위탁수락",
    },
    bidding: {
      value: "bidding",
      text: "입찰화물",
    },
    award: {
      value: "award",
      text: "낙칠",
    },
    accept: {
      value: "accept",
      text: "정찰화물수락",
    },
  };

  const setOrderNumber = (orderNumber) => {
    dispatch(actions.addOrderNumber(orderNumber));
  };

  const setOrderType = (orderType) => {
    dispatch(actions.addOrderType(orderType));
  };

  const setRequestNumber = (requestNumber) => {
    dispatch(actions.addRequestNumber(requestNumber));
  };

  const setProcessType = (processType) => {
    dispatch(actions.addProcessType(processType));
  };

  return (
    <div className="Order">
      <Input
        elementtype="input"
        label="운송주문번호"
        value={orderNumber}
        changed={(e) => setOrderNumber(e.target.value)}
      />

      <Input
        elementtype="select"
        label="국내/외"
        options={orderOptions}
        value={orderType}
        changed={(e) => setOrderType(e.target.value)}
      />

      <Input
        elementtype="input"
        label="배차의뢰번호"
        value={requestNumber}
        changed={(e) => setRequestNumber(e.target.value)}
      />

      <Input
        elementtype="select"
        label="진행상태"
        options={processOptions}
        value={processType}
        changed={(e) => setProcessType(e.target.value)}
      />
    </div>
  );
};

export default Order;
