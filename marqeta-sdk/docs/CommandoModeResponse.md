# CommandoModeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commando_mode_enables** | [**CommandoModeEnables**](CommandoModeEnables.md) |  | [optional] [default to undefined]
**created_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [default to undefined]
**current_state** | [**CommandoModeNestedTransition**](CommandoModeNestedTransition.md) |  | [optional] [default to undefined]
**last_modified_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [default to undefined]
**program_gateway_funding_source_token** | **string** |  | [optional] [default to undefined]
**real_time_standin_criteria** | [**RealTimeStandinCriteria**](RealTimeStandinCriteria.md) |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CommandoModeResponse } from './api';

const instance: CommandoModeResponse = {
    commando_mode_enables,
    created_time,
    current_state,
    last_modified_time,
    program_gateway_funding_source_token,
    real_time_standin_criteria,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
