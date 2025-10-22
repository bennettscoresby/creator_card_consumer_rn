# AccountConfigUpdateReq

Contains information relevant for updating configurations for electronic disclosures, fees, payment holds, and minimum payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_disclosure_active** | **boolean** | A value of &#x60;true&#x60; indicates that the account holder consents to receiving disclosures and statements electronically. | [optional] [default to false]
**fees** | [**Array&lt;ConfigFeeScheduleReq&gt;**](ConfigFeeScheduleReq.md) | Contains one or more fees associated with the credit account. | [optional] [default to undefined]
**min_payment** | [**AccountConfigMinPayment**](AccountConfigMinPayment.md) |  | [optional] [default to undefined]
**payment_due_interval** | **number** | Specifies the payment due interval that is used to determine the payment due date for a billing cycle. A value of -1 indicates one day prior to the next billing cycle date.  For consumer programs, a minimum gap of 21 days is required between when a statement is delivered and the payment due date. | [optional] [default to undefined]
**payment_holds** | [**AccountConfigPaymentHolds**](AccountConfigPaymentHolds.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AccountConfigUpdateReq } from './api';

const instance: AccountConfigUpdateReq = {
    e_disclosure_active,
    fees,
    min_payment,
    payment_due_interval,
    payment_holds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
