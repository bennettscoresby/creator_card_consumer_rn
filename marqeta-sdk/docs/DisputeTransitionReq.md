# DisputeTransitionReq

Information about a transaction dispute update request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Updated amount of the dispute, based on the resolution. | [default to undefined]
**interest_adjustments** | [**Array&lt;MigrateDisputeInterestAdjustment&gt;**](MigrateDisputeInterestAdjustment.md) | a list of interest charges and their effective times, if applicable. Note that this typically only applies for a cross-cycle activity, such as a dispute or payment  | [optional] [default to undefined]
**notes** | **string** | Additional information on the dispute update (for example, a reason for the dispute update). | [optional] [default to undefined]
**source_created_time** | **string** | Date and time when the dispute occurred. | [optional] [default to undefined]
**status** | [**DisputeStatus**](DisputeStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the dispute update. | [optional] [default to undefined]

## Example

```typescript
import { DisputeTransitionReq } from './api';

const instance: DisputeTransitionReq = {
    amount,
    interest_adjustments,
    notes,
    source_created_time,
    status,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
