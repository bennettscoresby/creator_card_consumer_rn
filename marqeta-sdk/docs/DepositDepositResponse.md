# DepositDepositResponse

Contains information about a direct deposit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount being debited or credited. | [optional] [default to undefined]
**business_token** | **string** | The unique identifier of the business account holder. | [optional] [default to undefined]
**company_discretionary_data** | **string** | Company-specific data provided by the direct deposit originator. | [optional] [default to undefined]
**company_entry_description** | **string** | Company-specific data provided by the direct deposit originator. | [optional] [default to undefined]
**company_identification** | **string** | Alphanumeric code that identifies the direct deposit originator. | [optional] [default to undefined]
**company_name** | **string** | Name of the direct deposit originator. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the direct deposit account was created. | [optional] [default to undefined]
**direct_deposit_account_token** | **string** | The unique identifier of the direct deposit account. | [optional] [default to undefined]
**individual_identification_number** | **string** | Accounting number by which the recipient is known to the direct deposit originator. | [optional] [default to undefined]
**individual_name** | **string** | Name of the direct deposit recipient. | [optional] [default to undefined]
**last_modified_time** | **string** | Date and time when the direct deposit account was last modified. | [optional] [default to undefined]
**settlement_date** | **string** | Date and time when the credit or debit is applied. | [optional] [default to undefined]
**standard_entry_class_code** | **string** | Three-letter code identifying the type of entry. | [optional] [default to undefined]
**state** | **string** | Current status of the direct deposit record. | [optional] [default to undefined]
**state_reason** | **string** | Explanation for why the direct deposit record is in the current state. | [optional] [default to undefined]
**state_reason_code** | **string** | Standard code describing the reason for the current state. | [optional] [default to undefined]
**token** | **string** | The unique identifier of the direct deposit record. | [optional] [default to undefined]
**type** | **string** | Determines whether funds are being debited from or credited to the account. | [optional] [default to undefined]
**user_token** | **string** | The unique identifier of the user account holder. | [optional] [default to undefined]

## Example

```typescript
import { DepositDepositResponse } from './api';

const instance: DepositDepositResponse = {
    amount,
    business_token,
    company_discretionary_data,
    company_entry_description,
    company_identification,
    company_name,
    created_time,
    direct_deposit_account_token,
    individual_identification_number,
    individual_name,
    last_modified_time,
    settlement_date,
    standard_entry_class_code,
    state,
    state_reason,
    state_reason_code,
    token,
    type,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
