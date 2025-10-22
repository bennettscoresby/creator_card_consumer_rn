# BankTransferResponseModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**batch_number** | **string** |  | [optional] [default to undefined]
**channel** | **string** | default &#x3D; API | [optional] [default to undefined]
**created_by** | **string** |  | [optional] [default to undefined]
**created_time** | **string** |  | [optional] [default to undefined]
**currency_code** | **string** | default &#x3D; USD | [optional] [default to undefined]
**funding_source_token** | **string** |  | [default to undefined]
**is_early_funded** | **boolean** |  | [optional] [default to undefined]
**last_modified_time** | **string** |  | [optional] [default to undefined]
**memo** | **string** |  | [optional] [default to undefined]
**return_code** | **string** |  | [optional] [default to undefined]
**return_reason** | **string** |  | [optional] [default to undefined]
**standard_entry_class_code** | **string** |  | [optional] [default to undefined]
**statement_descriptor** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**transfer_speed** | **string** | default &#x3D; STANDARD | [optional] [default to undefined]
**transitions** | [**Array&lt;BankTransferTransitionResponseModel&gt;**](BankTransferTransitionResponseModel.md) |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { BankTransferResponseModel } from './api';

const instance: BankTransferResponseModel = {
    amount,
    batch_number,
    channel,
    created_by,
    created_time,
    currency_code,
    funding_source_token,
    is_early_funded,
    last_modified_time,
    memo,
    return_code,
    return_reason,
    standard_entry_class_code,
    statement_descriptor,
    status,
    token,
    transfer_speed,
    transitions,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
