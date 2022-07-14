import Header from "./components/header/Header";
import OrdersKPI from "./components/ordersKPI/OrdersKPI";
import SalesKPI from "./components/salesKPI/salesKPI";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="kpis-container">
        <OrdersKPI />
        <SalesKPI />
      </div>
    </>
  );
}

export default App;
