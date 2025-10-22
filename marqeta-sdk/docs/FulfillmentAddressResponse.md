# FulfillmentAddressResponse

Specifies a fulfillment shipping or return address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **string** | Number and street of the address.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**address2** | **string** | Additional address information.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**city** | **string** | City of the address.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**country** | **string** | Country of the address.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**first_name** | **string** | First name of the addressee.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**last_name** | **string** | Last name of the addressee.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**middle_name** | **string** | Middle name of the addressee.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**phone** | **string** | Telephone number of the addressee.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**postal_code** | **string** | Postal code of the address.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**state** | **string** | State or province of the address.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**zip** | **string** | United States ZIP code of the address.  This field is returned if it exists in the resource. | [optional] [default to undefined]

## Example

```typescript
import { FulfillmentAddressResponse } from './api';

const instance: FulfillmentAddressResponse = {
    address1,
    address2,
    city,
    country,
    first_name,
    last_name,
    middle_name,
    phone,
    postal_code,
    state,
    zip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
