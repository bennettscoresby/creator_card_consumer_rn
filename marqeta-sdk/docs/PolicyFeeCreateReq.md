# PolicyFeeCreateReq

Request details for a fee policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**PolicyFeeAccount**](PolicyFeeAccount.md) |  | [default to undefined]
**description** | **string** | Description of the fee policy. | [optional] [default to undefined]
**name** | **string** | Name of the fee policy. | [default to undefined]
**token** | **string** | Unique identifier of the fee policy. | [optional] [default to undefined]

## Example

```typescript
import { PolicyFeeCreateReq } from './api';

const instance: PolicyFeeCreateReq = {
    account,
    description,
    name,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
