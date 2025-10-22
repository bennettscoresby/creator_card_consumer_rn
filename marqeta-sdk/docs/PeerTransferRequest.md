# PeerTransferRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**currency_code** | **string** |  | [default to undefined]
**memo** | **string** |  | [optional] [default to undefined]
**recipient_business_token** | **string** | Required if \&#39;recipient_business_token\&#39; is null | [optional] [default to undefined]
**recipient_user_token** | **string** | Required if \&#39;recipient_business_token\&#39; is null | [optional] [default to undefined]
**sender_business_token** | **string** | Required if \&#39;send_user_token\&#39; is null | [optional] [default to undefined]
**sender_user_token** | **string** | Required if \&#39;send_business_token\&#39; is null | [optional] [default to undefined]
**tags** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PeerTransferRequest } from './api';

const instance: PeerTransferRequest = {
    amount,
    currency_code,
    memo,
    recipient_business_token,
    recipient_user_token,
    sender_business_token,
    sender_user_token,
    tags,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
