import payments from "../data/payments.json";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import customToolTip from "./utilities/customToolTip";
import colors from "./utilities/colors";
import "./utilities/plotStyles.scss";

function PaymentTypesPlot() {
  let paymentTypes = payments.payment_types;

  return (
    <div className="plot-container">
      <h1 className="plot-container--title">Payment types distribution</h1>
      <ResponsiveContainer width={"90%"} height={"80%"}>
        <BarChart data={paymentTypes}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip cursor={{ fill: colors.mediumBlue, opacity: 0.75 }} content={customToolTip} />
          <Bar dataKey="Count" fill={colors.pink} />
          <XAxis dataKey="Payment type" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PaymentTypesPlot;
