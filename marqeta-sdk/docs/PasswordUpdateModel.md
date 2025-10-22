# PasswordUpdateModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_password** | **string** | Current password to the cardholder\&#39;s user account on the Marqeta platform. | [default to undefined]
**new_password** | **string** | New password to the cardholder\&#39;s user account on the Marqeta platform.  * Must contain at least one numeral + * Must contain at least one lowercase letter + * Must contain at least one uppercase letter + * Must contain at least one of these symbols:   +  &#x60;@&#x60; &#x60;#&#x60; &#x60;$&#x60; &#x60;%&#x60; &#x60;!&#x60; &#x60;^&#x60; &#x60;&amp;&#x60; &#x60;*&#x60; &#x60;(&#x60; &#x60;)&#x60;   +  &#x60;\\&#x60; &#x60;_&#x60; &#x60;+&#x60; &#x60;~&#x60; &#x60;-&#x60; &#x60;&#x3D;&#x60; &#x60;[&#x60; &#x60;]&#x60; &#x60;{&#x60; &#x60;}&#x60;   +  &#x60;,&#x60; &#x60;;&#x60; &#x60;:&#x60; &#x60;\&#39;&#x60; &#x60;\&quot;&#x60; &#x60;.&#x60; &#x60;/&#x60; &#x60;&lt;&#x60; &#x60;&gt;&#x60; &#x60;?&#x60; &#x60;&#x60;&#x60; | [default to undefined]

## Example

```typescript
import { PasswordUpdateModel } from './api';

const instance: PasswordUpdateModel = {
    current_password,
    new_password,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
