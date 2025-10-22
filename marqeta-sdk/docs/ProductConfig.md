# ProductConfig

Contains information on configurations for billing cycle day, payment due day, and fees.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_cycle_day** | **number** | Day of the month when the billing cycle starts. | [default to undefined]
**billing_cycle_day_strategy** | **string** | Determines if the billing cycle day is manually set or determined dynamically during account creation based on cycling logic. | [optional] [default to BillingCycleDayStrategyEnum_Manual]
**billing_cycle_frequency** | **string** | Frequency at which the account is billed. | [optional] [default to BillingCycleFrequencyEnum_Monthly]
**fees** | [**Array&lt;ProductFeeType&gt;**](ProductFeeType.md) | One or more fee types. | [optional] [default to undefined]
**payment_due_day** | **number** | Day of month the payment for the previous billing cycle is due.  This field is deprecated. Use the &#x60;product.payment_due_interval&#x60; field instead. To retrieve &#x60;payment_due_interval&#x60;, see &lt;&lt;/core-api/credit-products#retrieveProduct, Retrieve credit product, config.payment_due_interval&gt;&gt;. | [optional] [default to undefined]
**payment_due_interval** | **number** | Specifies the payment due interval that is used to determine the payment due date for a billing cycle. A value of -1 indicates one day prior to the next billing cycle date.  For consumer programs, a minimum gap of 21 days is required between when a statement is delivered and the payment due date. | [optional] [default to -1]
**periodic_fees** | [**Array&lt;ProductConfigPeriodicFeesInner&gt;**](ProductConfigPeriodicFeesInner.md) | Contains one or more periodic fees. | [optional] [default to undefined]

## Example

```typescript
import { ProductConfig } from './api';

const instance: ProductConfig = {
    billing_cycle_day,
    billing_cycle_day_strategy,
    billing_cycle_frequency,
    fees,
    payment_due_day,
    payment_due_interval,
    periodic_fees,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
