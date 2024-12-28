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

    # Perform a DynamoDB get_item
    response = table.get_item(
        Key={
            'ProductID': product_id
        }
    )

    # Check if item is found
    if 'Item' in response:
        item = response['Item']
        return {
            "statusCode": 200,
            "body": json.dumps(item)
        }
    else:
        return {
            "statusCode": 404,
            "body": json.dumps(f"No product found with ProductID: {product_id}")
        }
