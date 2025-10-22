# CardProductFulfillment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_zero_card_security_code** | **boolean** |  | [optional] [default to false]
**allow_card_creation** | **boolean** |  | [optional] [default to true]
**bin_issue_country** | **string** |  | [optional] [default to undefined]
**bin_prefix** | **string** |  | [optional] [default to undefined]
**bin_prefixes** | [**Array&lt;BinPrefixRequest&gt;**](BinPrefixRequest.md) | List of BIN prefixes for multi-BIN support | [optional] [default to undefined]
**bulk_ship** | **boolean** |  | [optional] [default to false]
**card_personalization** | [**CardPersonalization**](CardPersonalization.md) |  | [default to undefined]
**enable_offline_pin** | **boolean** |  | [optional] [default to false]
**fulfillment_provider** | **string** |  | [optional] [default to FulfillmentProviderEnum_Perfectplastic]
**package_id** | **string** |  | [optional] [default to '0']
**pan_length** | **string** |  | [optional] [default to '16']
**payment_instrument** | **string** |  | [optional] [default to PaymentInstrumentEnum_PhysicalMsr]
**shipping** | [**Shipping**](Shipping.md) |  | [optional] [default to undefined]
**uppercase_name_lines** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { CardProductFulfillment } from './api';

const instance: CardProductFulfillment = {
    all_zero_card_security_code,
    allow_card_creation,
    bin_issue_country,
    bin_prefix,
    bin_prefixes,
    bulk_ship,
    card_personalization,
    enable_offline_pin,
    fulfillment_provider,
    package_id,
    pan_length,
    payment_instrument,
    shipping,
    uppercase_name_lines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
