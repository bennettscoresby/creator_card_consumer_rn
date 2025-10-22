# PolicyDocumentAssetResponse

Return details for a specific asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_created_time** | **string** | Date and time when the asset was created. | [optional] [default to undefined]
**asset_token** | **string** | Unique identifier of the asset, which is a type of document that contains finalized values. The values are finalized when the bundle containing the document is created. | [optional] [default to undefined]
**asset_urls** | [**PolicyDocumentAssetURLs**](PolicyDocumentAssetURLs.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PolicyDocumentAssetResponse } from './api';

const instance: PolicyDocumentAssetResponse = {
    asset_created_time,
    asset_token,
    asset_urls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
