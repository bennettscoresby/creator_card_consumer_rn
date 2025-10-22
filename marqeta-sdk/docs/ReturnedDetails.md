# ReturnedDetails

Contains information on a returned payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_code** | **string** | Return code for the returned payment. For more, see &lt;&lt;/developer-guides/ach-origination#_nacha_ach_return_codes, NACHA ACH return codes&gt;&gt;. | [default to undefined]
**return_reason** | **string** | Reason the payment was returned. For more, see &lt;&lt;/developer-guides/ach-origination#_nacha_ach_return_codes, NACHA ACH return codes&gt;&gt;. | [default to undefined]

## Example

```typescript
import { ReturnedDetails } from './api';

const instance: ReturnedDetails = {
    return_code,
    return_reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
