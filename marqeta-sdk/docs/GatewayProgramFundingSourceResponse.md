# GatewayProgramFundingSourceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **string** |  | [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**basic_auth_password** | **string** | 50 char max. Required if URL is present. Minimum 20 chars with upper and lowercase letters, numbers, and symbols | [default to undefined]
**basic_auth_username** | **string** | 50 char max. Required if URL is present | [default to undefined]
**created_time** | **string** |  | [default to undefined]
**custom_header** | **{ [key: string]: string; }** | Custom headers to be passed along with request | [default to undefined]
**last_modified_time** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**timeout_millis** | **number** | Total timeout in milliseconds for gateway processing | [default to undefined]
**token** | **string** |  | [default to undefined]
**url** | **string** | 250 char max. Empty string (disabled). Must be HTTPS. | [default to undefined]
**use_mtls** | **boolean** | Use MTLS for funding request | [default to false]
**version** | **string** |  | [default to undefined]

## Example

```typescript
import { GatewayProgramFundingSourceResponse } from './api';

const instance: GatewayProgramFundingSourceResponse = {
    account,
    active,
    basic_auth_password,
    basic_auth_username,
    created_time,
    custom_header,
    last_modified_time,
    name,
    timeout_millis,
    token,
    url,
    use_mtls,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
