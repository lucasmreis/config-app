Small experiment with AWS Lambda.

Lambda function accesses versioned JSON in S3, processes it with [json-balancer]() and returns.

Objective: endpoint for configuration file, ready for AB tests.

`npm run build` generates `config-app.zip` file ready for upload in AWS Lambda console.
