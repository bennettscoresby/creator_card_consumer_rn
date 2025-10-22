# ProgramTransferTypeListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Number of program transfer resources to retrieve.  This field is returned if there are resources in your returned array. | [optional] [default to undefined]
**data** | [**Array&lt;ProgramTransferTypeResponse&gt;**](ProgramTransferTypeResponse.md) | Array of program transfer types.  Objects are returned as appropriate to your query. | [optional] [default to undefined]
**end_index** | **number** | Sort order index of the last resource in the returned array.  This field is returned if there are resources in your returned array. | [optional] [default to undefined]
**is_more** | **boolean** | A value of &#x60;true&#x60; indicates that more unreturned resources exist. A value of &#x60;false&#x60; indicates that no more unreturned resources exist.  This field is returned if there are resources in your returned array. | [optional] [default to false]
**start_index** | **number** | Sort order index of the first resource in the returned array.  This field is returned if there are resources in your returned array. | [optional] [default to undefined]

## Example

```typescript
import { ProgramTransferTypeListResponse } from './api';

const instance: ProgramTransferTypeListResponse = {
    count,
    data,
    end_index,
    is_more,
    start_index,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
