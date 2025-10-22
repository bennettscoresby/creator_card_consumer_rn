# CardLifeCycle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activate_upon_issue** | **boolean** |  | [optional] [default to false]
**card_service_code** | **number** |  | [optional] [default to 101]
**expiration_offset** | [**ExpirationOffset**](ExpirationOffset.md) |  | [optional] [default to undefined]
**reloadability** | **string** |  | [optional] [default to undefined]
**update_expiration_upon_activation** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { CardLifeCycle } from './api';

const instance: CardLifeCycle = {
    activate_upon_issue,
    card_service_code,
    expiration_offset,
    reloadability,
    update_expiration_upon_activation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
