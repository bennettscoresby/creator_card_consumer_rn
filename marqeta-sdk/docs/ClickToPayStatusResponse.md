# ClickToPayStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | The status of the Click to Pay request.  * &#x60;SUCCESS&#x60;: The Click to Pay request was successful. * &#x60;FAILED&#x60;: The Click to Pay request failed. * &#x60;RECEIVED&#x60;: The Click to Pay request was received. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the Click to Pay request, used to track the status of the request. | [optional] [default to undefined]
**token_reference_id** | **string** | Unique identifier of the digital wallet token within the card network. | [optional] [default to undefined]

## Example

```typescript
import { ClickToPayStatusResponse } from './api';

const instance: ClickToPayStatusResponse = {
    status,
    token,
    token_reference_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
