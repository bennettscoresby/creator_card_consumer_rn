# Response

Response codes and memos for account name verification, address verification, card security verification, and transactions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_information** | **string** | Additional information about the transaction, such as velocity control details.  This field is returned in transaction response objects only. It is not returned in address verification or card security verification response objects. | [optional] [default to undefined]
**code** | **string** | Four-digit response code for address verification, card security code verification, or transactions.  For account name verification, the four digits correspond with assertions that the first, middle, last, and full name of the cardholder on the Marqeta platform match the data provided by the cardholder.  * &#x60;0&#x60; indicates no validation was performed * &#x60;1&#x60; indicates the match was unsuccessful (not matched) * &#x60;2&#x60; indicates the match was partial * &#x60;3&#x60; indicates the match was exact  For example:  [cols&#x3D;\&quot;2,3,3,3,3\&quot;] !&#x3D;&#x3D;&#x3D; ! Code ! First Name ! Middle Name ! Last Name ! Full Name  ! &#x60;0000&#x60; ! Not validated ! Not validated ! Not validated ! Not validated  ! &#x60;1111&#x60; ! Not matched ! Not matched ! Not matched ! Not matched  ! &#x60;3333&#x60; ! Exact match ! Exact match ! Exact match ! Exact match  ! &#x60;1232&#x60; ! Not matched ! Partial match ! Exact match ! Partial match !&#x3D;&#x3D;&#x3D;  For address verification responses, the code is an assertion by the Marqeta platform as to whether its address verification data matches that provided by the cardholder:  [cols&#x3D;\&quot;2,3,3\&quot;] !&#x3D;&#x3D;&#x3D; ! Code ! Address ! Postal Code  ! &#x60;0000&#x60; ! Match ! Match  ! &#x60;0001&#x60; ! Match ! Not matched  ! &#x60;0100&#x60; ! Not matched ! Match  ! &#x60;0101&#x60; ! Not matched ! Not matched  ! &#x60;0200&#x60; ! Data not present ! Match  ! &#x60;0201&#x60; ! Data not present ! Not matched  ! &#x60;0002&#x60; ! Match ! Data not present  ! &#x60;0102&#x60; ! Not matched ! Data not present  ! &#x60;0303&#x60; ! Not validated ! Not validated !&#x3D;&#x3D;&#x3D;  For card security verification, the code indicates whether the verification check passed and can have these possible values:  * &#x60;0000&#x60; – Passed * &#x60;0001&#x60; – Did not pass  For a transaction, the code describes the outcome of the attempted transaction. For the full list of transaction codes, see &lt;&lt;/developer-guides/about-transactions#_transaction_response_codes, Transaction response codes&gt;&gt;. | [default to undefined]
**memo** | **string** | Additional text that describes the response. | [optional] [default to undefined]

## Example

```typescript
import { Response } from './api';

const instance: Response = {
    additional_information,
    code,
    memo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
