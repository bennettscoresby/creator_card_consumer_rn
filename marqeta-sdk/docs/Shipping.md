# Shipping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**care_of_line** | **string** | 255 char max | [optional] [default to undefined]
**method** | **string** |  | [optional] [default to undefined]
**recipient_address** | [**FulfillmentAddressRequest**](FulfillmentAddressRequest.md) |  | [optional] [default to undefined]
**return_address** | [**FulfillmentAddressRequest**](FulfillmentAddressRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Shipping } from './api';

const instance: Shipping = {
    care_of_line,
    method,
    recipient_address,
    return_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
