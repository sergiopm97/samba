import payments from "../data/payments.json";
import "./utilities/kpiStyles.scss";

function InstallmentsKPI() {
  return (
    <div className="kpi-container">
      <h1 className="kpi-container--title">Avg of installments</h1>
      <h1 className="kpi-container--value">{payments.avg_installments.toFixed(2)}</h1>
      <h1 className="kpi-container--unit">per order</h1>
    </div>
  );
}

export default InstallmentsKPI;
