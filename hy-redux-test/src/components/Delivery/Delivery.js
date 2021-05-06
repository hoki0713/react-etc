import { useDispatch, useSelector } from "react-redux";

import "./Delivery.css";
import Input from "../UI/Input/Input";
import * as actions from "../../store/actions/index";

const Delivery = (props) => {
  const dispatch = useDispatch();
  const orderCompany = useSelector((state) => state.delivery.orderCompany);
  const orderEmployee = useSelector((state) => state.delivery.orderEmployee);

  const processType = useSelector((state) => state.order.processType);

  const setOrderCompany = (orderCompany) => {
    dispatch(actions.addOrderCompany(orderCompany));
  };

  const setOrderEmployee = (orderEmployee) => {
    dispatch(actions.addOrderEmployee(orderEmployee));
  };

  return (
    <div className="Delivery">
      <Input
        elementtype="input"
        label="주문업체"
        value={orderCompany}
        changed={(e) => setOrderCompany(e.target.value)}
      />
      <Input
        elementtype="input"
        label="담당자"
        value={orderEmployee}
        changed={(e) => setOrderEmployee(e.target.value)}
      />
      <p>{processType}</p>
    </div>
  );
};

export default Delivery;
