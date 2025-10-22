# AccountFunding

Contains details about account funding transactions. Account funding transactions move money into a cardholder\'s general purpose account (GPA).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entry_device_type** | **string** |  | [optional] [default to undefined]
**funding_source** | **string** | Specifies the type of account from which the transaction was funded. | [optional] [default to undefined]
**receiver_account_type** | **string** | Specifies the type of account receiving the funding. | [optional] [default to undefined]
**receiver_name** | **string** | Specifies the name of the account holder receiving the funding. | [optional] [default to undefined]
**reference_id** | **string** |  | [optional] [default to undefined]
**screening_score** | **string** | Sanctions screening score to assist with meeting Anti-Money Laundering (AML) obligations.  Higher scores indicate that the sender\&#39;s data more closely resembles an entry on the regulatory watchlist.  A value of 999 means no score was available. | [optional] [default to undefined]
**sender_account_number** | **string** | Account number of the sender funding the transaction. | [optional] [default to undefined]
**sender_address** | **string** | Street address of the sender funding the transaction. | [optional] [default to undefined]
**sender_city** | **string** | City of the sender funding the transaction. | [optional] [default to undefined]
**sender_country** | **string** | Country of the sender funding the transaction. | [optional] [default to undefined]
**sender_date_of_birth** | **string** |  | [optional] [default to undefined]
**sender_name** | **string** | Name of the sender funding the transaction. | [optional] [default to undefined]
**sender_postal_code** | **string** |  | [optional] [default to undefined]
**sender_state** | **string** | State or province of the sender funding the transaction. | [optional] [default to undefined]
**transaction_purpose** | **string** | Describes the purpose of the account funding transaction. | [optional] [default to undefined]
**transaction_type** | **string** | Specifies the account funding transaction type. | [optional] [default to undefined]

## Example

```typescript
import { AccountFunding } from './api';

const instance: AccountFunding = {
    entry_device_type,
    funding_source,
    receiver_account_type,
    receiver_name,
    reference_id,
    screening_score,
    sender_account_number,
    sender_address,
    sender_city,
    sender_country,
    sender_date_of_birth,
    sender_name,
    sender_postal_code,
    sender_state,
    transaction_purpose,
    transaction_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
