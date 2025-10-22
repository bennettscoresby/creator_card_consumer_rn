# AdsContactInfo

Contact information in the Alias Directory Service (ADS) profile.  This array is returned if the Visa Alias\' contact information details exist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of contact information in the Alias Directory Service (ADS) profile. | [default to undefined]
**value** | **string** | Contact information value, which is the email address or phone number. | [default to undefined]

## Example

```typescript
import { AdsContactInfo } from './api';

const instance: AdsContactInfo = {
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
