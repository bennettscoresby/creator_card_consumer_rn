# PolicyDocumentResponse

Contains information on a document policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_statement** | [**PolicyDocumentTemplateResponse**](PolicyDocumentTemplateResponse.md) |  | [optional] [default to undefined]
**benefits_disclosure_premium** | [**PolicyDocumentAssetResponse**](PolicyDocumentAssetResponse.md) |  | [optional] [default to undefined]
**benefits_disclosure_traditional** | [**PolicyDocumentAssetResponse**](PolicyDocumentAssetResponse.md) |  | [optional] [default to undefined]
**card_member_agreement** | [**PolicyDocumentAssetResponse**](PolicyDocumentAssetResponse.md) |  | [optional] [default to undefined]
**created_time** | **string** | Date and time when the document policy was created on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**e_disclosure** | [**PolicyDocumentAssetResponse**](PolicyDocumentAssetResponse.md) |  | [optional] [default to undefined]
**name** | **string** | Name of the document policy. | [optional] [default to undefined]
**noaa_multiple_reason_with_dodd_frank** | [**PolicyDocumentTemplateResponse**](PolicyDocumentTemplateResponse.md) |  | [optional] [default to undefined]
**noaa_single_reason** | [**PolicyDocumentTemplateResponse**](PolicyDocumentTemplateResponse.md) |  | [optional] [default to undefined]
**noaa_single_reason_with_dodd_frank** | [**PolicyDocumentTemplateResponse**](PolicyDocumentTemplateResponse.md) |  | [optional] [default to undefined]
**pre_qualification_disclosure** | [**PolicyDocumentAssetAndTemplateResponse**](PolicyDocumentAssetAndTemplateResponse.md) |  | [optional] [default to undefined]
**privacy_policy** | [**PolicyDocumentAssetResponse**](PolicyDocumentAssetResponse.md) |  | [optional] [default to undefined]
**rewards_disclosure** | [**PolicyDocumentAssetAndTemplateResponse**](PolicyDocumentAssetAndTemplateResponse.md) |  | [optional] [default to undefined]
**summary_of_credit_terms** | [**PolicyDocumentAssetAndTemplateResponse**](PolicyDocumentAssetAndTemplateResponse.md) |  | [optional] [default to undefined]
**terms_schedule** | [**PolicyDocumentTemplateResponse**](PolicyDocumentTemplateResponse.md) |  | [optional] [default to undefined]
**token** | **string** | Unique identifier of the document policy. | [optional] [default to undefined]
**updated_time** | **string** | Date and time when the document policy was last updated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]

## Example

```typescript
import { PolicyDocumentResponse } from './api';

const instance: PolicyDocumentResponse = {
    account_statement,
    benefits_disclosure_premium,
    benefits_disclosure_traditional,
    card_member_agreement,
    created_time,
    e_disclosure,
    name,
    noaa_multiple_reason_with_dodd_frank,
    noaa_single_reason,
    noaa_single_reason_with_dodd_frank,
    pre_qualification_disclosure,
    privacy_policy,
    rewards_disclosure,
    summary_of_credit_terms,
    terms_schedule,
    token,
    updated_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
