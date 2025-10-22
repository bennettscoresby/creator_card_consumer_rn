# GpaReturns

Contains information about a GPA unload order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of funds returned to the funding source. | [default to undefined]
**created_time** | **string** | Date and time when the GPA unload order was created, in UTC. | [default to undefined]
**funding** | [**Funding**](Funding.md) |  | [default to undefined]
**funding_source_address_token** | **string** | Identifies the funding source used for this order. | [optional] [default to undefined]
**funding_source_token** | **string** | Identifies the funding source used for this order. | [default to undefined]
**jit_funding** | [**JitFundingApi**](JitFundingApi.md) |  | [optional] [default to undefined]
**last_modified_time** | **string** | Date and time when the GPA unload order was last modified, in UTC. | [default to undefined]
**memo** | **string** | Additional descriptive text. | [optional] [default to undefined]
**original_order_token** | **string** | Identifies the original GPA order. | [optional] [default to undefined]
**response** | [**Response**](Response.md) |  | [default to undefined]
**state** | **string** | Current status of the GPA unload order. | [default to undefined]
**tags** | **string** | Comma-delimited list of tags describing the GPA order. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the GPA unload order. | [default to undefined]
**transaction_token** | **string** | Unique identifier of the transaction. | [default to undefined]

## Example

```typescript
import { GpaReturns } from './api';

const instance: GpaReturns = {
    amount,
    created_time,
    funding,
    funding_source_address_token,
    funding_source_token,
    jit_funding,
    last_modified_time,
    memo,
    original_order_token,
    response,
    state,
    tags,
    token,
    transaction_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
