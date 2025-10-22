# Funding

Contains funding information for the transaction, including funding amount, type, and time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of funds loaded into the GPA. | [optional] [default to undefined]
**gateway_log** | [**GatewayLogModel**](GatewayLogModel.md) |  | [optional] [default to undefined]
**source** | [**FundingSourceModel**](FundingSourceModel.md) |  | [default to undefined]
**source_address** | [**CardholderAddressResponse**](CardholderAddressResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Funding } from './api';

const instance: Funding = {
    amount,
    gateway_log,
    source,
    source_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
