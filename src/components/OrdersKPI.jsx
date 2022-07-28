import payments from "../data/payments.json";
import "./utilities/kpiStyles.scss";

function OrdersKPI() {
  const thousands = payments.number_of_orders.toString().substring(0, 2);
  const hundreds = payments.number_of_orders.toString().substring(2, 6);

  return (
    <div className="kpi-container">
      <h1 className="kpi-container--title">Number of orders</h1>
      <h1 className="kpi-container--value">{thousands + "," + hundreds}</h1>
    </div>
  );
}

export default OrdersKPI;
