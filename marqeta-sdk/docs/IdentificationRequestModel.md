# IdentificationRequestModel

Contains identifications associated with the cardholder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **string** | Expiration date of the identification, if applicable. | [optional] [default to undefined]
**issuing_country** | **string** |  | [optional] [readonly] [default to undefined]
**type** | **string** | Type of identification.  *NOTE:* Full Social Security Number (SSN) is required for US-based user cardholder KYC verification, using the &#x60;SSN&#x60; type. Full Employer Identification Number (EIN) is required for business cardholder KYC verification, using the &#x60;BUSINESS_TAX_ID&#x60; or &#x60;BUSINESS_NUMBER&#x60; type. For business directors, use one of SSN, TIN, SIN, or NIN. Nine digits only, no delimiters. &#x60;123456789&#x60;, for example. | [readonly] [default to undefined]
**value** | **string** | Number associated with the identification. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { IdentificationRequestModel } from './api';

const instance: IdentificationRequestModel = {
    expiration_date,
    issuing_country,
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
