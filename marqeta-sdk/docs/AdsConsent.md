# AdsConsent

Visa Alias Directory Service (ADS) consent information in the ADS profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDateTime** | **string** | Date and time when the validity of the Visa ADS consent ends.  This field is returned if it exists in the resource. | [optional] [default to undefined]
**intermediaries** | **Array&lt;string&gt;** | Intermediaries of the Visa ADS consent. | [optional] [default to undefined]
**presenter** | **string** | Presenter of the Visa Alias Directory Service (ADS) consent. | [default to undefined]
**validFromDateTime** | **string** | Date and time when the validity of the Visa ADS consent begins. | [default to undefined]
**version** | **string** | Version of the Visa ADS consent. | [default to undefined]

## Example

```typescript
import { AdsConsent } from './api';

const instance: AdsConsent = {
    expiryDateTime,
    intermediaries,
    presenter,
    validFromDateTime,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
