import Header from "./components/header/Header";
import OrdersKPI from "./components/ordersKPI/OrdersKPI";
import SalesKPI from "./components/salesKPI/salesKPI";
import InstallmentsKPI from "./components/installmentsKPI/InstallmentsKPI";
import PaymentTypesPlot from "./components/paymentTypesPlot/PaymentTypesPlot";
import OrderStatusPlot from "./components/orderStatusPlot/orderStatusPlot";
import PurchasesByDatePlot from "./components/purchasesByDatePlot/PurchasesByDatePlot";
import OrdersByCategoryPlot from "./components/ordersByCategoryPlot/OrdersByCategoryPlot";
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
