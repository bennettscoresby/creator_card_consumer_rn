# MerchantScope

Defines the group of merchants to which the velocity control applies.  Populate no more than one field of the `merchant_scope` object. If no fields are populated, the velocity control applies to all merchants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mcc** | **string** | Merchant Category Code (MCC). Identifies the type of products or services provided by the merchant.  Enter a value to control spending on a particular type of product or service. | [optional] [default to undefined]
**mcc_group** | **string** | Token identifying a group of MCCs. Enter a value to control spending on a group of product or service types.  Send a &#x60;GET&#x60; request to &#x60;/mccgroups&#x60; to retrieve MCC group tokens. | [optional] [default to undefined]
**mid** | **string** | Merchant identifier (MID). Identifies a specific merchant.  Enter a value to control spending with a particular merchant. | [optional] [default to undefined]

## Example

```typescript
import { MerchantScope } from './api';

const instance: MerchantScope = {
    mcc,
    mcc_group,
    mid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
