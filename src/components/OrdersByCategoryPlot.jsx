import products from "../data/products.json";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import customToolTip from "./utilities/customToolTip";
import colors from "./utilities/colors";
import "./utilities/plotStyles.scss";

function OrdersByCategoryPlot() {
  let ordersByCategory = products.product_categories;
  ordersByCategory.length = 5;

  return (
    <div className="plot-container">
      <h1 className="plot-container--title">Orders by category</h1>
      <ResponsiveContainer width={"90%"} height={"80%"}>
        <BarChart data={ordersByCategory}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip cursor={{ fill: colors.mediumBlue, opacity: 0.75 }} content={customToolTip} />
          <Bar dataKey="Count" fill={colors.pink} stroke={colors.pink} />
          <XAxis dataKey="Product category" fontSize={12} />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OrdersByCategoryPlot;
