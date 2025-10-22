# Pos

Contains information about the point of sale, including details on how the card was presented.  Returned if provided by the card network, and the request uses Transaction Model v2 of the Marqeta Core API. Not returned for Transaction Model v1 requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_data_input_capability** | **string** | How the terminal accepts card data. | [optional] [default to undefined]
**card_holder_presence** | **boolean** | Whether the cardholder was present during the transaction. | [optional] [default to false]
**card_presence** | **boolean** | Whether the card was present during the transaction. | [optional] [default to false]
**cardholder_authentication_method** | **string** | Method used to authenticate the cardholder. | [optional] [default to undefined]
**country_code** | **string** | Country code of the card acceptor or terminal. | [optional] [default to undefined]
**county** | **string** | County of the card acceptor or terminal. | [optional] [default to undefined]
**is_installment** | **boolean** | Whether the transaction is an installment payment. | [optional] [default to false]
**is_recurring** | **boolean** | Whether the transaction is recurring. | [optional] [default to false]
**pan_entry_mode** | **string** | Method used for capturing the card primary account number (PAN) during the transaction. | [optional] [default to undefined]
**partial_approval_capable** | **boolean** | Indicates whether the card acceptor or terminal supports partial-approval transactions. | [optional] [default to false]
**pin_entry_mode** | **string** | Indicates whether the card acceptor or terminal can capture card personal identification numbers (PINs).  *NOTE:* This field does not indicate whether a PIN was entered. | [optional] [default to undefined]
**pin_present** | **boolean** | Indicates whether the cardholder entered a PIN during the transaction. | [optional] [default to false]
**purchase_amount_only** | **boolean** | Indicates whether the card acceptor or terminal supports purchase-only approvals. | [optional] [default to false]
**special_condition_indicator** | **string** | Indicates a higher-risk operation, such as a quasi-cash or cryptocurrency transaction.  These transactions typically involve non-financial institutions. | [optional] [default to undefined]
**state** | **string** | State, province, or territory of the card acceptor or terminal. | [optional] [default to undefined]
**terminal_attendance** | **string** | Whether the card acceptor/terminal was attended. | [optional] [default to undefined]
**terminal_id** | **string** | Card acceptor or terminal identification number. | [optional] [default to undefined]
**terminal_location** | **string** | Location of the card acceptor/terminal. | [optional] [default to undefined]
**terminal_type** | **string** | Type of card acceptor/terminal. | [optional] [default to undefined]
**transaction_initiated_by** | **string** | Specifies the initiator of the transaction. | [optional] [default to undefined]
**transaction_initiated_category** | **string** | Specifies the category of a point-of-sale transaction. | [optional] [default to undefined]
**zip** | **string** | United States ZIP code of the card acceptor or terminal. | [optional] [default to undefined]

## Example

```typescript
import { Pos } from './api';

const instance: Pos = {
    card_data_input_capability,
    card_holder_presence,
    card_presence,
    cardholder_authentication_method,
    country_code,
    county,
    is_installment,
    is_recurring,
    pan_entry_mode,
    partial_approval_capable,
    pin_entry_mode,
    pin_present,
    purchase_amount_only,
    special_condition_indicator,
    state,
    terminal_attendance,
    terminal_id,
    terminal_location,
    terminal_type,
    transaction_initiated_by,
    transaction_initiated_category,
    zip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
