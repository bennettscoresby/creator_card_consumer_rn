# BundleCreateReq

Contains information on a bundle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apr_policy_token** | **string** | Unique identifier of the APR policy. | [default to undefined]
**credit_product_policy_token** | **string** | Unique identifier of the credit product policy. | [default to undefined]
**description** | **string** | Description of the bundle. | [default to undefined]
**document_policy_token** | **string** | Unique identifier of the document policy. | [default to undefined]
**fee_policy_token** | **string** | Unique identifier of the fee policy. | [default to undefined]
**name** | **string** | Name of the bundle. | [default to undefined]
**offer_policy_token** | **string** | Unique identifier of the offer policy. | [optional] [default to undefined]
**reward_policy_token** | **string** | Unique identifier of the reward policy. | [optional] [default to undefined]
**status** | [**BundleResourceStatus**](BundleResourceStatus.md) |  | [default to undefined]
**token** | **string** | Unique identifier of the bundle. | [optional] [default to undefined]

## Example

```typescript
import { BundleCreateReq } from './api';

const instance: BundleCreateReq = {
    apr_policy_token,
    credit_product_policy_token,
    description,
    document_policy_token,
    fee_policy_token,
    name,
    offer_policy_token,
    reward_policy_token,
    status,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
