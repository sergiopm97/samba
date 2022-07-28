def format_payment_values(payment_value: str):

    """
    Format the representative values of the payment types
    by removing the symbols and capitalizing the first letter
    """

    first_character = payment_value[0]
    payment_value = payment_value.replace(first_character, first_character.upper(), 1)

    if "_" in payment_value:
        return payment_value.replace("_", " ")
    else:
        return payment_value
