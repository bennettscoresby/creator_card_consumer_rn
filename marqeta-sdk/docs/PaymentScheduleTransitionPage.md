# PaymentScheduleTransitionPage

Returns paginated information for multiple payment schedule transitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Number of resources returned. | [default to undefined]
**data** | [**Array&lt;PaymentScheduleTransitionResponse&gt;**](PaymentScheduleTransitionResponse.md) | List of payment schedule transitions. | [default to undefined]
**end_index** | **number** | Sort order index of the last resource in the returned array. | [default to undefined]
**is_more** | **boolean** | A value of &#x60;true&#x60; indicates that more unreturned resources exist. | [default to undefined]
**start_index** | **number** | Sort order index of the first resource in the returned array. | [default to undefined]

## Example

```typescript
import { PaymentScheduleTransitionPage } from './api';

const instance: PaymentScheduleTransitionPage = {
    count,
    data,
    end_index,
    is_more,
    start_index,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
