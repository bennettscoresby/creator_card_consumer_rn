# AccountConfigResponse

Contains information returned when configuring an account\'s billing cycle day, payment due day, fees, and more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_cycle_day** | **number** | Day of the month when the billing cycle starts. If an override value is not provided, the default value is derived from the bundle. | [default to undefined]
**card_level** | **string** | Level of the credit card. | [default to CardLevelEnum_Na]
**e_disclosure_active** | **boolean** | A value of &#x60;true&#x60; indicates that the account holder consents to receiving disclosures and statements electronically. | [default to false]
**fees** | [**Array&lt;ConfigFeeScheduleResponse&gt;**](ConfigFeeScheduleResponse.md) | Contains one or more fees associated with the credit account. | [optional] [default to undefined]
**min_payment** | [**AccountConfigMinPayment**](AccountConfigMinPayment.md) |  | [optional] [default to undefined]
**payment_due_day** | **number** | Day of the month when the payment for the previous billing cycle is due. | [optional] [default to undefined]
**payment_due_interval** | **number** | Specifies the payment due interval that is used to determine the payment due date for a billing cycle. A value of -1 indicates one day prior to the next billing cycle date. | [optional] [default to -1]
**payment_holds** | [**AccountConfigPaymentHolds**](AccountConfigPaymentHolds.md) |  | [default to undefined]
**rewards** | [**Array&lt;AccountReward&gt;**](AccountReward.md) | Contains one or more rewards associated with the credit account. | [optional] [default to undefined]

## Example

```typescript
import { AccountConfigResponse } from './api';

const instance: AccountConfigResponse = {
    billing_cycle_day,
    card_level,
    e_disclosure_active,
    fees,
    min_payment,
    payment_due_day,
    payment_due_interval,
    payment_holds,
    rewards,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
