# CardUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expedite** | **boolean** |  | [optional] [default to false]
**fulfillment** | [**CardFulfillmentRequest**](CardFulfillmentRequest.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**token** | **string** |  | [default to undefined]
**user_token** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CardUpdateRequest } from './api';

const instance: CardUpdateRequest = {
    expedite,
    fulfillment,
    metadata,
    token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
