import json
import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-2')
table = dynamodb.Table('Products')

def lambda_handler(event, context):
    """
    Expects event to have a 'productid' field if using a direct integration
    with a mapping template.
    Alternatively, if using path parameters in non-proxy mode,
    you'd set up your API Gateway to map the path parameter
    to event['productid'].
    """

    product_id = event.get('productid', None)
    if not product_id:
        return {
            "statusCode": 400,
            "body": json.dumps("Missing 'productid' in request.")
        }

    # Check if product exists
    get_response = table.get_item(Key={'ProductID': product_id})
    if 'Item' not in get_response:
        return {
            "statusCode": 404,
            "body": json.dumps(f"No product found with ProductID: {product_id}")
        }

    # Delete the item
    delete_response = table.delete_item(
        Key={
            'ProductID': product_id
        }
    )

    # Return a success message (with details if needed)
    return {
        "statusCode": 200,
        "body": json.dumps(f"Product with ProductID '{product_id}' has been deleted.")
    }
