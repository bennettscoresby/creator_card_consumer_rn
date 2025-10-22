# JitAccountNameVerification

Contains account name verification data used to make JIT Funding decisions from one of the following objects:  * The `gateway` object, which contains account name verification data from your JIT Funding gateway. * The `issuer` object, which contains account name verification data from the Marqeta platform. * The `request` object, which contains account name verification data as it appears in a JIT Funding request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway** | [**AccountNameVerificationSource**](AccountNameVerificationSource.md) |  | [optional] [default to undefined]
**issuer** | [**AccountNameVerificationSource**](AccountNameVerificationSource.md) |  | [optional] [default to undefined]
**request** | [**AniInformation**](AniInformation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { JitAccountNameVerification } from './api';

const instance: JitAccountNameVerification = {
    gateway,
    issuer,
    request,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
