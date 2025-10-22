# WebhookConfigResponseModel

Contains the configuration information for the webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_auth_password** | **string** | Password for accessing your webhook endpoint. | [default to undefined]
**basic_auth_username** | **string** | Username for accessing your webhook endpoint. | [default to undefined]
**custom_header** | **{ [key: string]: string; }** | Custom headers to be passed along with the request. | [optional] [default to undefined]
**secret** | **string** | Randomly chosen string used for implementing HMAC-SHA1. HMAC-SHA1 provides an added layer of security by authenticating the message and validating message integrity. Using this functionality requires that your webhook endpoint verify the message signature. For information about implementing this functionality, see &lt;&lt;/developer-guides/signature-verification, Signature Verification&gt;&gt;. | [optional] [default to undefined]
**url** | **string** | URL of your webhook endpoint. | [default to undefined]
**use_mtls** | **boolean** | Set to &#x60;true&#x60; to use use mutual transport layer security (mTLS) authentication for the webhook.  mTLS authentication is in the beta testing phase, and is not yet generally available. Contact your Marqeta representative for more information about using mTLS authentication. | [optional] [default to false]

## Example

```typescript
import { WebhookConfigResponseModel } from './api';

const instance: WebhookConfigResponseModel = {
    basic_auth_password,
    basic_auth_username,
    custom_header,
    secret,
    url,
    use_mtls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
