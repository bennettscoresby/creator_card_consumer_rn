# JitAddressVerification

Contains address verification data used to make JIT Funding decisions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway** | [**AddressVerificationSource**](AddressVerificationSource.md) |  | [optional] [default to undefined]
**issuer** | [**AddressVerificationSource**](AddressVerificationSource.md) |  | [optional] [default to undefined]
**request** | [**AvsInformation**](AvsInformation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { JitAddressVerification } from './api';

const instance: JitAddressVerification = {
    gateway,
    issuer,
    request,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
