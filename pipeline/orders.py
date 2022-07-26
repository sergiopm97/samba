import pandas as pd
import json

from utilities import format_payment_values


if __name__ == "__main__":

    orders_df = pd.read_csv("pipeline/raw_data/orders_data.csv")

    order_status = (
        orders_df["order_status"]
        .value_counts()
        .reset_index()
        .rename(columns={"index": "Order status", "order_status": "Count"})
    )

    order_status["Order status"] = order_status.apply(
        lambda x: format_payment_values(x["Order status"]), axis=1
    )

    orders_json = json.dumps(
        {
            "order_status": json.loads(order_status.to_json(orient="records")),
        }
    )

    with open("src/data/orders.json", "w") as orders_file:
        orders_file.write(orders_json)
