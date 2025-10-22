# ProgramTransferResponse

Contains information about a program transfer, which moves funds from an account holder\'s GPA to a program funding source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of program transfer. | [default to undefined]
**business_token** | **string** | Unique identifier of the business account holder. Returned if &#x60;user_token&#x60; is not specified. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the program transfer object was created, in UTC. | [optional] [default to undefined]
**currency_code** | **string** | Three-digit ISO 4217 currency code. | [default to undefined]
**fees** | [**Array&lt;FeeDetail&gt;**](FeeDetail.md) | Contains attributes that define characteristics of one or more fees. | [optional] [default to undefined]
**jit_funding** | [**JitFundingApi**](JitFundingApi.md) |  | [optional] [default to undefined]
**memo** | **string** | Additional description of the program transfer. | [optional] [default to undefined]
**tags** | **string** | Comma-delimited list of tags describing the program transfer. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the program transfer. | [optional] [default to undefined]
**transaction_token** | **string** | Unique identifier of the transaction. | [default to undefined]
**type_token** | **string** | Unique identifier of the program transfer type. | [default to undefined]
**user_token** | **string** | Unique identifier of the user account holder. Returned if &#x60;business_token&#x60; is not specified. | [optional] [default to undefined]

## Example

```typescript
import { ProgramTransferResponse } from './api';

const instance: ProgramTransferResponse = {
    amount,
    business_token,
    created_time,
    currency_code,
    fees,
    jit_funding,
    memo,
    tags,
    token,
    transaction_token,
    type_token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
