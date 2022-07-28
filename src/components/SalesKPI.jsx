import payments from "../data/payments.json";
import "./utilities/kpiStyles.scss";

function SalesKPI() {
  const millions = payments.total_sales.toString().substring(0, 2);
  return (
    <div className="kpi-container">
      <h1 className="kpi-container--title">Total sales</h1>
      <h1 className="kpi-container--value">{millions} million</h1>
      <h1 className="kpi-container--unit">€</h1>
    </div>
  );
}

export default SalesKPI;
