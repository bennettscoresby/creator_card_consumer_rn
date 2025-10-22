# GatewayLogModel

Contains information from the JIT Funding gateway in response to a funding request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **number** | Length of time in milliseconds that the gateway took to respond to a funding request. | [optional] [default to undefined]
**message** | **string** | Message about the status of the funding request. Useful for determining whether it was approved and completed successfully, declined by the gateway, or timed out. | [default to undefined]
**order_number** | **string** | Customer order number, same value as &#x60;transaction.token&#x60;. | [default to undefined]
**response** | [**GatewayResponse**](GatewayResponse.md) |  | [optional] [default to undefined]
**timed_out** | **boolean** | Whether the gateway sent a response (&#x60;true&#x60;) or timed out (&#x60;false&#x60;). | [optional] [default to false]
**transaction_id** | **string** | Customer-defined identifier for the transaction. | [default to undefined]

## Example

```typescript
import { GatewayLogModel } from './api';

const instance: GatewayLogModel = {
    duration,
    message,
    order_number,
    response,
    timed_out,
    transaction_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
