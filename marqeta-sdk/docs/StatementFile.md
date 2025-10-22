# StatementFile

Collection of statement files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which the statement PDF file is generated. | [optional] [default to undefined]
**closing_date** | **string** | Date and time when the statement period ended. | [optional] [default to undefined]
**opening_date** | **string** | Date and time when the statement period began. | [optional] [default to undefined]
**signed_url** | **string** | Signed URL to retrieve the statement PDF file. | [optional] [default to undefined]
**statement_summary_token** | **string** | Unique identifier of the statement summary. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the statement file. | [optional] [default to undefined]
**type** | **string** | Type of file. | [optional] [default to undefined]

## Example

```typescript
import { StatementFile } from './api';

const instance: StatementFile = {
    account_token,
    closing_date,
    opening_date,
    signed_url,
    statement_summary_token,
    token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
