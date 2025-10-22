# FundingSourceModel

Contains funding source information for the transaction, including the funding type and time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Whether the funding source is active. | [default to false]
**created_time** | **string** | Date and time when the funding source was created, in UTC. | [default to undefined]
**is_default_account** | **boolean** | Whether the GPA order unload\&#39;s funding source is the default funding account. | [default to false]
**last_modified_time** | **string** | Date and time when the funding source was last modified, in UTC. | [default to undefined]
**token** | **string** | Unique identifier of the funding source. | [default to undefined]
**type** | **string** | Funding type of the funding source. | [default to undefined]

## Example

```typescript
import { FundingSourceModel } from './api';

const instance: FundingSourceModel = {
    active,
    created_time,
    is_default_account,
    last_modified_time,
    token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
