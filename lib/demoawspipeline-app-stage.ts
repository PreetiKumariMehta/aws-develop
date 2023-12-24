import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { lamdaStack } from './lamda-stack';


export class PipelineAppStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

   const lambdaStack = new lamdaStack(this, 'LamdaStack');
    




  }
}
