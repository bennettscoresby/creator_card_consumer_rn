# AccountAdjustmentReq

Contains information relevant to creating an account adjustment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the adjustment.  Value must be negative if &#x60;original_ledger_entry_token&#x60; is not passed. | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the adjustment. | [default to undefined]
**external_adjustment_id** | **string** | Unique identifier you provide of an associated external adjustment that exists outside Marqeta\&#39;s credit platform. | [optional] [default to undefined]
**note** | **string** | Additional information on the adjustment. | [optional] [default to undefined]
**original_ledger_entry_token** | **string** | Unique identifier of the original journal entry needing the adjustment.  Required when adjusting an existing journal entry. | [optional] [default to undefined]
**reason** | **string** | Reason for the adjustment.  * &#x60;DISPUTE&#x60; - The adjustment occurred because a dispute was initiated. * &#x60;DISPUTE_RESOLUTION&#x60; - The adjustment occurred because of the result of a dispute resolution. * &#x60;RETURNED_OR_CANCELED_PAYMENT&#x60; - The adjustment occurred because a payment was returned or canceled. * &#x60;OTHER&#x60; - Any other reason the adjustment occurred. For example, a waived fee or account write-off. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the adjustment. | [optional] [default to undefined]

## Example

```typescript
import { AccountAdjustmentReq } from './api';

const instance: AccountAdjustmentReq = {
    amount,
    currency_code,
    description,
    external_adjustment_id,
    note,
    original_ledger_entry_token,
    reason,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
