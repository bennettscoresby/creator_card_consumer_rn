# StatementInterestChargesPage

Return paginated statement interest charges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account on which the statement interest charge is generated. | [default to undefined]
**data** | [**Array&lt;StatementInterestCharge&gt;**](StatementInterestCharge.md) | Contains one or more interest charges on a statement. | [default to undefined]
**statement_summary_token** | **string** | Unique identifier of the statement summary. | [default to undefined]

## Example

```typescript
import { StatementInterestChargesPage } from './api';

const instance: StatementInterestChargesPage = {
    account_token,
    data,
    statement_summary_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
