# ClickToPayEnrollRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_auth_password** | **string** | Basic auth password to access your callback URL if authentication type is basic. If authentication type is basic, both username and password are required. | [optional] [default to undefined]
**basic_auth_username** | **string** | Basic auth username to access your callback URL if authentication type is basic. If authentication type is basic, both username and password are required. | [optional] [default to undefined]
**callback_authentication_type** | **string** | The type of authentication required for the callback URL.  * &#x60;OAUTH_BEARER_TOKEN&#x60;: OAuth bearer token for the callback URL. * &#x60;BASIC_AUTH&#x60;: Basic auth username and password for the callback URL. | [optional] [default to undefined]
**callback_secret_for_signature** | **string** | Randomly chosen string used for implementing HMAC-SHA1.  HMAC-SHA1 provides an added layer of security by authenticating the message and validating message integrity. Using this functionality requires that your callback endpoint verify the message signature. For information about implementing this functionality, see &lt;&lt;/developer-guides/signature-verification, Signature Verification&gt;&gt;. | [optional] [default to undefined]
**callback_url** | **string** | The URL to which the Click to Pay request status is sent via webhooks. | [optional] [default to undefined]
**card_token** | **string** | Unique identifier of the card resource. | [default to undefined]
**locale_country** | **string** | The user-provided country code. The ISO 3166 country code is a two-letter country code that represents a country. For example, the numeric code for the United States is &#x60;US&#x60;.  The ISO maintains the link:https://www.iso.org/iso-3166-country-codes.html[ISO-3166 country codes, window&#x3D;\&quot;_blank\&quot;]. | [default to undefined]
**locale_language** | **string** | The user-provided language choice. The ISO 639-2 language code is a two-letter country code that represents a language.  The ISO maintains the link:https://id.loc.gov/vocabulary/iso639-2.html[ISO 639-2 language codes, window&#x3D;\&quot;_blank\&quot;]. | [default to undefined]
**oauth_bearer_token** | **string** | OAuth bearer token to access your callback URL if the &#x60;callback_authentication_type&#x60; is &#x60;OAUTH_BEARER_TOKEN&#x60;. | [optional] [default to undefined]
**user_details** | [**Array&lt;ClickToPayEnrollRequestUserDetails&gt;**](ClickToPayEnrollRequestUserDetails.md) | User\&#39;s email address and mobile phone number with country code. | [default to undefined]
**user_token** | **string** | Unique identifier of the cardholder. | [default to undefined]

## Example

```typescript
import { ClickToPayEnrollRequest } from './api';

const instance: ClickToPayEnrollRequest = {
    basic_auth_password,
    basic_auth_username,
    callback_authentication_type,
    callback_secret_for_signature,
    callback_url,
    card_token,
    locale_country,
    locale_language,
    oauth_bearer_token,
    user_details,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
