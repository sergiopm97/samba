import payments from "../../data/payments.json";
import "./SalesKPI.scss";

function SalesKPI() {
  const millions = payments.total_sales.toString().substring(0, 2);
  return (
    <div className="sales-kpi-container">
      <h1 className="sales-kpi-container--title">Total sales</h1>
      <h1 className="sales-kpi-container--value">{millions} million</h1>
      <h1 className="sales-kpi-container--unit">€</h1>
    </div>
  );
}

export default SalesKPI;
