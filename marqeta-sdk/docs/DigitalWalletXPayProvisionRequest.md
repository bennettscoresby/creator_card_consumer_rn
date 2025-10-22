# DigitalWalletXPayProvisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_token** | **string** | Unique identifier of the card resource to use for the provisioning request. | [default to undefined]
**device_id** | **string** | Unique identifier of the user\&#39;s XPay device, as provided by XPay during the provisioning process. | [default to undefined]
**device_type** | **string** | Type of device into which the digital wallet token will be provisioned. | [default to undefined]
**provisioning_app_version** | **string** | Version of the application making the provisioning request. Used for debugging and fraud prevention. | [default to undefined]
**token_requestor_id** | **string** | Unique numerical identifier of the digital wallet token requestor within the card network. These ID numbers map to &#x60;token_requestor_name&#x60; field values as follows:  *Mastercard*  * 50110030273 – &#x60;APPLE_PAY&#x60; * 50120834693 – &#x60;ANDROID_PAY&#x60; * 50139059239 – &#x60;SAMSUNG_PAY&#x60;  *Visa*  * 40010030273 – &#x60;APPLE_PAY&#x60; * 40010075001 – &#x60;ANDROID_PAY&#x60; * 40010043095 – &#x60;SAMSUNG_PAY&#x60; * 40010075196 – &#x60;MICROSOFT_PAY&#x60; * 40010075338 – &#x60;VISA_CHECKOUT&#x60; * 40010075449 – &#x60;FACEBOOK&#x60; * 40010075839 – &#x60;NETFLIX&#x60; * 40010077056 – &#x60;FITBIT_PAY&#x60; * 40010069887 – &#x60;GARMIN_PAY&#x60; | [default to undefined]
**wallet_account_id** | **string** | User\&#39;s XPay account identifier, as provided by XPay during the provisioning process. | [default to undefined]

## Example

```typescript
import { DigitalWalletXPayProvisionRequest } from './api';

const instance: DigitalWalletXPayProvisionRequest = {
    card_token,
    device_id,
    device_type,
    provisioning_app_version,
    token_requestor_id,
    wallet_account_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
