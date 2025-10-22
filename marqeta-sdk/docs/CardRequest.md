# CardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** |  | [optional] [default to undefined]
**activation_actions** | [**ActivationActions**](ActivationActions.md) |  | [optional] [default to undefined]
**bulk_issuance_token** | **string** |  | [optional] [default to undefined]
**card_product_token** | **string** |  | [default to undefined]
**expedite** | **boolean** |  | [optional] [default to false]
**expiration_offset** | [**ExpirationOffset**](ExpirationOffset.md) |  | [optional] [default to undefined]
**fulfillment** | [**CardFulfillmentRequest**](CardFulfillmentRequest.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**new_pan_from_card_token** | **string** |  | [optional] [default to undefined]
**reissue_pan_from_card_token** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**translate_pin_from_card_token** | **string** |  | [optional] [default to undefined]
**user_token** | **string** |  | [default to undefined]

## Example

```typescript
import { CardRequest } from './api';

const instance: CardRequest = {
    account_token,
    activation_actions,
    bulk_issuance_token,
    card_product_token,
    expedite,
    expiration_offset,
    fulfillment,
    metadata,
    new_pan_from_card_token,
    reissue_pan_from_card_token,
    token,
    translate_pin_from_card_token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
