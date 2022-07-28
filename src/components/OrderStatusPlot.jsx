import orders from "../data/orders.json";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import customToolTip from "./utilities/customToolTip";
import colors from "./utilities/colors";
import "./utilities/plotStyles.scss";

function OrderStatusPlot() {
  let orderStatus = orders.order_status;
  orderStatus.length = 3;

  return (
    <div className="plot-container">
      <h1 className="plot-container--title">Order status distribution</h1>
      <ResponsiveContainer width={"90%"} height={"80%"}>
        <BarChart data={orderStatus}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip cursor={{ fill: colors.mediumBlue, opacity: 0.75 }} content={customToolTip} />
          <Bar dataKey="Count" fill={colors.pink} />
          <XAxis dataKey="Order status" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OrderStatusPlot;
