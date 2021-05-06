import "./OrderSetting.css";
import Order from "../../components/Order/Order";
import Delivery from "../../components/Delivery/Delivery";

const OrderSetting = (props) => {
  return (
    <div className="OrderSetting">
      <Order />
      <Delivery />
    </div>
  );
};

export default OrderSetting;
