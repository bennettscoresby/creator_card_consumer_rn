# CardholderMetadata

Contains customer-provided information about the cardholder that performed the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **{ [key: string]: string; }** | Associates customer-provided metadata with the cardholder. | [optional] [default to undefined]

## Example

```typescript
import { CardholderMetadata } from './api';

const instance: CardholderMetadata = {
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
