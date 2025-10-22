# PolicyProductPaymentConfiguration

Contains the configurations for billing cycle day, payment due day, and fees.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_order** | [**Array&lt;PaymentAllocationOrderEnum&gt;**](PaymentAllocationOrderEnum.md) | Ordered list of balance types to which payments are allocated, from first to last. | [default to undefined]
**billing_cycle_day** | **number** | Day of the month when the billing cycle starts. | [default to undefined]
**billing_cycle_day_strategy** | **string** | Determines if the billing cycle day is manually set or determined dynamically during account creation based on cycling logic. | [optional] [default to BillingCycleDayStrategyEnum_Manual]
**billing_cycle_frequency** | **string** | Frequency at which the account is billed. | [optional] [default to BillingCycleFrequencyEnum_Monthly]
**due_day** | **number** | Day of month the payment for the previous billing cycle is due.  This field is being deprecated and replaced by &#x60;payment_due_interval&#x60; of a product policy. To retrieve &#x60;payment_due_interval&#x60;, see &lt;&lt;/core-api/credit-policies#retrieveProductPolicy, Retrieve credit product policy, payments.payment_due_interval&gt;&gt;. | [optional] [default to undefined]
**min_payment_calculation** | [**PolicyProductMinPaymentCalculation**](PolicyProductMinPaymentCalculation.md) |  | [default to undefined]
**payment_due_interval** | **number** | Specifies the payment due interval that is used to determine the payment due date for a billing cycle. A value of -1 indicates one day prior to the next billing cycle date.  For consumer programs, a minimum gap of 21 days is required between when a statement is delivered and the payment due date. | [optional] [default to -1]

## Example

```typescript
import { PolicyProductPaymentConfiguration } from './api';

const instance: PolicyProductPaymentConfiguration = {
    allocation_order,
    billing_cycle_day,
    billing_cycle_day_strategy,
    billing_cycle_frequency,
    due_day,
    min_payment_calculation,
    payment_due_interval,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
