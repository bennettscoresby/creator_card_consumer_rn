# OriginalCredit

Contains information about an original credit transaction (OCT), which enables the cardholder to receive funds on the specified card from an external source via the card network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deferred_hold_by** | **string** |  | [optional] [default to undefined]
**entry_device_type** | **string** |  | [optional] [default to undefined]
**fast_funds_enabled** | **boolean** | Indicates that Fast Funds are enabled for dual-message original credit transactions. If the value of this field is &#x60;true&#x60;, you must make the funds available to your cardholder within 30 minutes of the transaction. | [optional] [default to undefined]
**funding_source** | **string** | Sender\&#39;s account from which the OCT draws funds. | [optional] [default to undefined]
**reference_id** | **string** |  | [optional] [default to undefined]
**screening_score** | **string** | Sanctions screening score to assist with meeting Anti-Money Laundering (AML) obligations.  Higher scores indicate that the sender\&#39;s data more closely resembles an entry on the regulatory watchlist.  A value of 999 means that no screening score is available. | [optional] [default to undefined]
**sender_account_number** | **string** |  | [optional] [default to undefined]
**sender_account_type** | **string** | The type of account from which the OCT draws funds. | [optional] [default to undefined]
**sender_address** | **string** | Sender\&#39;s street address. | [optional] [default to undefined]
**sender_city** | **string** | Sender\&#39;s city. | [optional] [default to undefined]
**sender_country** | **string** | Sender\&#39;s country. | [optional] [default to undefined]
**sender_date_of_birth** | **string** |  | [optional] [default to undefined]
**sender_name** | **string** | Full name of the sender. | [optional] [default to undefined]
**sender_postal_code** | **string** |  | [optional] [default to undefined]
**sender_state** | **string** | Sender\&#39;s state. | [optional] [default to undefined]
**transaction_purpose** | **string** | The purpose of the original credit transaction. | [optional] [default to undefined]
**transaction_type** | **string** | Type of original credit transaction. | [optional] [default to undefined]

## Example

```typescript
import { OriginalCredit } from './api';

const instance: OriginalCredit = {
    deferred_hold_by,
    entry_device_type,
    fast_funds_enabled,
    funding_source,
    reference_id,
    screening_score,
    sender_account_number,
    sender_account_type,
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
