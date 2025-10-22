# PaymentSourceCreateReq

Contains information about a payment source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **string** | Account number of the payment source. | [default to undefined]
**account_token** | **string** | Unique identifier of the credit account receiving the payment. | [default to undefined]
**bank_name** | **string** | Name of the bank associated with the routing number. | [optional] [default to undefined]
**business_token** | **string** | Unique identifier of the business making the payment. | [optional] [default to undefined]
**name** | **string** | Name of the individual or business who owns the payment source. | [default to undefined]
**owner** | **string** | Type of payment source owner. | [optional] [default to undefined]
**routing_number** | **string** | Routing number of the payment source. | [default to undefined]
**source_type** | **string** | Type of payment source. | [default to undefined]
**token** | **string** | Unique identifier of the payment source. | [optional] [default to undefined]
**user_token** | **string** | Unique identifier of the user making the payment. | [optional] [default to undefined]
**verification_notes** | **string** | Additional information on the verification. | [optional] [default to undefined]
**verification_override** | **boolean** | Whether to override the verification process. | [default to undefined]

## Example

```typescript
import { PaymentSourceCreateReq } from './api';

const instance: PaymentSourceCreateReq = {
    account_number,
    account_token,
    bank_name,
    business_token,
    name,
    owner,
    routing_number,
    source_type,
    token,
    user_token,
    verification_notes,
    verification_override,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
