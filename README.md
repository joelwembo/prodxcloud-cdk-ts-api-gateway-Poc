# Welcome to prodxcloud CDK Infrastructure project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

cdk init app --language typescript

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

# You can also install modules individually

$ npm install --save @aws-cdk/aws-apigateway
$ npm install --save  @aws-cdk/aws-lambda
$ npm install --save  @aws-cdk/aws-dynamodb

# Deploy to aws steps

1. npm run build
2. cdk diff
3. Bootstrap
- export CDK_NEW_BOOTSTRAP=1
- npx cdk bootstrap --trust=604020082473 aws://604020082473/ap-southeast-1 --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://604020082473/ap-southeast-1 --verbose --profile=default
  
3. cdk synth

4. cdk deploy 

 - npx cdk deploy --force --require-approval never --method=direct  --no-previous-parameters --profile=default --verbose

 - npx cdk deploy --require-approval never --method=direct  --no-previous-parameters --profile=default --verbose --outputs-file ./cdk-outputs.json


arn:aws:secretsmanager:ap-southeast-1:604020082473:secret:public-token-UCPN3b
public-token: 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
              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

# AWS Account Details

AWS_ACCESS_KEY_ID : AKIAYZITHA4UQ5QJPS5K
AWS_SECRET_ACCESS_KEY : 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


AWS_REGION="ap-southeast-1"
ACCOUNT_NUMBER=604020082473
echo "${ACCOUNT_NUMBER}"


# OutPut Report / Result
   Deployment time: 185.51s

Stack ARN:
arn:aws:cloudformation:ap-southeast-1:604020082473:stack/ProdxcloudAwsCdkStack/84b0c7c0-4dc8-11ee-a6d6-06b34fabaa3e

✨  Total time: 192.64s

# AWS Codepipeline

- Create Github access token with permissions level ( Admin, webhooks, code editions,...)
- add the github access token to aws secret manager with same name
   - Settings --> Developer Settings -> Personal access tokens --> Fine-grained tokens
- Create Github AWS Environment Secrets  
      - Github --> Settings --> Actions --> new env
- Add webhook github
   - Adding webhood depends on Fine-grained tokens 
   https://ap-southeast-1.webhooks.aws/trigger?t=eyJlbmNyeXB0ZWREYXRhIjoiVUNTeHVtZUk4NFphRHR0WHZEblROR1IxNXNOa2E4UGh6dEdPanRyaENXLzI5MUFpdjBKZmtUNkxNUDcyVVUzVDBoVEpiQitvcHRiVDVEdlRyVlg5TG1xblBGeTUyVlg1c0JhSzZqenF1MVBSWE8wL250VUkra3Fqd1lmWHVhK3hxb0JsNVRUd3hXR0tSYlcyUG45L1dRNXpQMThGMW40b2lxM2o0enNTS1JZMzhRPT0iLCJpdlBhcmFtZXRlclNwZWMiOiJVMkgya2g0SGpyRTlwQ1BjIiwibWF0ZXJpYWxTZXRTZXJpYWwiOjF9&v=1

   - Added Programmatically :

   ''
     const githubSourceAction = new codepipeline_actions.GitHubSourceAction({
      actionName: 'Checking_Out_Source_Code',
      output: source,
      owner: props.github.owner,
      repo: props.github.repo,
      branch: props.github.branch,
      oauthToken: githubToken,
      trigger: codepipeline_actions.GitHubTrigger.WEBHOOK,
      runOrder: 1,
    });
   ''

# For RDS and API Gateway
 Create RDS Role by creating secret keys

# Get API gateway

CdkTsApiGatewayStack.APIKeyID = qwvmvijwsc
CdkTsApiGatewayStack.RestAPIEndpointB14C3C54 = https://hi11qs2adb.execute-api.ap-southeast-1.amazonaws.com/prod/
Stack ARN:
arn:aws:cloudformation:ap-southeast-1:604020082473:stack/CdkTsApiGatewayStack/305257b0-5f71-11ee-bef5-0a61cfcd84ee

aws apigateway get-api-key --api-key API_KEY_ID --include-value

 Testing Using Postman / CURL

 - Add ENDPOINT Variable value:  https://hi11qs2adb.execute-api.ap-southeast-1.amazonaws.com/prod/v1
 - Add X-API-Key Variable value: ZlBj4co3nl6E0Z4ADRWzV8ahwDpfBtpq5teBDioG
 - Add Request {{ENDPOINT}}/open
      
# OutPut Report / Result

Outputs:
CdkTsApiGatewayStack.RestAPIEndpointB14C3C54 = https://s5b5glvjw4.execute-api.ap-southeast-1.amazonaws.com/prod/
Stack ARN:
arn:aws:cloudformation:ap-southeast-1:604020082473:stack/CdkTsApiGatewayStack/73b36810-4db9-11ee-ae6d-063f7ebf7fe2

✨  Total time: 70.18s

CdkTsApiGatewayStack.RestAPIEndpointB14C3C54 = https://d99pvr7e0i.execute-api.ap-southeast-1.amazonaws.com/prod/
Stack ARN:
arn:aws:cloudformation:ap-southeast-1:604020082473:stack/CdkTsApiGatewayStack/2ef23350-51fb-11ee-973e-0a61cfcd84ee

✨  Total time: 75.15s

# API Keys
ZlBj4co3nl6E0Z4ADRWzV8ahwDpfBtpq5teBDioG

