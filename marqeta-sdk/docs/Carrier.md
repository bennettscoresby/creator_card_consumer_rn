# Carrier

Specifies attributes of the card carrier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logo_file** | **string** | Specifies an image to display on the card carrier. | [optional] [default to undefined]
**logo_thumbnail_file** | **string** | Specifies a thumbnail-sized rendering of the image specified in the &#x60;logo_file&#x60; field. | [optional] [default to undefined]
**message_file** | **string** | Specifies a text file containing a custom message to print on the card carrier. | [optional] [default to undefined]
**message_line** | **string** | Specifies a custom message that appears on the card carrier. | [optional] [default to undefined]
**message_line_2** | **string** | Specifies the second line of a custom message that appears on the card carrier. | [optional] [default to undefined]
**template_id** | **string** | Specifies the card carrier template to use. | [optional] [default to undefined]

## Example

```typescript
import { Carrier } from './api';

const instance: Carrier = {
    logo_file,
    logo_thumbnail_file,
    message_file,
    message_line,
    message_line_2,
    template_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
