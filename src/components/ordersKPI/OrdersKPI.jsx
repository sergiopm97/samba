import payments from "../../data/payments.json";
import "./OrdersKPI.scss";

function OrdersKPI() {
  const thousands = payments.number_of_orders.toString().substring(0, 2);
  const hundreds = payments.number_of_orders.toString().substring(2, 6);

  return (
    <div className="orders-kpi-container">
      <h1 className="orders-kpi-container--title">Number of orders</h1>
      <h1 className="orders-kpi-container--value">{thousands + "," + hundreds}</h1>
    </div>
  );
}

export default OrdersKPI;
