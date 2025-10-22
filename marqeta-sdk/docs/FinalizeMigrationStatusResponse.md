# FinalizeMigrationStatusResponse

Finalize status of a migrated account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account with associated finalize response. | [optional] [default to undefined]
**available_credit_adjustment** | **number** | the amount of the available credit adjustment created. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the finalize status was created, in UTC. | [optional] [default to undefined]
**current_balance_adjustment** | **number** | the amount of the curent balance adjustment created. | [optional] [default to undefined]
**expected_available_credit** | **number** | the latest balance of the account from the migrated program | [optional] [default to undefined]
**expected_current_balance** | **number** | the latest balance of the account from the migrated program | [optional] [default to undefined]
**final_available_credit** | **number** | the latest balance of the account from the migrated program | [optional] [default to undefined]
**final_current_balance** | **number** | the latest balance of the account from the migrated program | [optional] [default to undefined]
**status** | **string** | Finalize status of the account. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the finalize entry. | [optional] [default to undefined]
**updated_time** | **string** | Date and time when the finalize status was updated, in UTC. | [optional] [default to undefined]
**user_token** | **string** | Unique user token tied to the credit account. | [optional] [default to undefined]

## Example

```typescript
import { FinalizeMigrationStatusResponse } from './api';

const instance: FinalizeMigrationStatusResponse = {
    account_token,
    available_credit_adjustment,
    created_time,
    current_balance_adjustment,
    expected_available_credit,
    expected_current_balance,
    final_available_credit,
    final_current_balance,
    status,
    token,
    updated_time,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
