# WebPushProvisioning


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wpp_apple_card_template_id** | **string** | Identifier that Apple uses to identify the program to process the request for. | [optional] [default to undefined]
**wpp_apple_partner_id** | **string** | Identifier that Apple uses to identify the program to provide the correct card art for. | [optional] [default to undefined]
**wpp_google_piaid** | **string** | Identifier that Google uses to identify the program to process the request for and to provide the correct card art for. | [optional] [default to undefined]

## Example

```typescript
import { WebPushProvisioning } from './api';

const instance: WebPushProvisioning = {
    wpp_apple_card_template_id,
    wpp_apple_partner_id,
    wpp_google_piaid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
