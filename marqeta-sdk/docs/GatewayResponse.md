# GatewayResponse

Contains information from the gateway in response to a funding request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Code received from the gateway. | [default to undefined]
**data** | [**JitProgramResponse**](JitProgramResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GatewayResponse } from './api';

const instance: GatewayResponse = {
    code,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
