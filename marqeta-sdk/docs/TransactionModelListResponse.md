# TransactionModelListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | The number of resources to retrieve.  This field is returned if there are resources in your returned array. | [optional] [default to undefined]
**data** | [**Array&lt;TransactionModel&gt;**](TransactionModel.md) | An array of transaction objects. See the &lt;&lt;/core-api/transactions/#transaction_model, Transaction object&gt;&gt; description at the top of this page.  Objects are returned as appropriate to your query. | [optional] [default to undefined]
**end_index** | **number** | The sort order index of the last resource in the returned array.  This field is returned if there are resources in your returned array. | [optional] [default to undefined]
**is_more** | **boolean** | A value of &#x60;true&#x60; indicates that more unreturned resources exist. A value of &#x60;false&#x60; indicates that no more unreturned resources exist.  This field is returned if there are resources in your returned array. | [optional] [default to false]
**start_index** | **number** | The sort order index of the first resource in the returned array.  This field is returned if there are resources in your returned array. | [optional] [default to undefined]

## Example

```typescript
import { TransactionModelListResponse } from './api';

const instance: TransactionModelListResponse = {
    count,
    data,
    end_index,
    is_more,
    start_index,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
