# ShippingInformationResponse

Specifies shipping details for the order.  This object is returned if it exists in the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**care_of_line** | **string** | Specifies the value of the care of (C/O) line on the mailing carrier.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**method** | **string** | Specifies the shipping service.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**recipient_address** | [**FulfillmentAddressResponse**](FulfillmentAddressResponse.md) |  | [optional] [default to undefined]
**return_address** | [**FulfillmentAddressResponse**](FulfillmentAddressResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ShippingInformationResponse } from './api';

const instance: ShippingInformationResponse = {
    care_of_line,
    method,
    recipient_address,
    return_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
