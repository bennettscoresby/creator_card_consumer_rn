# ProgramGatewayCreateReq

Contains information relevant to creating a Credit Program Gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Indicates whether the Program Gateway is active. | [optional] [default to true]
**basic_auth_password** | **string** | Basic Authentication password for authenticating your environment. | [default to undefined]
**basic_auth_username** | **string** | Basic Authentication username for authenticating your environment. | [default to undefined]
**custom_header** | **{ [key: string]: string; }** | Additional custom information included in the HTTP header. For example, this might contain security information, along with Basic Authentication, when making a Program Gateway request. Custom headers also appear in the associated webhook\&#39;s notifications. | [optional] [default to undefined]
**mtls** | **boolean** | Indicates whether the Program Gateway uses mutual Transport Layer Security (mTLS). | [optional] [default to false]
**name** | **string** | Name of the Program Gateway. | [default to undefined]
**timeout_millis** | **number** | Total timeout for Program Gateway calls, in milliseconds. | [optional] [default to 2000]
**token** | **string** | Unique identifier of the Program Gateway.  If you do not include a token, the system generates one automatically. As this token is necessary for use in other calls, it is recommended that you define a simple and easy to remember string rather than letting the system generate a token for you. This value cannot be updated. | [optional] [default to undefined]
**url** | **string** | URL of the Program Gateway endpoint hosted in your environment and configured to receive authorization requests made by the Marqeta platform. Must be HTTPS. | [default to undefined]

## Example

```typescript
import { ProgramGatewayCreateReq } from './api';

const instance: ProgramGatewayCreateReq = {
    active,
    basic_auth_password,
    basic_auth_username,
    custom_header,
    mtls,
    name,
    timeout_millis,
    token,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
