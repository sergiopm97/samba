import pandas as pd
import json

from utilities import format_payment_values


if __name__ == "__main__":

    products_df = pd.read_csv("pipeline/raw_data/products_data.csv")
    order_items_df = pd.read_csv("pipeline/raw_data/order_items_data.csv")
    payments_df = pd.read_csv("pipeline/raw_data/payments_data.csv")

    poi_df = pd.merge(payments_df, order_items_df, how="inner", on="order_id")
    poip_df = pd.merge(poi_df, products_df, how="inner", on="product_id")
    poip_df_unique = poip_df.drop_duplicates("order_id")

    product_categories = (
        poip_df_unique["product_category_name"]
        .value_counts()
        .reset_index()
        .rename(columns={"index": "Product category", "product_category_name": "Count"})
    )

    product_categories["Product category"] = product_categories.apply(
        lambda x: format_payment_values(x["Product category"]), axis=1
    )

    products_json = json.dumps(
        {
            "product_categories": json.loads(
                product_categories.to_json(orient="records")
            ),
        }
    )

    with open("src/data/products.json", "w") as products_file:
        products_file.write(products_json)
