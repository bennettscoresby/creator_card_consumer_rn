# BankTransferRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**channel** | **string** | default &#x3D; API | [optional] [default to undefined]
**created_by** | **string** |  | [optional] [default to undefined]
**currency_code** | **string** | default &#x3D; USD | [optional] [default to undefined]
**funding_source_token** | **string** |  | [default to undefined]
**memo** | **string** |  | [optional] [default to undefined]
**standard_entry_class_code** | **string** |  | [optional] [default to undefined]
**statement_descriptor** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**transfer_speed** | **string** | default &#x3D; STANDARD | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { BankTransferRequestModel } from './api';

const instance: BankTransferRequestModel = {
    amount,
    channel,
    created_by,
    currency_code,
    funding_source_token,
    memo,
    standard_entry_class_code,
    statement_descriptor,
    token,
    transfer_speed,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
