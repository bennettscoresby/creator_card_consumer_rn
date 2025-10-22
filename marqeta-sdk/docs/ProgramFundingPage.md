# ProgramFundingPage

Returns paginated program fundings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Number of resources returned. | [default to undefined]
**data** | [**Array&lt;ProgramFundingResponse&gt;**](ProgramFundingResponse.md) | Contains one or more program fundings. | [default to undefined]
**end_index** | **number** | Sort order index of the last resource in the returned array. | [default to undefined]
**is_more** | **boolean** | A value of &#x60;true&#x60; indicates that more unreturned resources exist. | [default to undefined]
**start_index** | **number** | Sort order index of the first resource in the returned array. | [default to undefined]

## Example

```typescript
import { ProgramFundingPage } from './api';

const instance: ProgramFundingPage = {
    count,
    data,
    end_index,
    is_more,
    start_index,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
