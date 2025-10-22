# RealTimeFeeGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Indicates whether the real-time fee group is active. | [optional] [default to true]
**fee_tokens** | **Set&lt;string&gt;** | Specifies the fees in this real-time fee group. Send a &#x60;GET&#x60; request to &#x60;/fees&#x60; to retrieve fee resources tokens.  No two fees in the group can be applicable to the same transaction type (in other words, each fee must have a different value for its &#x60;real_time_assessment.transaction_type&#x60; field). | [optional] [default to undefined]
**name** | **string** | Descriptive name for the real-time fee group. | [optional] [default to undefined]

## Example

```typescript
import { RealTimeFeeGroupRequest } from './api';

const instance: RealTimeFeeGroupRequest = {
    active,
    fee_tokens,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
