# BigCommerce Current Customer JWT API Gateway Authorizer

Use `npm run build` to create a [lambda deployment package](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html) for a custom [API Gateway authorizer](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html) in AWS.

Configure the following environment variables to in Lambda console or with AWS CLI:

|    Variable   |                     Value                     |
|:-------------:|:---------------------------------------------:|
| CLIENT_SECRET | Your BigCommerce application's client secret. |
| CLIENT_ID     | Your BigCommerce application's client ID.     |

API requests must include an `X-Current-Customer` header. The header's value should be the JWT supplied by the [BigCommerce Curent Customer API](https://developer.bigcommerce.com/api-reference/storefront/current-customers).