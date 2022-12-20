import { APIGatewayProxyEvent, Context } from 'aws-lambda'
import middy from '@middy/core'
import { restApiMiddleware } from '@twin-digital/lambda-rest-api'

/**
 * Payload:
 * {
 *   "value1": "the name of your game",
 *   "value2": "the player's Steam name",
 *   "value3": "the turn number"
 * }
 */
export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`)
  console.log(`Context: ${JSON.stringify(context, null, 2)}`)

  return {
    statusCode: 202,
  }
}

export const webhook = middy(handler).use(restApiMiddleware())
