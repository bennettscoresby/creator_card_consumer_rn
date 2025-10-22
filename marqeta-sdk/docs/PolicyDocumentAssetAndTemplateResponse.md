# PolicyDocumentAssetAndTemplateResponse

Return details for a specific asset and the template on which it was based.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_created_time** | **string** | Date and time when the asset was created. | [optional] [default to undefined]
**asset_token** | **string** | Unique identifier of the asset, which is the version of a document that is based on the template and contains finalized values. The values are finalized when the bundle containing the document is created. | [optional] [default to undefined]
**asset_urls** | [**PolicyDocumentAssetURLs**](PolicyDocumentAssetURLs.md) |  | [optional] [default to undefined]
**template_created_time** | **string** | Date and time when the template was created. | [optional] [default to undefined]
**template_token** | **string** | Unique identifier of the template, which is the version of a document that serves as an initial disclosure but does not contain finalized values. Values are finalized in the asset version of the document. | [optional] [default to undefined]
**template_urls** | [**PolicyDocumentTemplateURLs**](PolicyDocumentTemplateURLs.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PolicyDocumentAssetAndTemplateResponse } from './api';

const instance: PolicyDocumentAssetAndTemplateResponse = {
    asset_created_time,
    asset_token,
    asset_urls,
    template_created_time,
    template_token,
    template_urls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
