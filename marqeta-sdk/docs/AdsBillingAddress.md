# AdsBillingAddress

Billing address associated with the payment credential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | Address line 1 of the billing address associated with the payment credential. | [optional] [default to undefined]
**addressLine2** | **string** | Address line 2 of the billing address associated with the payment credential. | [optional] [default to undefined]
**buildingNumber** | **string** | Building number of the billing address associated with the payment credential. | [optional] [default to undefined]
**city** | **string** | City of the billing address associated with the payment credential. | [optional] [default to undefined]
**country** | **string** | Country of the billing address associated with the payment credential, expressed as an ISO 3166 code. For example, the numeric code for the United States is &#x60;840&#x60; and the alpha-3 code is &#x60;USA&#x60;.  The ISO maintains the link:https://www.iso.org/iso-3166-country-codes.html[full list of ISO 3166 country codes, window&#x3D;\&quot;_blank\&quot;]. | [default to undefined]
**minorSubdivision** | **string** | Minor subdivision of the billing address associated with the payment credential. | [optional] [default to undefined]
**postalCode** | **string** | Postal code of the billing address associated with the payment credential. | [optional] [default to undefined]
**state** | **string** | State of the billing address associated with the payment credential. | [optional] [default to undefined]
**streetName** | **string** | Street name of the billing address associated with the payment credential. | [optional] [default to undefined]

## Example

```typescript
import { AdsBillingAddress } from './api';

const instance: AdsBillingAddress = {
    addressLine1,
    addressLine2,
    buildingNumber,
    city,
    country,
    minorSubdivision,
    postalCode,
    state,
    streetName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
