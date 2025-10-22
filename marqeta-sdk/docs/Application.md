# Application

Contains client application information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_code** | **string** | Access code of the client application. | [optional] [default to undefined]
**assets_url** | **string** | URL of the client application assets. | [optional] [default to undefined]
**client_api_base_url** | **string** | Base URL of the client API. | [optional] [default to undefined]
**environment** | **string** | Client application\&#39;s environment. | [optional] [default to undefined]
**program** | **string** | Name of the program on the Marqeta platform. | [optional] [default to undefined]
**program_short_code** | **string** | Short code of the program on the Marqeta platform. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the &#x60;application&#x60; object. | [optional] [default to undefined]

## Example

```typescript
import { Application } from './api';

const instance: Application = {
    access_code,
    assets_url,
    client_api_base_url,
    environment,
    program,
    program_short_code,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
