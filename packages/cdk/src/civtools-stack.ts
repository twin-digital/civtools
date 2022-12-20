import { Construct } from 'constructs'

import { Stack, StackProps } from '@twin-digital/cdk-patterns'

import { CivtoolsRoot } from './constructs/civtools-root'

export type CivtoolsStackProps = StackProps

/**
 * Deployment stack for the 'civtools' workload.
 */
export class CivtoolsStack extends Stack {
  constructor(scope: Construct, id: string, props: CivtoolsStackProps) {
    super(scope, id, {
      ...props,
      workload: 'civtools',
    })

    new CivtoolsRoot(this, 'Root')
  }
}
