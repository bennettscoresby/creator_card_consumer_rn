# AccountConfigMinPayment

Contains configurations for a minimum payment override on a credit account, which overrides the minimum payment configurations on the associated credit product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Whether the minimum payment override is currently active. | [optional] [default to undefined]
**min_payment_flat_amount** | **number** | Flat amount of the minimum payment override. | [optional] [default to undefined]
**min_payment_percentage** | **number** | Percentage of the total statement balance used to calculate the minimum payment override amount. | [optional] [default to undefined]
**override_end_time** | **string** | Date and time when the minimum payment override ends, in UTC. | [optional] [default to undefined]
**override_start_time** | **string** | Date and time when the minimum payment override starts, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { AccountConfigMinPayment } from './api';

const instance: AccountConfigMinPayment = {
    active,
    min_payment_flat_amount,
    min_payment_percentage,
    override_end_time,
    override_start_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
