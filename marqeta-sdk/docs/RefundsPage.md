# RefundsPage

Returns paginated  list of refund resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Number of resources returned. | [default to undefined]
**data** | [**Array&lt;RefundResponse&gt;**](RefundResponse.md) | Contains one or more refunds on a credit account. | [default to undefined]
**end_index** | **number** | Sort order index of the last resource in the returned array. | [default to undefined]
**is_more** | **boolean** | A value of &#x60;true&#x60; indicates that more unreturned resources exist. | [default to undefined]
**start_index** | **number** | Sort order index of the first resource in the returned array. | [default to undefined]

## Example

```typescript
import { RefundsPage } from './api';

const instance: RefundsPage = {
    count,
    data,
    end_index,
    is_more,
    start_index,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
