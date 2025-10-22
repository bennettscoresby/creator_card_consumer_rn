# DigitalWalletTokenTransitionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Mechanism by which the transition was initiated. | [optional] [default to undefined]
**digital_wallet_token** | [**DigitalWalletTokenHash**](DigitalWalletTokenHash.md) |  | [default to undefined]
**reason** | **string** | The reason for the transition. | [optional] [default to undefined]
**reason_code** | **string** | Standard code describing the reason for the transition.  *NOTE:* This field is required if your program uses v2 of the &#x60;user_card_state_version&#x60;, which is a program-specific configuration value that is managed by Marqeta and cannot be accessed via the API. To learn more about the &#x60;user_card_state_version&#x60; program configuration, contact your Marqeta representative.  * *00:* Object activated for the first time * *01:* Requested by you * *02:* Inactivity over time * *03:* This address cannot accept mail or the addressee is unknown * *04:* Negative account balance * *05:* Account under review * *06:* Suspicious activity was identified * *07:* Activity outside the program parameters was identified * *08:* Confirmed fraud was identified * *09:* Matched with an Office of Foreign Assets Control list * *10:* Card was reported lost * *11:* Card information was cloned * *12:* Account or card information was compromised * *13:* Temporary status change while on hold/leave * *14:* Initiated by Marqeta * *15:* Initiated by issuer * *16:* Card expired * *17:* Failed KYC * *18:* Changed to &#x60;ACTIVE&#x60; because information was properly validated * *19:* Changed to &#x60;ACTIVE&#x60; because account activity was properly validated * *20:* Change occurred prior to the normalization of reason codes * *21:* Initiated by a third party, often a digital wallet provider * *22:* PIN retry limit reached * *23:* Card was reported stolen * *24:* Address issue * *25:* Name issue * *26:* SSN issue * *27:* DOB issue * *28:* Email issue * *29:* Phone issue * *30:* Account/fulfillment mismatch * *31:* Other reason * *32:* Unblock request * *86:* Notification of death | [optional] [default to undefined]
**state** | **string** | Specifies the state to which the digital wallet token will transition.  The original state is &#x60;REQUESTED&#x60;. You cannot modify the state if its current value is either &#x60;REQUEST_DECLINED&#x60; or &#x60;TERMINATED&#x60;. | [default to undefined]
**token** | **string** | The unique identifier of the digital wallet token transition (not the identifier of the digital wallet token itself).  If you do not include a value for the &#x60;token&#x60; field, the system will generate one automatically. This value is necessary for use in other API calls, so we recommend that rather than let the system generate one, you use a simple string that is easy to remember. This value cannot be updated. | [optional] [default to undefined]
**token_reference_id** | **string** | The unique identifier of the digital wallet token within the card network. The &#x60;token_reference_id&#x60; is unique at the card network level. | [optional] [default to undefined]

## Example

```typescript
import { DigitalWalletTokenTransitionRequest } from './api';

const instance: DigitalWalletTokenTransitionRequest = {
    channel,
    digital_wallet_token,
    reason,
    reason_code,
    state,
    token,
    token_reference_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
