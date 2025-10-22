# RefundTransitionsPage

Return paginated refund transition response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Number of resources returned. | [default to undefined]
**data** | [**Array&lt;RefundTransitionResponse&gt;**](RefundTransitionResponse.md) | Contains one or more &#x60;transitions&#x60; objects, which contain information on a refund status transition. | [default to undefined]
**end_index** | **number** | Sort order index of the first resource in the returned array. | [default to undefined]
**is_more** | **boolean** | A value of &#x60;true&#x60; indicates that more unreturned resources exist. | [default to undefined]
**start_index** | **number** | Sort order index of the first resource in the returned array. | [default to undefined]

## Example

```typescript
import { RefundTransitionsPage } from './api';

const instance: RefundTransitionsPage = {
    count,
    data,
    end_index,
    is_more,
    start_index,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
