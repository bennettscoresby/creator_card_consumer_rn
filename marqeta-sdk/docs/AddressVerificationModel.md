# AddressVerificationModel

Contains address verification data consisting of address data entered by the cardholder, address data held by the Marqeta platform, and an assertion by the Marqeta platform as to whether the two sets of data match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on_file** | [**AvsInformation**](AvsInformation.md) |  | [optional] [default to undefined]
**request** | [**AvsInformation**](AvsInformation.md) |  | [optional] [default to undefined]
**response** | [**Response**](Response.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AddressVerificationModel } from './api';

const instance: AddressVerificationModel = {
    on_file,
    request,
    response,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
