import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep, ManualApprovalStep } from 'aws-cdk-lib/pipelines';
import { PipelineAppStage } from './demoawspipeline-app-stage';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsDevelopStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

  const democicdpipeline = new CodePipeline(this, 'demoCICDPipeline', {
     synth:new ShellStep('Synth', {
      input: CodePipelineSource.gitHub('PreetiKumariMehta/aws-develop', 'main'),
      commands: ['npm ci','npm run build', 'npx cdk synth']
     })
  });
   const testingStage = democicdpipeline.addStage(new PipelineAppStage(this, 'test', {
     env: { account: '123456789012', region: 'us-east-1' }
    }));
   testingStage.addPost(new ManualApprovalStep('Approval'));

   

  }
}
