# RealTimeFeeGroup

Contains information about a real-time fee group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Indicates whether the real-time fee group is active. | [default to false]
**created_time** | **string** | Date and time when the real-time fee group was created, in UTC. | [optional] [default to undefined]
**fee_tokens** | **Set&lt;string&gt;** | Specifies the fees in this real-time fee group. | [optional] [default to undefined]
**last_modified_time** | **string** | Date and time when the real-time fee group was last modified, in UTC. | [optional] [default to undefined]
**name** | **string** | Descriptive name for the real-time fee group. | [default to undefined]
**token** | **string** | Unique identifier of the real-time fee group. | [default to undefined]

## Example

```typescript
import { RealTimeFeeGroup } from './api';

const instance: RealTimeFeeGroup = {
    active,
    created_time,
    fee_tokens,
    last_modified_time,
    name,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
