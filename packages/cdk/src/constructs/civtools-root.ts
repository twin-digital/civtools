import * as lambda from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'

import { BaseConstruct, RestApi } from '@twin-digital/cdk-patterns'
import { getAssetPath, getHandler } from '@civtools/play-by-cloud-webhook'

/**
 * Root construct for the 'civtools' services.
 */
export class CivtoolsRoot extends BaseConstruct {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    // create lambda for responding to Civilization VI webhooks
    const webhook = new lambda.Function(this, 'CivilizationWebhook', {
      code: lambda.Code.fromAsset(getAssetPath()),
      environment: {},
      handler: getHandler(),
      runtime: lambda.Runtime.NODEJS_16_X,
    })

    const api = new RestApi(this, 'Api', {
      restApiProps: {
        restApiName: 'Civ Tools',
      },
    })

    api.addMethod({
      handler: webhook,
      method: 'GET',
      path: ['webhook'],
    })
  }
}
