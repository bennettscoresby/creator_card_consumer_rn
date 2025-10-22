# PeerTransferResponse

Contains information about an intra-account transfer, including sender and recipient tokens, transfer amount, and currency code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the transfer. | [default to undefined]
**created_time** | **string** |  | [default to undefined]
**currency_code** | **string** | Three-digit ISO 4217 currency code. | [default to undefined]
**memo** | **string** | Additional descriptive text about the intra-account transfer. | [optional] [default to undefined]
**recipient_business_token** | **string** | Specifies the business account holder that receives funds. | [optional] [default to undefined]
**recipient_user_token** | **string** | Specifies the user account holder that receives funds. | [optional] [default to undefined]
**sender_business_token** | **string** | Specifies the business account holder that sends funds. | [optional] [default to undefined]
**sender_user_token** | **string** | Specifies the user account holder that sends funds. | [optional] [default to undefined]
**tags** | **string** | Metadata about the intra-account transfer. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the intra-account transfer request. | [default to undefined]

## Example

```typescript
import { PeerTransferResponse } from './api';

const instance: PeerTransferResponse = {
    amount,
    created_time,
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
