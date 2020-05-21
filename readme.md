# BigCommerce Current Customer JWT API Gateway Authorizer

Use `npm run build` to create a [lambda deployment package](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html) for a custom API Gateway authorizer in AWS.

Configure the following environment variables to in Lambda console or with AWS CLI:

|    Variable   |                     Value                     |
|:-------------:|:---------------------------------------------:|
| CLIENT_SECRET | Your BigCommerce application's client secret. |
| CLIENT_ID     | Your BigCommerce application's client ID.     |