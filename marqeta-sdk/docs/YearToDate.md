# YearToDate

Contains information about year-to-date totals for an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the associated credit account. | [default to undefined]
**created_time** | **string** | Date and time when the year-to-date total was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**statement_token** | **string** | Unique identifier of the statement summary from which to retrieve year-to-date totals. | [default to undefined]
**token** | **string** | Unique identifier of the year-to-date total. | [optional] [default to undefined]
**total_fees** | **number** | Total fees charged year-to-date. | [default to undefined]
**total_interest** | **number** | Total interest charged year-to-date. | [default to undefined]

## Example

```typescript
import { YearToDate } from './api';

const instance: YearToDate = {
    account_token,
    created_time,
    statement_token,
    token,
    total_fees,
    total_interest,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
