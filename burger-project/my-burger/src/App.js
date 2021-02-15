import Aux from "./hoc/Aux";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <Aux>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </Aux>
  );
}

export default App;
