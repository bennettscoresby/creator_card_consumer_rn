# AndroidPushTokenRequestAddress

Specifies the cardholder address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **string** | Street address of the cardholder. | [optional] [default to undefined]
**address2** | **string** | Additional address information for the cardholder, such as a suite or apartment number.  &#x60;Suite 600&#x60;, for example. | [optional] [default to undefined]
**city** | **string** | City of the cardholder. | [optional] [default to undefined]
**country** | **string** | Two-character link:https://www.iso.org/iso-3166-country-codes.html[ISO alpha-2 country code, window&#x3D;\&quot;_blank\&quot;]. &#x60;US&#x60;, for example. | [optional] [default to undefined]
**name** | **string** | Name of the cardholder. | [optional] [default to undefined]
**phone** | **string** | Telephone number of the cardholder. | [optional] [default to undefined]
**postal_code** | **string** | Postal code of the cardholder, such as a United States ZIP code. &#x60;94612&#x60;, for example. | [optional] [default to undefined]
**state** | **string** | Two-character state, provincial, or territorial abbreviation.  For the complete list, see &lt;&lt;/core-api/kyc-verification#_valid_state_provincial_territorial_and_federal_abbreviations, Valid state, provincial, territorial, and federal abbreviations&gt;&gt;. | [optional] [default to undefined]
**zip** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AndroidPushTokenRequestAddress } from './api';

const instance: AndroidPushTokenRequestAddress = {
    address1,
    address2,
    city,
    country,
    name,
    phone,
    postal_code,
    state,
    zip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
