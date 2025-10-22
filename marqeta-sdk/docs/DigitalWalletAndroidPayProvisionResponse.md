# DigitalWalletAndroidPayProvisionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_token** | **string** | Unique identifier of the card resource to use for the provisioning request. | [default to undefined]
**created_time** | **string** | Date and time when the digital wallet provisioning request was created, in UTC. | [default to undefined]
**last_modified_time** | **string** | Date and time when the digital wallet token provisioning request was last updated, in UTC. | [default to undefined]
**push_tokenize_request_data** | [**AndroidPushTokenizeRequestData**](AndroidPushTokenizeRequestData.md) |  | [default to undefined]

## Example

```typescript
import { DigitalWalletAndroidPayProvisionResponse } from './api';

const instance: DigitalWalletAndroidPayProvisionResponse = {
    card_token,
    created_time,
    last_modified_time,
    push_tokenize_request_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
