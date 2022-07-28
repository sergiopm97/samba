import orders from "../data/orders.json";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import customToolTip from "./utilities/customToolTip";
import colors from "./utilities/colors";
import "./utilities/plotStyles.scss";

function PurchasesByDatePlot() {
  let purchasesByDate = orders.purchases_by_date;

  return (
    <div className="plot-container">
      <h1 className="plot-container--title">Purchases by date</h1>
      <ResponsiveContainer width={"90%"} height={"80%"}>
        <AreaChart data={purchasesByDate}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip cursor={{ fill: colors.mediumBlue, opacity: 0.75 }} content={customToolTip} />
          <Area dataKey="Count" fill={colors.pink} stroke={colors.pink} />
          <XAxis dataKey="Purchase date" fontSize={12} />
          <YAxis />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PurchasesByDatePlot;
