# VisaClickToPayUser

User\'s email address, mobile phone number without country code, first name, last name, locale, and country.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **string** | ISO 3166-1 alpha-3 country code. | [default to undefined]
**email** | **string** | User\&#39;s email address. | [default to undefined]
**firstName** | **string** | User\&#39;s first name. | [default to undefined]
**lastName** | **string** | User\&#39;s last name. | [default to undefined]
**locale** | **string** | The user-provided language choice. The ISO 639-2 language code is a two-letter country code that represents a language.  The ISO maintains the link:https://id.loc.gov/vocabulary/iso639-2.html[ISO 639-2 language codes, window&#x3D;\&quot;_blank\&quot;]. | [default to undefined]
**phone** | **string** | User\&#39;s mobile phone number without country code. | [default to undefined]
**userToken** | **string** | Unique identifier of the cardholder. | [default to undefined]

## Example

```typescript
import { VisaClickToPayUser } from './api';

const instance: VisaClickToPayUser = {
    country,
    email,
    firstName,
    lastName,
    locale,
    phone,
    userToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
