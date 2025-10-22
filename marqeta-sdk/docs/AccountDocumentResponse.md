# AccountDocumentResponse

Account document response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_at** | **string** | Date and time when the user accepted the document on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**asset_token** | **string** | Unique identifier of the document on a credit account. | [optional] [default to undefined]
**asset_urls** | [**PolicyDocumentAssetURLs**](PolicyDocumentAssetURLs.md) |  | [optional] [default to undefined]
**effective_from** | **string** | Date and time when the document goes into effect on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { AccountDocumentResponse } from './api';

const instance: AccountDocumentResponse = {
    accepted_at,
    asset_token,
    asset_urls,
    effective_from,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
