# BundleResponse

Contains information on a bundle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apr_policy_detail** | [**PolicyAprResponse**](PolicyAprResponse.md) |  | [optional] [default to undefined]
**apr_policy_token** | **string** | Unique identifier of the bundle\&#39;s APR policy. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the bundle was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**credit_product_policy_detail** | [**PolicyProductResponse**](PolicyProductResponse.md) |  | [optional] [default to undefined]
**credit_product_policy_token** | **string** | Unique identifier of the bundle\&#39;s credit product policy. | [optional] [default to undefined]
**description** | **string** | Description of the bundle. | [optional] [default to undefined]
**document_policy_detail** | [**PolicyDocumentResponse**](PolicyDocumentResponse.md) |  | [optional] [default to undefined]
**document_policy_token** | **string** | Unique identifier of the bundle\&#39;s document policy. | [optional] [default to undefined]
**fee_policy_detail** | [**PolicyFeeResponse**](PolicyFeeResponse.md) |  | [optional] [default to undefined]
**fee_policy_token** | **string** | Unique identifier of the bundle\&#39;s fee policy. | [optional] [default to undefined]
**name** | **string** | Name of the bundle. | [optional] [default to undefined]
**offer_policy_detail** | [**PolicyOfferResponse**](PolicyOfferResponse.md) |  | [optional] [default to undefined]
**offer_policy_token** | **string** | Unique identifier of the bundle\&#39;s offer policy. | [optional] [default to undefined]
**reward_policy_detail** | [**PolicyRewardResponse**](PolicyRewardResponse.md) |  | [optional] [default to undefined]
**reward_policy_token** | **string** | Unique identifier of the bundle\&#39;s reward policy. | [optional] [default to undefined]
**status** | [**BundleResourceStatus**](BundleResourceStatus.md) |  | [optional] [default to undefined]
**token** | **string** | Unique identifier of the bundle. | [optional] [default to undefined]
**updated_time** | **string** | Date and time when the bundle was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { BundleResponse } from './api';

const instance: BundleResponse = {
    apr_policy_detail,
    apr_policy_token,
    created_time,
    credit_product_policy_detail,
    credit_product_policy_token,
    description,
    document_policy_detail,
    document_policy_token,
    fee_policy_detail,
    fee_policy_token,
    name,
    offer_policy_detail,
    offer_policy_token,
    reward_policy_detail,
    reward_policy_token,
    status,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
