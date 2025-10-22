# WebhookResponseModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Indicates whether the webhook is active. This field is returned if you included it in your webhook. | [optional] [default to true]
**config** | [**WebhookConfigResponseModel**](WebhookConfigResponseModel.md) |  | [default to undefined]
**created_time** | **string** | Date and time when the webhook event was created, in UTC. | [optional] [default to undefined]
**events** | **Array&lt;string&gt;** | Specifies the types of events for which notifications are sent.  The wildcard character &#x60;\\*&#x60; indicates that you receive all webhook notifications, or all notifications of a specified category. For example, &#x60;*&#x60; indicates that you receive all webhook notifications; &#x60;transaction.*&#x60; indicates that you receive all &#x60;transaction&#x60; webhook notifications.  *NOTE:* You can only use the wildcard character with the _base_ type events, not subcategories. For example, you cannot subscribe to &#x60;cardtransition.fulfillment.\\*&#x60; events, but you can subscribe to &#x60;cardtransition.*&#x60;. | [default to undefined]
**last_modified_time** | **string** | Date and time when the associated object was last modified, in UTC. | [optional] [default to undefined]
**name** | **string** | Descriptive name of the webhook. | [default to undefined]
**token** | **string** | Unique identifier of the webhook. | [optional] [default to undefined]

## Example

```typescript
import { WebhookResponseModel } from './api';

const instance: WebhookResponseModel = {
    active,
    config,
    created_time,
    events,
    last_modified_time,
    name,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
