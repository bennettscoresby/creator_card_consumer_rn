# ProgramGatewayResponse

Contains information relevant to a Credit Program Gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Indicates whether the Program Gateway is active. | [optional] [default to true]
**basic_auth_password** | **string** | Basic Authentication password for authenticating your environment. | [optional] [default to undefined]
**basic_auth_username** | **string** | Basic Authentication username for authenticating your environment. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the Program Gateway was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**custom_header** | **object** | Additional custom information included in the HTTP header. | [optional] [default to undefined]
**mtls** | **boolean** | Indicates whether the Program Gateway uses mutual Transport Layer Security (mTLS). | [optional] [default to undefined]
**name** | **string** | Name of the Program Gateway. | [optional] [default to undefined]
**timeout_millis** | **number** | Total timeout for Program Gateway calls, in milliseconds. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the Program Gateway. | [optional] [default to undefined]
**updated_time** | **string** | Date and time when the Program Gateway was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**url** | **string** | URL of the Program Gateway endpoint hosted in your environment and configured to receive authorization requests made by the Marqeta platform. | [optional] [default to undefined]

## Example

```typescript
import { ProgramGatewayResponse } from './api';

const instance: ProgramGatewayResponse = {
    active,
    basic_auth_password,
    basic_auth_username,
    created_time,
    custom_header,
    mtls,
    name,
    timeout_millis,
    token,
    updated_time,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
