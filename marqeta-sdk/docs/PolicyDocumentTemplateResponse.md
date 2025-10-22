# PolicyDocumentTemplateResponse

Response details for a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template_created_time** | **string** | Date and time when the template was created. | [optional] [default to undefined]
**template_token** | **string** | Unique identifier of a template, which is a document that serves as an initial disclosure but does not contain finalized values. | [optional] [default to undefined]
**template_urls** | [**PolicyDocumentTemplateURLs**](PolicyDocumentTemplateURLs.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PolicyDocumentTemplateResponse } from './api';

const instance: PolicyDocumentTemplateResponse = {
    template_created_time,
    template_token,
    template_urls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
