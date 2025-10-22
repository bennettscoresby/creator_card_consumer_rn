# DigitalWalletTokenHash

Contains identifiers of the digital wallet token resource and the card resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_token** | **string** | Unique identifier of the card resource to use for the provisioning request. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the digital wallet token resource. | [default to undefined]

## Example

```typescript
import { DigitalWalletTokenHash } from './api';

const instance: DigitalWalletTokenHash = {
    card_token,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
