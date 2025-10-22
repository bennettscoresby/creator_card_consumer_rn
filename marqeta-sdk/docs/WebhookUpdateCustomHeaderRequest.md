# WebhookUpdateCustomHeaderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_header** | **{ [key: string]: string; }** | Additional custom information included in the HTTP header. For example, this might contain security information, along with Basic Authentication, when making a JIT Funding request. | [optional] [default to undefined]

## Example

```typescript
import { WebhookUpdateCustomHeaderRequest } from './api';

const instance: WebhookUpdateCustomHeaderRequest = {
    custom_header,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
