// reference: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html#api-gateway-lambda-authorizer-flow

const jwt = require('jsonwebtoken')

exports.handler =  function(event, context, callback) {
    const token = event.authorizationToken
    const clientId = process.env.CLIENT_ID
    const secret = process.env.CLIENT_SECRET
    const options = {
        audience: process.env.CLIENT_ID,
        issuer: 'bc/apps',
    }
    try {
        const payload = jwt.verify(token, secret, options)
        if (payload.operation !== 'current_customer') {
            throw new Error('Invalid operation supplied in the token.')
            return
        } else {
            callback(null, generatePolicy('user', 'Allow', event.methodArn, payload))
            return 
        }
    } catch(err) {
        console.log(err)
        callback("Unauthorized")
        return
    }
}

// Help function to generate an IAM policy
const generatePolicy = function(principalId, effect, resource, payload) {
    const authResponse = {}
    
    authResponse.principalId = principalId
    if (effect && resource) {
        const policyDocument = {}
        policyDocument.Version = '2012-10-17' 
        policyDocument.Statement = []
        const statementOne = {}
        statementOne.Action = 'execute-api:Invoke' 
        statementOne.Effect = effect
        statementOne.Resource = resource
        policyDocument.Statement[0] = statementOne
        authResponse.policyDocument = policyDocument
    }
    
    // Optional output with custom properties of the String, Number or Boolean type.
    authResponse.context = {
        "bcCustomerId": payload.customer.id,
        "bcCustomerEmail": payload.customer.email,
        "bcCustomerGroupId": payload.customer.group_id,
        "store_hash": payload.store_hash
    }
    return authResponse
}