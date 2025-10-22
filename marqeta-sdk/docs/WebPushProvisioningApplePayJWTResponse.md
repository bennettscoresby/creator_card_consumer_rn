# WebPushProvisioningApplePayJWTResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jws** | [**WebPushProvisioningApplePayJWSModel**](WebPushProvisioningApplePayJWSModel.md) |  | [default to undefined]
**state** | **string** | Unique state associated with the digital wallet token. The Marqeta platform returns a universally unique identifier (UUID) in this field. | [default to undefined]

## Example

```typescript
import { WebPushProvisioningApplePayJWTResponse } from './api';

const instance: WebPushProvisioningApplePayJWTResponse = {
    jws,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
