# PolicyDocumentUpdateReq

Request details to update a document policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_statement** | [**PolicyDocumentTemplateReq**](PolicyDocumentTemplateReq.md) |  | [default to undefined]
**benefits_disclosure_premium** | [**PolicyDocumentAssetReq**](PolicyDocumentAssetReq.md) |  | [default to undefined]
**benefits_disclosure_traditional** | [**PolicyDocumentAssetReq**](PolicyDocumentAssetReq.md) |  | [default to undefined]
**card_member_agreement** | [**PolicyDocumentAssetReq**](PolicyDocumentAssetReq.md) |  | [default to undefined]
**e_disclosure** | [**PolicyDocumentAssetReq**](PolicyDocumentAssetReq.md) |  | [default to undefined]
**name** | **string** | Name of the document policy. | [default to undefined]
**noaa_multiple_reason_with_dodd_frank** | [**PolicyDocumentTemplateReq**](PolicyDocumentTemplateReq.md) |  | [default to undefined]
**noaa_single_reason** | [**PolicyDocumentTemplateReq**](PolicyDocumentTemplateReq.md) |  | [default to undefined]
**noaa_single_reason_with_dodd_frank** | [**PolicyDocumentTemplateReq**](PolicyDocumentTemplateReq.md) |  | [default to undefined]
**pre_qualification_disclosure** | [**PolicyDocumentAssetAndTemplateReq**](PolicyDocumentAssetAndTemplateReq.md) |  | [optional] [default to undefined]
**privacy_policy** | [**PolicyDocumentAssetReq**](PolicyDocumentAssetReq.md) |  | [default to undefined]
**rewards_disclosure** | [**PolicyDocumentAssetAndTemplateReq**](PolicyDocumentAssetAndTemplateReq.md) |  | [optional] [default to undefined]
**summary_of_credit_terms** | [**PolicyDocumentAssetAndTemplateReq**](PolicyDocumentAssetAndTemplateReq.md) |  | [default to undefined]
**terms_schedule** | [**PolicyDocumentTemplateReq**](PolicyDocumentTemplateReq.md) |  | [default to undefined]

## Example

```typescript
import { PolicyDocumentUpdateReq } from './api';

const instance: PolicyDocumentUpdateReq = {
    account_statement,
    benefits_disclosure_premium,
    benefits_disclosure_traditional,
    card_member_agreement,
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
