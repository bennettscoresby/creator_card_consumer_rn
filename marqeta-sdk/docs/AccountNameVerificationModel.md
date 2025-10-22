# AccountNameVerificationModel

Contains name verification data: the full name entered by the cardholder, name data held by the Marqeta platform, and an assertion by the Marqeta platform as to whether the two sets of data match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on_file** | [**AniInformation**](AniInformation.md) |  | [optional] [default to undefined]
**request** | [**AniInformation**](AniInformation.md) |  | [optional] [default to undefined]
**request_type** | **string** |  | [optional] [default to undefined]
**response** | [**Response**](Response.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AccountNameVerificationModel } from './api';

const instance: AccountNameVerificationModel = {
    on_file,
    request,
    request_type,
    response,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
