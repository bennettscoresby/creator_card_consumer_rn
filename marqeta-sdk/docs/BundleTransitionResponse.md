# BundleTransitionResponse

Contains information on a bundle transition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_token** | **string** | Unique identifier of the bundle. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the bundle was changed the status on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**original_status** | [**BundleResourceStatus**](BundleResourceStatus.md) |  | [optional] [default to undefined]
**status** | [**BundleResourceStatus**](BundleResourceStatus.md) |  | [optional] [default to undefined]
**token** | **string** | Unique identifier of the bundle transition. | [optional] [default to undefined]

## Example

```typescript
import { BundleTransitionResponse } from './api';

const instance: BundleTransitionResponse = {
    bundle_token,
    created_time,
    original_status,
    status,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
