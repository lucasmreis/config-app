import AWS from 'aws-sdk'
import { validate, generate } from 'json-balancer'

AWS.config.update({region: 'us-west-2'})

const s3 = new AWS.S3()

const params = {
  Bucket: 'config-app',
  Key: 'config-example.json'
}

export const handler = function (event, context) {
  s3.getObject(params, function (err, data) {
    if (err) {
      context.fail(err)
    } else {
      try {
        const recipe = JSON.parse(data.Body.toString())

        if (!validate(recipe)) {
          context.fail('Not valid config file')
        }

        const config = generate(recipe)

        context.succeed(config)
      } catch (e) {
        context.fail(e)
      }
    }
  })
}
