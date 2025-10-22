# GpaResponse

Contains information about a GPA order, including fees, funding sources, and addresses. See <</core-api/gpa-orders, GPA Orders>> for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount funded. | [default to undefined]
**business_token** | **string** | Unique identifier of the business.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the GPA order was created, in UTC. | [default to undefined]
**currency_code** | **string** | Three-digit ISO 4217 currency code. | [default to undefined]
**fees** | [**Array&lt;FeeDetail&gt;**](FeeDetail.md) | List of fees associated with the funding transaction.  This array is returned if it exists in the resource. | [optional] [default to undefined]
**funding** | [**Funding**](Funding.md) |  | [default to undefined]
**funding_source_address_token** | **string** | Unique identifier of the funding source address to use for this order. | [optional] [default to undefined]
**funding_source_token** | **string** | Unique identifier of the funding source to use for this order. | [default to undefined]
**gateway_message** | **string** | Message about the status of the funding request. Useful for determining whether it was approved and completed successfully, declined by the gateway, or timed out.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**gateway_token** | **number** | Unique identifier of the JIT Funding request and response.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**jit_funding** | [**JitFundingApi**](JitFundingApi.md) |  | [optional] [default to undefined]
**last_modified_time** | **string** | Date and time when the GPA order was last modified, in UTC. | [default to undefined]
**memo** | **string** | Additional descriptive text.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**response** | [**Response**](Response.md) |  | [default to undefined]
**state** | **string** | Current status of the funding transaction. | [default to undefined]
**tags** | **string** | Comma-delimited list of tags describing the GPA order.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the GPA order. | [default to undefined]
**transaction_token** | **string** | Unique identifier of the transaction being funded. | [default to undefined]
**user_token** | **string** | Unique identifier of the user resource.  This field is returned if it exists in the resource. | [optional] [default to undefined]

## Example

```typescript
import { GpaResponse } from './api';

const instance: GpaResponse = {
    amount,
    business_token,
    created_time,
    currency_code,
    fees,
    funding,
    funding_source_address_token,
    funding_source_token,
    gateway_message,
    gateway_token,
    jit_funding,
    last_modified_time,
    memo,
    response,
    state,
    tags,
    token,
    transaction_token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
