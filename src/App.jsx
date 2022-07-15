import Header from "./components/header/Header";
import OrdersKPI from "./components/ordersKPI/OrdersKPI";
import SalesKPI from "./components/salesKPI/salesKPI";
import InstallmentsKPI from "./components/installmentsKPI/InstallmentsKPI";
import PaymentTypesPlot from "./components/paymentTypesPlot/PaymentTypesPlot";
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
        <PaymentTypesPlot />
      </div>
    </>
  );
}

export default App;
