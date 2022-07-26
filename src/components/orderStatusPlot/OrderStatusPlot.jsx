import orders from "../../data/orders.json";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./OrderStatusPlot.scss";
import colors from "../colors";

function OrderStatusPlot() {
  let orderStatus = orders.order_status;
  orderStatus.length = 3;

  return (
    <div className="order-status-plot-container">
      <h1 className="order-status-plot-container--title">Order status distribution</h1>
      <ResponsiveContainer width={"90%"} height={"80%"}>
        <BarChart data={orderStatus}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip cursor={{ fill: colors.mediumBlue, opacity: 0.75 }} content={<CustomToolTip />} />
          <Bar dataKey="Count" fill={colors.pink} />
          <XAxis dataKey="Order status" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomToolTip({ active, payload, label }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <h1 className="custom-tooltip--title">{label}</h1>
        <h1 className="custom-tooltip--value">{formatPayload(payload[0].value)}</h1>
      </div>
    );
  }
}

function formatPayload(payload) {
  if (payload.toString().length === 5) {
    return payload.toString().substring(0, 2) + "," + payload.toString().substring(2, 6);
  } else if (payload.toString().length === 4) {
    return payload.toString().substring(0, 1) + "," + payload.toString().substring(1, 5);
  } else {
    return payload.toString();
  }
}

export default OrderStatusPlot;
