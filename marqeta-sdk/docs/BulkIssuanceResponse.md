# BulkIssuanceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_allocation** | **number** |  | [default to undefined]
**card_fulfillment_time** | **string** |  | [optional] [default to undefined]
**card_product_token** | **string** |  | [default to undefined]
**cards_processed** | **number** |  | [optional] [default to undefined]
**created_time** | **string** |  | [optional] [default to undefined]
**expedite** | **boolean** |  | [optional] [default to false]
**expiration_offset** | [**ExpirationOffset**](ExpirationOffset.md) |  | [optional] [default to undefined]
**fulfillment** | [**FulfillmentResponse**](FulfillmentResponse.md) |  | [default to undefined]
**name_line1_end_index** | **number** |  | [optional] [default to undefined]
**name_line1_start_index** | **number** |  | [optional] [default to undefined]
**name_line_1_numeric_postfix** | **boolean** |  | [optional] [default to false]
**name_line_1_random_postfix** | **boolean** |  | [optional] [default to false]
**provider_ship_date** | **string** |  | [optional] [default to undefined]
**provider_shipping_method** | **string** |  | [optional] [default to undefined]
**provider_tracking_number** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [default to undefined]
**user_association** | [**UserAssociation**](UserAssociation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BulkIssuanceResponse } from './api';

const instance: BulkIssuanceResponse = {
    card_allocation,
    card_fulfillment_time,
    card_product_token,
    cards_processed,
    created_time,
    expedite,
    expiration_offset,
    fulfillment,
    name_line1_end_index,
    name_line1_start_index,
    name_line_1_numeric_postfix,
    name_line_1_random_postfix,
    provider_ship_date,
    provider_shipping_method,
    provider_tracking_number,
    token,
    user_association,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
