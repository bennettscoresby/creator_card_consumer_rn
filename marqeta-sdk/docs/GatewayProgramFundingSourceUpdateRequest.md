# GatewayProgramFundingSourceUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [optional] [default to undefined]
**basic_auth_password** | **string** | Required if URL is present; must contain upper and lowercase letters, numbers, and symbols | [default to undefined]
**basic_auth_username** | **string** | Required if URL is present | [default to undefined]
**custom_header** | **{ [key: string]: string; }** | Custom headers | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**timeout_millis** | **number** | Total timeout in milliseconds for gateway processing | [optional] [default to undefined]
**url** | **string** | Empty string (disabled); must be HTTPS | [default to undefined]
**use_mtls** | **boolean** | Use MTLS for funding request | [optional] [default to false]

## Example

```typescript
import { GatewayProgramFundingSourceUpdateRequest } from './api';

const instance: GatewayProgramFundingSourceUpdateRequest = {
    active,
    basic_auth_password,
    basic_auth_username,
    custom_header,
    name,
    timeout_millis,
    url,
    use_mtls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
