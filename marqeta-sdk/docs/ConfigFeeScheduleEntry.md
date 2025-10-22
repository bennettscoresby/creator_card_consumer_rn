# ConfigFeeScheduleEntry

Contains information on a fee schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_date** | **string** | Date and time when the fee goes into effect, in UTC. | [optional] [default to undefined]
**method** | [**FeeMethod**](FeeMethod.md) |  | [default to undefined]
**value** | **number** | Amount of the fee. | [default to undefined]

## Example

```typescript
import { ConfigFeeScheduleEntry } from './api';

const instance: ConfigFeeScheduleEntry = {
    effective_date,
    method,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
