import Header from "./components/Header";
import OrdersKPI from "./components/OrdersKPI";
import SalesKPI from "./components/SalesKPI";
import InstallmentsKPI from "./components/InstallmentsKPI";
import PaymentTypesPlot from "./components/PaymentTypesPlot";
import OrderStatusPlot from "./components/OrderStatusPlot";
import PurchasesByDatePlot from "./components/PurchasesByDatePlot";
import OrdersByCategoryPlot from "./components/OrdersByCategoryPlot";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <OrdersKPI />
        <SalesKPI />
        <InstallmentsKPI />
      </div>
      <div className="dashboard-container">
        <PaymentTypesPlot />
        <OrderStatusPlot />
      </div>
      <div className="dashboard-container">
        <PurchasesByDatePlot />
      </div>
      <div className="dashboard-container">
        <OrdersByCategoryPlot />
      </div>
    </>
  );
}

export default App;
