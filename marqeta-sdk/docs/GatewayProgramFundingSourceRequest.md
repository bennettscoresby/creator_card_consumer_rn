# GatewayProgramFundingSourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [optional] [default to undefined]
**basic_auth_password** | **string** |  | [default to undefined]
**basic_auth_username** | **string** |  | [default to undefined]
**custom_header** | **{ [key: string]: string; }** | Custom headers | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**timeout_millis** | **number** | Total timeout in milliseconds for gateway processing | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [default to undefined]
**use_mtls** | **boolean** | Use MTLS for funding request | [optional] [default to false]

## Example

```typescript
import { GatewayProgramFundingSourceRequest } from './api';

const instance: GatewayProgramFundingSourceRequest = {
    active,
    basic_auth_password,
    basic_auth_username,
    custom_header,
    name,
    timeout_millis,
    token,
    url,
    use_mtls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
