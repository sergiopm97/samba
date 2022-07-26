import orders from "../../data/orders.json";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./PurchasesByDatePlot.scss";
import colors from "../colors";

function PurchasesByDatePlot() {
  let purchasesByDate = orders.purchases_by_date;

  return (
    <div className="purchases-date-plot-container">
      <h1 className="purchases-date-plot-container--title">Purchases by date</h1>
      <ResponsiveContainer width={"90%"} height={"80%"}>
        <AreaChart data={purchasesByDate}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip cursor={{ fill: colors.mediumBlue, opacity: 0.75 }} content={<CustomToolTip />} />
          <Area dataKey="Count" fill={colors.pink} stroke={colors.pink} />
          <XAxis dataKey="Purchase date" fontSize={12} />
          <YAxis />
        </AreaChart>
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

export default PurchasesByDatePlot;
