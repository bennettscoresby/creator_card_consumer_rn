# ProgramTransfer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of program transfer. | [default to undefined]
**business_token** | **string** | Unique identifier of the business. Pass either a &#x60;business_token&#x60; or a &#x60;user_token&#x60;, not both.  Send a &#x60;GET&#x60; request to &#x60;/businesses&#x60; to retrieve business tokens. | [optional] [default to undefined]
**currency_code** | **string** | Three-digit ISO 4217 currency code. | [default to undefined]
**fees** | [**Array&lt;FeeModel&gt;**](FeeModel.md) | Contains attributes that define characteristics of one or more fees. This array is returned in the response when it is included in the request. | [optional] [default to undefined]
**memo** | **string** | Memo or note describing the program transfer. | [optional] [default to undefined]
**tags** | **string** | Comma-delimited list of tags describing the program transfer. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the program transfer.  If you do not include a token, the system will generate one automatically. This token is necessary for use in other API calls, so we recommend that rather than let the system generate one, you use a simple string that is easy to remember. This value cannot be updated. | [optional] [default to undefined]
**type_token** | **string** | Unique identifier of the program transfer type.  Send a &#x60;GET&#x60; request to &#x60;/programtransfers/types&#x60; to retrieve program transfer type tokens. | [default to undefined]
**user_token** | **string** | Unique identifier of the user. Pass either a &#x60;user_token&#x60; or a &#x60;business_token&#x60;, not both.  Send a &#x60;GET&#x60; request to &#x60;/users&#x60; to retrieve business tokens. | [optional] [default to undefined]

## Example

```typescript
import { ProgramTransfer } from './api';

const instance: ProgramTransfer = {
    amount,
    business_token,
    currency_code,
    fees,
    memo,
    tags,
    token,
    type_token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
