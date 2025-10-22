# CardholderAddressResponse

Contains information about the billing address of the funding source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Whether the address is active. | [optional] [default to false]
**address_1** | **string** | Street address of the funding source. | [default to undefined]
**address_2** | **string** | Additional address information for the funding source.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**business_token** | **string** | Unique identifier of the business account holder associated with the address.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**city** | **string** | City of the funding source. | [default to undefined]
**country** | **string** | Country of the funding source. | [default to undefined]
**created_time** | **string** | Date and time when the address was created, in UTC. | [default to undefined]
**first_name** | **string** | First name of the account holder associated with the funding source. | [default to undefined]
**is_default_address** | **boolean** | Whether this address is the default address used by the funding source. | [optional] [default to false]
**last_modified_time** | **string** | Date and time when the address was last modified, in UTC.  This field is returned if it exists in the resource. | [default to undefined]
**last_name** | **string** | Last name of the account holder associated with the funding source. | [default to undefined]
**phone** | **string** | Phone number of the funding source.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**postal_code** | **string** | Postal code of the funding source. | [default to undefined]
**state** | **string** | Two-character state, provincial, or territorial abbreviation.  For the complete list, see &lt;&lt;/core-api/kyc-verification#_valid_state_provincial_territorial_and_federal_abbreviations, Valid state, provincial, territorial, and federal abbreviations&gt;&gt;. | [default to undefined]
**token** | **string** | Unique identifier of the &#x60;funding_source_address&#x60; object. | [default to undefined]
**user_token** | **string** | Unique identifier of the user account holder associated with the address.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**zip** | **string** | United States ZIP code of the funding source. | [default to undefined]

## Example

```typescript
import { CardholderAddressResponse } from './api';

const instance: CardholderAddressResponse = {
    active,
    address_1,
    address_2,
    business_token,
    city,
    country,
    created_time,
    first_name,
    is_default_address,
    last_modified_time,
    last_name,
    phone,
    postal_code,
    state,
    token,
    user_token,
    zip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
