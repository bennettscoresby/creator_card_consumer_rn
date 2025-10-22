# PostTokenizationAuthenticationDecisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authRequestCorrelationId** | **string** | Correlates multiple authentication requests. | [optional] [default to undefined]
**authenticationMethod** | **string** | Authentication method used to verify the cardholder. | [default to undefined]
**commentText** | **string** | Optional comment related to the decision. | [optional] [default to undefined]
**decision** | **string** | Issuer decision after cardholder authentication. | [default to undefined]
**tokenUniqueReference** | **string** | Unique identifier of the token allocated to the card. | [default to undefined]

## Example

```typescript
import { PostTokenizationAuthenticationDecisionRequest } from './api';

const instance: PostTokenizationAuthenticationDecisionRequest = {
    authRequestCorrelationId,
    authenticationMethod,
    commentText,
    decision,
    tokenUniqueReference,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
