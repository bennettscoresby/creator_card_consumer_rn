# AddressVerification

Contains address verification information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the cardholder. | [optional] [default to undefined]
**postal_code** | **string** | Postal code. | [optional] [default to undefined]
**street_address** | **string** | Street address provided by the cardholder. | [optional] [default to undefined]
**zip** | **string** | United States ZIP code. | [optional] [default to undefined]

## Example

```typescript
import { AddressVerification } from './api';

const instance: AddressVerification = {
    name,
    postal_code,
    street_address,
    zip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
