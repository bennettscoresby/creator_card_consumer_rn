# CardTransitionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **string** |  | [default to undefined]
**bulk_issuance_token** | **string** |  | [optional] [default to undefined]
**card** | [**CardMetadata**](CardMetadata.md) |  | [optional] [default to undefined]
**card_product_token** | **string** |  | [default to undefined]
**card_token** | **string** |  | [default to undefined]
**channel** | **string** |  | [default to undefined]
**created_time** | **string** |  | [optional] [default to undefined]
**created_timestamp** | **string** |  | [optional] [default to undefined]
**expedite** | **boolean** |  | [optional] [default to false]
**expiration** | **string** |  | [default to undefined]
**expiration_time** | **string** |  | [default to undefined]
**fulfillment** | [**CardFulfillmentRequest**](CardFulfillmentRequest.md) |  | [optional] [default to undefined]
**fulfillment_status** | **string** |  | [default to undefined]
**last_four** | **string** |  | [default to undefined]
**new_pan_from_card_token** | **string** |  | [optional] [default to undefined]
**pan** | **string** |  | [default to undefined]
**pin_is_set** | **boolean** |  | [default to false]
**reason** | **string** |  | [optional] [default to undefined]
**reason_code** | **string** |  | [optional] [default to undefined]
**reissue_pan_from_card_token** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [default to undefined]
**token** | **string** |  | [default to undefined]
**type** | **string** |  | [readonly] [default to undefined]
**user** | [**CardholderMetadata**](CardholderMetadata.md) |  | [optional] [default to undefined]
**user_token** | **string** |  | [default to undefined]
**validations** | [**ValidationsResponse**](ValidationsResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CardTransitionResponse } from './api';

const instance: CardTransitionResponse = {
    barcode,
    bulk_issuance_token,
    card,
    card_product_token,
    card_token,
    channel,
    created_time,
    created_timestamp,
    expedite,
    expiration,
    expiration_time,
    fulfillment,
    fulfillment_status,
    last_four,
    new_pan_from_card_token,
    pan,
    pin_is_set,
    reason,
    reason_code,
    reissue_pan_from_card_token,
    state,
    token,
    type,
    user,
    user_token,
    validations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
