# BundleUpdateReq

Specifies bundles for a credit program.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apr_policy_token** | **string** | Unique identifier of the bundle\&#39;s APR policy. | [default to undefined]
**credit_product_policy_token** | **string** | Unique identifier of the bundle\&#39;s credit product policy. | [default to undefined]
**description** | **string** | Description of the bundle. | [default to undefined]
**document_policy_token** | **string** | Unique identifier of the bundle\&#39;s document policy. | [default to undefined]
**fee_policy_token** | **string** | Unique identifier of the bundle\&#39;s fee policy. | [default to undefined]
**name** | **string** | Name of the bundle. | [default to undefined]
**offer_policy_token** | **string** | Unique identifier of the bundle\&#39;s offer policy. | [optional] [default to undefined]
**reward_policy_token** | **string** | Unique identifier of the bundle\&#39;s reward policy. | [optional] [default to undefined]

## Example

```typescript
import { BundleUpdateReq } from './api';

const instance: BundleUpdateReq = {
    apr_policy_token,
    credit_product_policy_token,
    description,
    document_policy_token,
    fee_policy_token,
    name,
    offer_policy_token,
    reward_policy_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
