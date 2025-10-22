# Available

Specifies the available balances of the velocity controls associated with a user.  This object is not returned if the velocity control window is `TRANSACTION`, because available balances do not apply to single-transaction velocity windows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Total amount of spend remaining in the velocity control. | [default to undefined]
**days_remaining** | **number** | Number of days remaining in the velocity control time window. | [optional] [default to undefined]
**uses** | **number** | Number of uses remaining in the velocity control. | [default to 0]

## Example

```typescript
import { Available } from './api';

const instance: Available = {
    amount,
    days_remaining,
    uses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
