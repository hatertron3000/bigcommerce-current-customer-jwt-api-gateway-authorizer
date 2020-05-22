# BigCommerce Current Customer JWT API Gateway Authorizer

Use `npm run build` to create a [lambda deployment package](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html) for a custom [API Gateway authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html) in AWS.

Configure the following environment variables to in Lambda console or with AWS CLI:

|    Variable   |                     Value                     |
|:-------------:|:---------------------------------------------:|
| CLIENT_SECRET | Your BigCommerce application's client secret. |
| CLIENT_ID     | Your BigCommerce application's client ID.     |

The API gatweway must be configure to use this lambda as an authorizer and pass the Current Customer JWT from the  [BigCommerce Curent Customer API](https://developer.bigcommerce.com/api-reference/storefront/current-customers) in a header. See the [API Gateway authorizer documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html) for more info on configuring the token source for Lambda authorizers.
