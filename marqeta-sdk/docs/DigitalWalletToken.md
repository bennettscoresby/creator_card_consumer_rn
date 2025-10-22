# DigitalWalletToken

Contains information about the digital wallet that funded the transaction.  Returned for all transactions funded by a digital wallet or related to digital wallet token provisioning.  For more on digital wallets, see the <</core-api/digital-wallets-management, Digital Wallets Management>> API reference and <</developer-guides/digital-wallets-and-tokenization, Digital Wallets and Tokenization>> developer guide.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_verification** | [**AddressVerification**](AddressVerification.md) |  | [optional] [default to undefined]
**card_token** | **string** | Unique identifier of the card. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the digital wallet token object was created, in UTC. | [optional] [default to undefined]
**device** | [**Device**](Device.md) |  | [optional] [default to undefined]
**fulfillment_status** | **string** | Digital wallet token\&#39;s provisioning status.  For fulfillment status descriptions, see &lt;&lt;/core-api/digital-wallets-management#postDigitalwallettokentransitions, Create digital wallet token transition&gt;&gt;. | [optional] [default to undefined]
**issuer_eligibility_decision** | **string** | The Marqeta platform\&#39;s decision as to whether the digital wallet token should be provisioned.  * *0000* – The token should be provisioned.  * *token.activation.verification.required* – Provisioning is pending; further action is required for completion.  For all other values, check the value of the &#x60;fulfillment_status&#x60; field to definitively ascertain the provisioning outcome.  *NOTE:* The value &#x60;invalid.cid&#x60; indicates an invalid CVV2 number. | [optional] [default to undefined]
**last_modified_time** | **string** | Date and time when the digital wallet token object was last modified, in UTC. | [optional] [default to undefined]
**metadata** | [**DigitalWalletTokenMetadata**](DigitalWalletTokenMetadata.md) |  | [optional] [default to undefined]
**state** | **string** | State of the digital wallet token.  For state descriptions, see &lt;&lt;/developer-guides/managing-the-digital-wallet-token-lifecycle#_transitioning_token_states, Transitioning Token States&gt;&gt;. | [optional] [default to undefined]
**state_reason** | **string** | Reason why the digital wallet token transitioned to its current state. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the digital wallet token. | [optional] [default to undefined]
**token_service_provider** | [**TokenServiceProvider**](TokenServiceProvider.md) |  | [optional] [default to undefined]
**transaction_device** | [**TransactionDevice**](TransactionDevice.md) |  | [optional] [default to undefined]
**user** | [**UserCardHolderResponse**](UserCardHolderResponse.md) |  | [optional] [default to undefined]
**wallet_provider_profile** | [**WalletProviderProfile**](WalletProviderProfile.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DigitalWalletToken } from './api';

const instance: DigitalWalletToken = {
    address_verification,
    card_token,
    created_time,
    device,
    fulfillment_status,
    issuer_eligibility_decision,
    last_modified_time,
    metadata,
    state,
    state_reason,
    token,
    token_service_provider,
    transaction_device,
    user,
    wallet_provider_profile,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
