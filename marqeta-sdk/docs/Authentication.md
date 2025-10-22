# Authentication

Contains the cardholder\'s email address and password information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_verified** | **boolean** | Specifies whether the email address has been verified. | [optional] [default to false]
**email_verified_time** | **string** | Date and time when the email address was verified. | [optional] [default to undefined]
**last_password_update_channel** | **string** | Specifies the channel through which the password was last changed. | [optional] [default to undefined]
**last_password_update_time** | **string** | Date and time when the password was last changed. | [optional] [default to undefined]

## Example

```typescript
import { Authentication } from './api';

const instance: Authentication = {
    email_verified,
    email_verified_time,
    last_password_update_channel,
    last_password_update_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
