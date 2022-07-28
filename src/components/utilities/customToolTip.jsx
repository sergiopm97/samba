import formatPayload from "./formatPayload";

function customToolTip({ active, payload, label }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <h1 className="custom-tooltip--title">{label}</h1>
        <h1 className="custom-tooltip--value">{formatPayload(payload[0].value)}</h1>
      </div>
    );
  }
}

export default customToolTip;
