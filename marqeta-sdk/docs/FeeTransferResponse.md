# FeeTransferResponse

Contains information about a fee charge, including the amount, currency code, and user or business token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_token** | **string** | Specifies the business account holder to which the fee applies. | [default to undefined]
**created_time** | **string** | Date and time when the &#x60;fee_charge&#x60; object was created, in UTC. | [default to undefined]
**fees** | [**Array&lt;FeeDetail&gt;**](FeeDetail.md) | Contains attributes that define characteristics of one or more fees. | [default to undefined]
**tags** | **string** | Metadata about the fee charge.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the fee transfer. | [default to undefined]
**user_token** | **string** | Specifies the user account holder to which the fee applies. | [default to undefined]

## Example

```typescript
import { FeeTransferResponse } from './api';

const instance: FeeTransferResponse = {
    business_token,
    created_time,
    fees,
    tags,
    token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
