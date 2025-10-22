# AdsCardsResponse

Response containing the payment credentials associated with a Visa Alias Directory Service (ADS) alias.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GetPaymentCredentialsResponse** | [**Array&lt;AdsCardResponse&gt;**](AdsCardResponse.md) | Response containing the payment credentials associated with a Visa Alias.  This array is returned if the Visa Alias exists and one or more payment credentials are linked to it. | [optional] [default to undefined]

## Example

```typescript
import { AdsCardsResponse } from './api';

const instance: AdsCardsResponse = {
    GetPaymentCredentialsResponse,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
