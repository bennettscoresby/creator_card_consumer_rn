# UserTransitionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Mechanism by which the transaction was initiated. | [default to undefined]
**created_time** | **string** | Date and time when the resource was created, in UTC. | [optional] [default to undefined]
**created_timestamp** | **string** | Date and time when the resource was created. Expressed in UTC, with millisecond precision. | [optional] [default to undefined]
**last_modified_time** | **string** | Date and time when the resource was last modified, in UTC. | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Associates customer-injected metadata with the user. Returned if part of the call to &#x60;POST /users&#x60;. | [optional] [default to undefined]
**reason** | **string** | Additional information about the status change. | [optional] [default to undefined]
**reason_code** | **string** | Identifies the standardized reason for the transition:  *00:* Object activated for the first time.  *01:* Requested by you.  *02:* Inactivity over time.  *03:* This address cannot accept mail or the addressee is unknown.  *04:* Negative account balance.  *05:* Account under review.  *06:* Suspicious activity was identified.  *07:* Activity outside the program parameters was identified.  *08:* Confirmed fraud was identified.  *09:* Matched with an Office of Foreign Assets Control list.  *10:* Card was reported lost.  *11:* Card information was cloned.  *12:* Account or card information was compromised.  *13:* Temporary status change while on hold/leave.  *14:* Initiated by Marqeta.  *15:* Initiated by issuer.  *16:* Card expired.  *17:* Failed KYC.  *18:* Changed to &#x60;ACTIVE&#x60; because information was properly validated.  *19:* Changed to &#x60;ACTIVE&#x60; because account activity was properly validated.  *20:* Change occurred prior to the normalization of reason codes.  *21:* Initiated by a third party, often a digital wallet provider.  *22:* PIN retry limit reached.  *23:* Card was reported stolen.  *24:* Address issue.  *25:* Name issue.  *26:* SSN issue.  *27:* DOB issue.  *28:* Email issue.  *29:* Phone issue.  *30:* Account/fulfillment mismatch.  *31:* Other reason.  *86:* Notification of death. | [default to undefined]
**status** | **string** | Specifies the new status of the user. | [default to undefined]
**token** | **string** | Unique identifier of the user transition. | [default to undefined]
**user_token** | **string** | Unique identifier of the user whose status was transitioned. | [optional] [default to undefined]

## Example

```typescript
import { UserTransitionResponse } from './api';

const instance: UserTransitionResponse = {
    channel,
    created_time,
    created_timestamp,
    last_modified_time,
    metadata,
    reason,
    reason_code,
    status,
    token,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
