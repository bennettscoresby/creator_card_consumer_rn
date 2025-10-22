# SsnResponseModel

Contains tax identification information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nin** | **string** | National Identification Number (NIN). | [optional] [default to undefined]
**sin** | **string** | Social Insurance Number (SIN). | [optional] [default to undefined]
**ssn** | **string** | United States Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN). | [optional] [default to undefined]
**tin** | **string** | Taxpayer Identification Number (TIN). | [optional] [default to undefined]

## Example

```typescript
import { SsnResponseModel } from './api';

const instance: SsnResponseModel = {
    nin,
    sin,
    ssn,
    tin,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
