# PaymentDetailResponse

Response containing payment details with transition history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which the payment is made. | [default to undefined]
**allocations** | [**Array&lt;PaymentAllocationResponse&gt;**](PaymentAllocationResponse.md) | List of objects that contain information about how a payment is allocated. | [optional] [default to undefined]
**amount** | **number** | Total amount of the payment. | [default to undefined]
**created_time** | **string** | Date and time when the payment was created on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the payment. | [default to undefined]
**hold_days** | **number** | After a payment completes, the number of days to hold the available credit on the account before increasing it. | [default to 0]
**hold_end_time** | **string** | Date and time when the available credit hold is released. | [optional] [default to undefined]
**is_manually_released** | **boolean** | Whether the available credit hold was manually released for this payment. | [optional] [default to false]
**metadata** | **string** | Customer-defined additional information about the payment (for example, a check number). | [optional] [default to undefined]
**method** | **string** | Method of payment. | [default to undefined]
**on_hold** | **boolean** | Whether the available credit is on hold for this payment. | [optional] [default to false]
**payment_schedule_token** | **string** | Unique identifier of the payment schedule. | [optional] [default to undefined]
**payment_source_token** | **string** | Unique identifier of the payment source.  Required for ACH payments. | [optional] [default to undefined]
**program_migration_time** | **string** | Date and time when the statement summary was migrated to Marqeta\&#39;s credit platform, in UTC.  The value of this field is &#x60;null&#x60; if it has not been migrated. | [optional] [default to undefined]
**refund_details** | [**RefundDetailsResponse**](RefundDetailsResponse.md) |  | [optional] [default to undefined]
**returned_details** | [**ReturnedDetails**](ReturnedDetails.md) |  | [optional] [default to undefined]
**status** | [**PaymentStatus**](PaymentStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the payment.  If in the &#x60;detail_object&#x60;, unique identifier of the detail object. | [default to undefined]
**transitions** | [**Array&lt;PaymentTransitionResponse&gt;**](PaymentTransitionResponse.md) | Contains one or more &#x60;transitions&#x60; objects, which contain information about a payment status transition. | [default to undefined]
**updated_time** | **string** | Date and time when the payment was last updated on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**waive_returned_payment_fee** | **boolean** | A value of &#x60;true&#x60; indicates that a returned payment fee should not be applied. The default value of this field is &#x60;false&#x60;.  This field is only considered when transitioning the status of the fee to &#x60;REFUNDED&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { PaymentDetailResponse } from './api';

const instance: PaymentDetailResponse = {
    account_token,
    allocations,
    amount,
    created_time,
    currency_code,
    description,
    hold_days,
    hold_end_time,
    is_manually_released,
    metadata,
    method,
    on_hold,
    payment_schedule_token,
    payment_source_token,
    program_migration_time,
    refund_details,
    returned_details,
    status,
    token,
    transitions,
    updated_time,
    waive_returned_payment_fee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
