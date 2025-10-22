# ProgramTransferTypeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **string** | The date and time when the program transfer type object was created, in UTC. | [optional] [default to undefined]
**last_modified_time** | **string** | Date and time when the program transfer type object was last modified, in UTC. | [optional] [default to undefined]
**memo** | **string** | Memo or note describing the program transfer type. | [optional] [default to undefined]
**program_funding_source_token** | **string** | Unique identifier of the program funding source to which program transfers will be credited. | [default to undefined]
**tags** | **string** | Comma-delimited list of tags describing the program transfer type. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the program transfer type request object. | [default to undefined]

## Example

```typescript
import { ProgramTransferTypeResponse } from './api';

const instance: ProgramTransferTypeResponse = {
    created_time,
    last_modified_time,
    memo,
    program_funding_source_token,
    tags,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
