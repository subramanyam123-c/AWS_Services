import json
import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-2')
table = dynamodb.Table('Products')

def lambda_handler(event, context):
    # For non-proxy integration, the "event" should contain the fields directly if you set up a mapping template
    # or you're testing in the console with the same JSON structure.

    product_id = event.get('productid')     # from the front end
    name       = event.get('name')
    description= event.get('description')
    price      = event.get('price')
    category   = event.get('category')

    # Basic check
    if not (product_id and name and description and price and category):
        return {
            "statusCode": 400,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            "body": json.dumps("Missing required fields!")
        }

    # Store in DynamoDB, mapping "productid" to "ProductID"
    table.put_item(
        Item={
            'ProductID': product_id,  # Notice capital 'P' in the key name
            'name': name,
            'description': description,
            'price': price,
            'category': category
        }
    )

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Methods": "POST,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        },
        "body": json.dumps("Product data saved successfully!")
    }
