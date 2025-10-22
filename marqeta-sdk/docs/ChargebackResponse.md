# ChargebackResponse

Contains the chargeback object associated with this transaction if a chargeback has been initiated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the chargeback. | [default to undefined]
**channel** | **string** | Channel the chargeback came through. | [default to undefined]
**created_time** | **string** | Date and time when the chargeback was created. Not returned for transactions when the associated chargeback is in the &#x60;INITIATED&#x60; state. | [default to undefined]
**credit_user** | **boolean** | Whether to credit the user for the chargeback amount. | [default to false]
**currency_code** | **string** |  | [optional] [default to undefined]
**last_modified_time** | **string** | Date and time when the chargeback was last modified. Not returned for transactions when the associated chargeback is in the &#x60;INITIATED&#x60; state. | [default to undefined]
**memo** | **string** | Additional comments about the chargeback. | [optional] [default to undefined]
**network** | **string** | Network handling the chargeback. | [default to undefined]
**network_case_id** | **string** | Network-assigned identifier of the chargeback. | [optional] [default to undefined]
**reason_code** | **string** | Identifies the standardized reason for the chargeback. | [optional] [default to undefined]
**state** | **string** | State of the case. | [default to undefined]
**token** | **string** | Unique identifier of the chargeback. | [default to undefined]
**transaction_token** | **string** | Unique identifier of the transaction being charged back. | [default to undefined]

## Example

```typescript
import { ChargebackResponse } from './api';

const instance: ChargebackResponse = {
    amount,
    channel,
    created_time,
    credit_user,
    currency_code,
    last_modified_time,
    memo,
    network,
    network_case_id,
    reason_code,
    state,
    token,
    transaction_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
