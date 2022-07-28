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

    purchases_by_date = (
        orders_df.apply(lambda x: x["order_purchase_timestamp"][0:10], axis=1)
        .value_counts()
        .reset_index()
        .rename(columns={"index": "Purchase date", 0: "Count"})
        .sort_values(by="Purchase date")
    )

    orders_json = json.dumps(
        {
            "order_status": json.loads(order_status.to_json(orient="records")),
            "purchases_by_date": json.loads(
                purchases_by_date.to_json(orient="records")
            ),
        }
    )

    with open("src/data/orders.json", "w") as orders_file:
        orders_file.write(orders_json)
