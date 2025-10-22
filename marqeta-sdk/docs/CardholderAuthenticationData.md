# CardholderAuthenticationData

Contains authentication data for 3D Secure and digital wallet token transactions:  * `electronic_commerce_indicator` – The level of verification performed. * `verification_result` – The result of the verification. * `verification_value_created_by` – The transaction participant who determined the verification result. * `three_ds_message_version` – The 3D Secure message version used for authentication. * `authentication_method` – The 3D Secure authentication method. * `authentication_status` – The 3D Secure authentication status. * `acquirer_exemption` – Indicates a 3D Secure authentication exemption from the acquirer. * `issuer_exemption` – Indicates a 3D Secure authentication exemption from the issuer. * `cavv_authentication_amount` – CAVV authentication amount. * `raw_cavv_data` – Raw CAVV data provided by the card network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirer_exemption** | **Array&lt;string&gt;** | Indicates 3D Secure authentication exemptions from the acquirer. This array is returned if it is included in the transaction data from the card network. | [optional] [default to undefined]
**authentication_method** | **string** | Specifies the 3D Secure authentication method. | [optional] [default to undefined]
**authentication_status** | **string** | Specifies the status of the 3D Secure authentication:  * &#x60;ATTEMPTED&#x60;: Indicates that 3D Secure authentication was requested and processed by the card network. * &#x60;DATA_SHARE_EXEMPTED&#x60;: Indicates that 3D Secure authentication was for information only and exempted. * &#x60;EXEMPTED&#x60;: Indicates that 3D Secure authentication was requested but the challenge was exempted. * &#x60;EXEMPTION_CLAIMED&#x60;: Indicates that 3D Secure authentication was exempted because acquirer transaction risk analysis (TRA) was already performed. * &#x60;SCA_EXEMPTION&#x60;: Indicates that 3D Secure authentication was exempted because strong customer authentication (SCA) was already performed. * &#x60;SUCCESSFUL&#x60;: Indicates that 3D Secure authentication was successful. * &#x60;SUCCESSFUL_NON_PAYMENT&#x60;: Indicates that 3D Secure non-payment authentication was successful. * &#x60;THREEDS_REQUESTER_DATA_SHARE_EXEMPTION&#x60;: Status is deprecated and will be removed from a future release of the Marqeta platform. After June 2023, use &#x60;DATA_SHARE_EXEMPTION&#x60; instead. * &#x60;THREEDS_REQUESTER_SCA_EXEMPTION&#x60;: Status is deprecated and will be removed in a June 2023 release of the Marqeta platform. After June 2023, use &#x60;SCA_EXEMPTION&#x60; instead. * &#x60;THREEDS_REQUESTER_TRA_EXEMPTION&#x60;: Status is deprecated and will be removed in a June 2023 release of the Marqeta platform. After June 2023, use &#x60;EXEMPTION_CLAIMED&#x60; instead. * &#x60;UNAVAILABLE&#x60;: ** For Visa transactions, this status indicates that 3D Secure authentication was requested, but Marqeta\&#39;s access control server (ACS) was not available. ** For Mastercard transactions, this status indicates that 3D Secure authentication was not available. | [optional] [default to undefined]
**cavv_authentication_amount** | **string** | Authentication amount from the cardholder authentication verification value (CAVV) used to validate an authorization. This field is returned if it is included in the transaction data from the card network.  To enable this field, contact your Marqeta representative. | [optional] [default to undefined]
**electronic_commerce_indicator** | **string** | Status of the 3D Secure or digital wallet token transaction authentication attempt, as provided by a transaction participant.  * &#x60;authentication_attempted&#x60;: Merchant attempted to authenticate, but either the issuer or the cardholder does not participate in 3D Secure or card tokenization. * &#x60;authentication_successful&#x60;: Cardholder authentication successful. * &#x60;no_authentication&#x60;: Non-authenticated e-commerce transaction. | [optional] [default to undefined]
**issuer_exemption** | **string** | Indicates a 3D Secure authentication exemption from the issuer. This field is returned if it is included in the transaction data from the card network. | [optional] [default to undefined]
**raw_cavv_data** | **string** | Raw cardholder authentication verification value provided by the card network. This field is returned if it is included in the transaction data from the card network.  To enable this field, contact your Marqeta representative. | [optional] [default to undefined]
**three_ds_data_quality** | **string** |  | [optional] [default to undefined]
**three_ds_message_version** | **string** | Specifies the 3D Secure message version used for authentication. | [optional] [default to undefined]
**three_ds_reference_id** | **string** | The 3D Secure authentication indicator, as provided by the Mastercard card network. | [optional] [default to undefined]
**verification_result** | **string** | Result of cardholder authentication verification value (CAVV) or accountholder authentication value (AAV) verification performed by the card network.  * &#x60;failed&#x60; * &#x60;not_present&#x60; * &#x60;not_provided&#x60; * &#x60;not_verified&#x60; * &#x60;not_verified_authentication_outage&#x60; * &#x60;verified&#x60; * &#x60;verified_amount_checked&#x60; * &#x60;verified_amount_greater_than_20_percent&#x60;: For Mastercard AAV verification, indicates that the original authentication amount and final authorization amount are mismatched, and that the final authorization amount exceeds the original authentication amount by more than 20%. This 20% margin falls outside Mastercard\&#39;s suggested tolerance for what a European cardholder might reasonably expect when the total transaction amount is not known in advance. * &#x60;verified_amount_less_than_20_percent&#x60;: For Mastercard AAV verification, indicates that the original authentication amount and final authorization amount are mismatched, and that the final authorization amount exceeds the original authentication amount by 20% or less. This 20% margin falls within Mastercard\&#39;s suggested tolerance for what a European cardholder might reasonably expect when the total transaction amount is not known in advance. * &#x60;not_verified_mac_key_validation_passed&#x60;: For Mastercard only. This field is present when the transaction passes MAC key validation but Dynamic Linking was not performed by the Mastercard card network due to system connectivity issues. * &#x60;not_verified_mac_key_validation_failed&#x60;: For Mastercard only. This field is present when the transaction fails MAC key validation and Dynamic Linking was not performed by the Mastercard card network due to system connectivity issues. | [optional] [default to undefined]
**verification_value_created_by** | **string** | Transaction participant who determined the verification result. | [optional] [default to undefined]

## Example

```typescript
import { CardholderAuthenticationData } from './api';

const instance: CardholderAuthenticationData = {
    acquirer_exemption,
    authentication_method,
    authentication_status,
    cavv_authentication_amount,
    electronic_commerce_indicator,
    issuer_exemption,
    raw_cavv_data,
    three_ds_data_quality,
    three_ds_message_version,
    three_ds_reference_id,
    verification_result,
    verification_value_created_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
