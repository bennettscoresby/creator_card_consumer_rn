# ClickToPayCheckEligibilityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_assets** | [**Array&lt;MediaContent&gt;**](MediaContent.md) | List of image assets for the Click to Pay logo if &#x60;include_asset&#x60; is set to &#x60;true&#x60; in the request. | [optional] [default to undefined]
**is_eligible** | **boolean** | Indicates whether the &#x60;bin_prefix&#x60; is eligible for Click to Pay.  * &#x60;true&#x60;: The &#x60;bin_prefix&#x60; is eligible for Click to Pay. * &#x60;false&#x60;: The &#x60;bin_prefix&#x60; is not eligible for Click to Pay. | [optional] [default to false]

## Example

```typescript
import { ClickToPayCheckEligibilityResponse } from './api';

const instance: ClickToPayCheckEligibilityResponse = {
    image_assets,
    is_eligible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
