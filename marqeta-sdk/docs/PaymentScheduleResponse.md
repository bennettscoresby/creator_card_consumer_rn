# PaymentScheduleResponse

A future one-time or recurring payment schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which the payment schedule is made. | [default to undefined]
**amount** | **number** | Amount of the payment.  Returned if the &#x60;amount_category&#x60; is &#x60;FIXED&#x60;. | [optional] [default to undefined]
**amount_category** | [**PaymentScheduleAmountCategory**](PaymentScheduleAmountCategory.md) |  | [default to undefined]
**created_time** | **string** | Date and time when the payment schedule was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the payment schedule. | [optional] [default to undefined]
**frequency** | [**PaymentScheduleFrequency**](PaymentScheduleFrequency.md) |  | [default to undefined]
**next_payment_impact_date** | **string** | Date to make a one-time payment.  Returned if &#x60;frequency&#x60; is &#x60;ONCE&#x60;. | [optional] [default to undefined]
**payment_day** | **string** | Day on which monthly payments are made.  Returned if the &#x60;frequency&#x60; is &#x60;MONTHLY&#x60;. | [optional] [default to undefined]
**payment_source_token** | **string** | Unique identifier of a payment source. | [default to undefined]
**status** | [**PaymentScheduleStatus**](PaymentScheduleStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the payment schedule. | [default to undefined]
**updated_time** | **string** | Date and time when the payment schedule was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { PaymentScheduleResponse } from './api';

const instance: PaymentScheduleResponse = {
    account_token,
    amount,
    amount_category,
    created_time,
    currency_code,
    description,
    frequency,
    next_payment_impact_date,
    payment_day,
    payment_source_token,
    status,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
