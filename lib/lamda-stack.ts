import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lamda from 'aws-cdk-lib/aws-lambda';

export class lamdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
      const demolamda = new lamda.Function(this, 'LamdaFunction', {
        runtime: lamda.Runtime.NODEJS_18_X,
        handler: 'index.handler',
        code: lamda.Code.fromInline('exports.handler = _=> Hello Lamda compute service')
      })
    




  }
}
