# PaymentScheduleCreateReq

Information to create a payment schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the payment.  Required if &#x60;amount_category&#x60; is &#x60;FIXED&#x60;. | [optional] [default to undefined]
**amount_category** | [**PaymentScheduleAmountCategory**](PaymentScheduleAmountCategory.md) |  | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**description** | **string** | Description of the payment schedule. | [optional] [default to undefined]
**frequency** | [**PaymentScheduleFrequency**](PaymentScheduleFrequency.md) |  | [default to undefined]
**next_payment_impact_date** | **string** | Date to make a one-time payment.  Required if frequency is &#x60;ONCE&#x60;. | [optional] [default to undefined]
**payment_day** | **string** | Day on which monthly payments are made.  Required if &#x60;frequency&#x60; is &#x60;MONTHLY&#x60;. | [optional] [default to undefined]
**payment_source_token** | **string** | Unique identifier of the payment source. | [default to undefined]
**token** | **string** | Unique identifier of the payment schedule. | [optional] [default to undefined]

## Example

```typescript
import { PaymentScheduleCreateReq } from './api';

const instance: PaymentScheduleCreateReq = {
    amount,
    amount_category,
    currency_code,
    description,
    frequency,
    next_payment_impact_date,
    payment_day,
    payment_source_token,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
