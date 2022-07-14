import Header from "./components/header/Header";
import OrdersKPI from "./components/ordersKPI/OrdersKPI";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="kpis-container">
        <OrdersKPI />
      </div>
    </>
  );
}

export default App;
