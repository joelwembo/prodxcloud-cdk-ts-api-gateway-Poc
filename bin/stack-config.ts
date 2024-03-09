import { ICdkTsApiGatewayStackProps } from './stack-config-types';

const environmentConfig: ICdkTsApiGatewayStackProps = {
  tags: {
    Developer: 'Joel Wembo',
    Application: 'CdkTsApiGateway',
  },
  lambda: {
    name: 'example-resolver',
    desc: 'Lambda resolver used for Api Gateway',
    memory: 256,
    timeout: 30,
  },
  api: {
    name: 'example-rest-api',
    desc: 'Rest Api Gateway used for Api Gateway',
    modelName: 'exampleModel',
    rootResource: 'v1',
  },
  usageplan: {
    name: 'example-usage-plan',
    desc: 'Usage plan used for Api Gateway',
    limit: 100, // per day
    rateLimit: 20,
    burstLimit: 10,
  },
  apiKey: {
    name: 'example-api-key',
    desc: 'Api Key used for Api Gateway',
  },
  validators: {
    bodyValidator: {
        requestValidatorName: 'example-body-validator',
        validateRequestBody: true,
        validateRequestParameters: false,
    },
    paramValidator: {
        requestValidatorName: 'example-param-validator',
        validateRequestBody: false,
        validateRequestParameters: true,
    },
    bodyAndParamValidator: {
        requestValidatorName: 'example-body-and-param-validator',
        validateRequestBody: true,
        validateRequestParameters: true,
    },
  }
};

export default environmentConfig;