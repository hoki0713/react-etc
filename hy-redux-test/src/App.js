import { Switch, Route } from "react-router-dom";
import "./App.css";

import OrderSetting from "./containers/OrderSetting/OrderSetting";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={OrderSetting} />
      </Switch>
    </div>
  );
}

export default App;
