# AWS_Services

"Utilized AWS services such as S3, Lambda, API Gateway, DynamoDB, and CloudWatch to develop a comprehensive Product Manager application.".

# AWS Product Manager

## Overview

AWS Product Manager is a web-based application designed to manage product data using various AWS services. This project leverages AWS Lambda, DynamoDB, and API Gateway to create a robust CRUD (Create, Read, Update, Delete) interface for product data. It demonstrates the power of AWS serverless architecture by integrating several core services to build a scalable and maintainable application.

## Features

- **Create Product**: Add new product details to the DynamoDB table.
- **View Products**: Retrieve and display a list of all products.
- **View Product Details**: Fetch details of a specific product using its ID.
- **Delete Product**: Remove a product from the database using its ID.

## Technologies Used

- **AWS Lambda**: Manages the backend logic in a serverless manner, ensuring scalability and cost-efficiency.
- **AWS API Gateway**: Provides a robust way to create, publish, and secure APIs.
- **AWS DynamoDB**: Offers a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale.
- **Amazon S3**: Used to host the static website and interact with the web services securely.
- **JavaScript (jQuery)**: Utilized for handling frontend logic and AJAX requests.
- **HTML/CSS**: For building and styling the web interface.

## Skills Learned

- **AWS Service Integration**: Gained practical experience in integrating multiple AWS services to build a full-stack application.
- **Serverless Architecture**: Learned about the benefits and considerations of using a serverless architecture, including scalability, cost, and deployment.
- **API Design**: Enhanced understanding of RESTful API design and its interaction with backend services through API Gateway.
- **Security Best Practices**: Implemented secure access and management practices, such as CORS configuration and secure API endpoints.
- **Automated Deployment**: Acquired skills in automated deployment processes using AWS CLI and AWS Management Console.

## Project Setup

### Prerequisites

- AWS Account
- AWS CLI configured on your machine
- Node.js and npm installed (for running scripts and dependencies)

### Installation and Deployment

1. **Clone the Repository**
   Start by cloning the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/your-github-username/aws-product-manager.git
   cd aws-product-manager
2. **aws configure**
3. **aws cloudformation deploy --template-file aws-resources.yaml --stack-name aws-product-manager --capabilities CAPABILITY_IAM**
4. **aws s3 cp frontEnd-S3/index.html s3://your-bucket-name/
aws s3 cp frontEnd-S3/scripts.js s3://your-bucket-name/**
5. **Verify Deployment**

### Future Enhancements
- User Authentication: Implement AWS Cognito for user authentication and authorization to enhance security.
- Data Visualization: Integrate AWS QuickSight for visualizing product data and generating - reports.
- Mobile Support: Develop a mobile version of the application to increase accessibility.
- Additional API Features: Extend the API to support more complex queries and batch operations.


### Notes:

- Ensure to replace placeholders such as `https://github.com/your-github-username/aws-product-manager.git` with actual links.
- Update the `aws-resources.yaml` file name if it differs in your project.
- Adjust `your-bucket-name` to your actual S3 bucket name used for hosting the static files.

This README structure offers a comprehensive overview of my project, setup instructions, and guidance on how to deploy and verify the setup, making it an ideal guide for collaborators or anyone new to the project.
