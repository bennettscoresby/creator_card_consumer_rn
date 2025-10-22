# AutoReloadResponseModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [optional] [default to true]
**association** | [**AutoReloadAssociation**](AutoReloadAssociation.md) |  | [optional] [default to undefined]
**created_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [default to undefined]
**currency_code** | **string** |  | [default to undefined]
**funding_source_address_token** | **string** |  | [optional] [default to undefined]
**funding_source_token** | **string** | Required when order scope is GPA | [optional] [default to undefined]
**last_modified_time** | **string** | yyyy-MM-ddTHH:mm:ssZ | [default to undefined]
**order_scope** | [**OrderScope**](OrderScope.md) |  | [default to undefined]
**token** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AutoReloadResponseModel } from './api';

const instance: AutoReloadResponseModel = {
    active,
    association,
    created_time,
    currency_code,
    funding_source_address_token,
    funding_source_token,
    last_modified_time,
    order_scope,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
