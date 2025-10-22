# MaxAPRSchedulesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **string** | Date and time when the override APR ends, in UTC. | [optional] [default to undefined]
**reason** | **string** | Reason for the override APR. | [default to undefined]
**start_date** | **string** | Date and time when the override APR goes into effect, in UTC. | [default to undefined]
**value** | **number** | The APR percentage value. This is the value of the fixed rate during the override period. The APR value must adhere to the constraints of the main schedule, such as maximum allowable values. | [default to undefined]

## Example

```typescript
import { MaxAPRSchedulesResponse } from './api';

const instance: MaxAPRSchedulesResponse = {
    end_date,
    reason,
    start_date,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
