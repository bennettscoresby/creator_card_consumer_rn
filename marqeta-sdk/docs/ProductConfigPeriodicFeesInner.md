# ProductConfigPeriodicFeesInner

Contains information on a periodic fee.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **string** | How frequently the fee is charged. | [default to undefined]
**number_of_days_post_activation** | **number** | Number of days after an account is activated that the initial fee is charged. For example, if the value in this field is &#x60;30&#x60;, then the initial fee is charged 30 days after an account is activated. | [default to undefined]

## Example

```typescript
import { ProductConfigPeriodicFeesInner } from './api';

const instance: ProductConfigPeriodicFeesInner = {
    frequency,
    number_of_days_post_activation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
