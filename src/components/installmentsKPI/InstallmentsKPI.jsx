import payments from "../../data/payments.json";
import "./InstallmentsKPI.scss";

function InstallmentsKPI() {
  return (
    <div className="installments-kpi-container">
      <h1 className="installments-kpi-container--title">Avg of installments</h1>
      <h1 className="installments-kpi-container--value">{payments.avg_installments.toFixed(2)}</h1>
      <h1 className="installments-kpi-container--unit">per order</h1>
    </div>
  );
}

export default InstallmentsKPI;
