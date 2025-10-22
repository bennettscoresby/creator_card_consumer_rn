# PaymentSourceResponse

Contains information about a payment source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_suffix** | **string** | Last four digits of the payment source account number. | [optional] [default to undefined]
**account_token** | **string** | Unique identifier of the credit account receiving the payment. | [optional] [default to undefined]
**bank_name** | **string** | Name of the bank associated with the routing number. | [optional] [default to undefined]
**business_token** | **string** | Unique identifier of the business making the payment. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the payment source was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**last_modified_time** | **string** | Date and time when the payment source was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**name** | **string** | Name of the individual or business who owns the payment source. | [optional] [default to undefined]
**owner** | **string** | Type of payment source owner. | [optional] [default to undefined]
**routing_number** | **string** | Routing number of the payment source. | [optional] [default to undefined]
**source_type** | **string** | Type of payment source. | [optional] [default to undefined]
**status** | [**PaymentSourceStatusEnum**](PaymentSourceStatusEnum.md) |  | [optional] [default to undefined]
**token** | **string** | Unique identifier of the payment source. | [optional] [default to undefined]
**user_token** | **string** | Unique identifier of the user making the payment. | [optional] [default to undefined]
**verification_notes** | **string** | Additional information on the verification (for example, an external verification identifier that\&#39;s outside Marqeta\&#39;s credit platform). | [optional] [default to undefined]
**verification_status** | **string** | Status of the verification for the payment source. | [optional] [default to undefined]

## Example

```typescript
import { PaymentSourceResponse } from './api';

const instance: PaymentSourceResponse = {
    account_suffix,
    account_token,
    bank_name,
    business_token,
    created_time,
    last_modified_time,
    name,
    owner,
    routing_number,
    source_type,
    status,
    token,
    user_token,
    verification_notes,
    verification_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
