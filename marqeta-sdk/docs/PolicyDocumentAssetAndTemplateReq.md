# PolicyDocumentAssetAndTemplateReq

Request details for a specific asset and the template on which it was based.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_token** | **string** | Unique identifier of the asset, which is the version of a document that is based on the template and contains finalized values. The values are finalized when the bundle containing the document is created. | [default to undefined]
**template_token** | **string** | Unique identifier of the template, which is the version of a document that serves as an initial disclosure but does not contain finalized values. The values are finalized in the asset version of the document. | [default to undefined]

## Example

```typescript
import { PolicyDocumentAssetAndTemplateReq } from './api';

const instance: PolicyDocumentAssetAndTemplateReq = {
    asset_token,
    template_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
