import pandas as pd
import json

from utilities import format_payment_values


if __name__ == "__main__":

    payments_df = pd.read_csv("pipeline/raw_data/payments_data.csv")

    number_of_orders = len(payments_df.drop_duplicates(subset=["order_id"]))
    total_sales = payments_df["payment_value"].sum()
    avg_installments = payments_df["payment_installments"].mean()

    payment_types = (
        payments_df["payment_type"]
        .value_counts()
        .reset_index()
        .rename(columns={"index": "Payment type", "payment_type": "Count"})
    )

    payment_types["Payment type"] = payment_types.apply(
        lambda x: format_payment_values(x["Payment type"]), axis=1
    )

    payments_json = json.dumps(
        {
            "number_of_orders": number_of_orders,
            "total_sales": total_sales,
            "avg_installments": avg_installments,
            "payment_types": json.loads(payment_types.to_json(orient="records")),
        }
    )

    with open("src/data/payments.json", "w") as number_of_orders_file:
        number_of_orders_file.write(payments_json)
