# BulkIssuanceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_allocation** | **number** |  | [default to undefined]
**card_product_token** | **string** |  | [default to undefined]
**expedite** | **boolean** |  | [optional] [default to false]
**expiration_offset** | [**ExpirationOffset**](ExpirationOffset.md) |  | [optional] [default to undefined]
**fulfillment** | [**FulfillmentRequest**](FulfillmentRequest.md) |  | [default to undefined]
**name_line_1_numeric_postfix** | **boolean** |  | [optional] [default to false]
**name_line_1_random_postfix** | **boolean** |  | [optional] [default to false]
**token** | **string** |  | [default to undefined]
**user_association** | [**UserAssociation**](UserAssociation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BulkIssuanceRequest } from './api';

const instance: BulkIssuanceRequest = {
    card_allocation,
    card_product_token,
    expedite,
    expiration_offset,
    fulfillment,
    name_line_1_numeric_postfix,
    name_line_1_random_postfix,
    token,
    user_association,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
