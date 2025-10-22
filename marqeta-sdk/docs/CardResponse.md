# CardResponse

Contains information about the card used in the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_3csc** | **string** |  | [optional] [default to undefined]
**account_tokens** | **Array&lt;string&gt;** | List of account tokens associated with the card | [optional] [default to undefined]
**activation_actions** | [**ActivationActions**](ActivationActions.md) |  | [optional] [default to undefined]
**barcode** | **string** | Barcode printed on the card, expressed as numerals. | [default to undefined]
**bulk_issuance_token** | **string** | Unique identifier of the bulk card order. | [optional] [default to undefined]
**card_product_token** | **string** | Unique identifier of the card product. | [default to undefined]
**chip_cvv_contactless_number** | **string** |  | [optional] [default to undefined]
**chip_cvv_number** | **string** | Three-digit card verification value (ICVV) stored on the chip of the card. | [optional] [default to undefined]
**contactless_exemption_counter** | **number** | Running count of the contactless transactions successfully completed since the last strong customer authentication (SCA) challenge was issued. You can limit the number of contactless transactions that can be performed without issuing an SCA challenge at the card product level.  For more information about strong customer authentication, see &lt;&lt;/core-api/card-products, Card Products&gt;&gt;. | [optional] [default to undefined]
**contactless_exemption_total_amount** | **number** | Running total of the money spent in contactless transactions successfully completed since the last strong customer authentication (SCA) challenge was issued. You can limit the total amount that can be spent in contactless transactions without issuing an SCA challenge at the card product level.  For more information about strong customer authentication, see &lt;&lt;/core-api/card-products, Card Products&gt;&gt;. | [optional] [default to undefined]
**contactless_exemption_transaction_currency** | **string** | Indicates the currency type of the transaction. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the resource was created, in UTC. | [default to undefined]
**cvv_number** | **string** | Three-digit card verification value (CVV2 or CVC2) printed on the card. | [optional] [default to undefined]
**expedite** | **boolean** | A value of &#x60;true&#x60; indicates that you requested expedited processing of the card from your card fulfillment provider. | [optional] [default to false]
**expiration** | **string** | Expiration date in &#x60;MMyy&#x60; format. | [default to undefined]
**expiration_time** | **string** | Expiration date and time, in UTC. | [default to undefined]
**fulfillment** | [**CardFulfillmentResponse**](CardFulfillmentResponse.md) |  | [optional] [default to undefined]
**fulfillment_status** | **string** | Card fulfillment status:  * *ISSUED:* Initial state of all newly created/issued cards. * *ORDERED:* Card ordered through the card fulfillment provider. * *REORDERED:* Card reordered through the card fulfillment provider. * *REJECTED:* Card rejected by the card fulfillment provider. * *SHIPPED:* Card shipped by the card fulfillment provider. * *DELIVERED:* Card delivered by the card fulfillment provider. * *DIGITALLY_PRESENTED:* Card digitally presented using the &#x60;/cards/{token}/showpan&#x60; endpoint; does not affect the delivery of physical cards. | [default to undefined]
**instrument_type** | **string** | Instrument type of the card:  * *PHYSICAL_MSR:* A physical card with a magnetic stripe. This is the default physical card type. * *PHYSICAL_ICC:* A physical card with an integrated circuit, or \&quot;chip.\&quot; * *PHYSICAL_CONTACTLESS:* A physical card that uses radio frequency identification (RFID) or near-field communication (NFC) to enable payment over a secure radio interface. * *PHYSICAL_COMBO:* A physical card with a chip that also supports contactless payments. * *VIRTUAL_PAN:* A virtual card with a primary account number (PAN). | [optional] [default to undefined]
**last_four** | **string** | Last four digits of the card primary account number (PAN). | [default to undefined]
**last_modified_time** | **string** | Date and time when the resource was last modified, in UTC. | [default to undefined]
**metadata** | **{ [key: string]: string; }** | Associates customer-provided metadata with the card. | [optional] [default to undefined]
**new_pan_from_card_token** | **string** | Reissues the specified card (known as the \&quot;source\&quot; card) with a new primary account number (PAN). | [optional] [default to undefined]
**pan** | **string** | Primary account number (PAN) of the card. | [default to undefined]
**pin_is_set** | **boolean** | Specifies if the personal identification number (PIN) has been set for the card. | [default to false]
**reissue_pan_from_card_token** | **string** | Reissues the specified card (known as the \&quot;source\&quot; card). | [optional] [default to undefined]
**state** | **string** | Indicates the state of the card. | [default to undefined]
**state_reason** | **string** | Descriptive reason for why the card is in its current state. For example, \&quot;Card activated by cardholder\&quot;. | [default to undefined]
**token** | **string** | Unique identifier of the card. | [default to undefined]
**translate_pin_from_card_token** | **string** | Copies the personal identification number (PIN) from the specified source card to the newly created card. | [optional] [default to undefined]
**user** | [**UserCardHolderResponse**](UserCardHolderResponse.md) |  | [optional] [default to undefined]
**user_token** | **string** | Unique identifier of the cardholder. | [default to undefined]

## Example

```typescript
import { CardResponse } from './api';

const instance: CardResponse = {
    _3csc,
    account_tokens,
    activation_actions,
    barcode,
    bulk_issuance_token,
    card_product_token,
    chip_cvv_contactless_number,
    chip_cvv_number,
    contactless_exemption_counter,
    contactless_exemption_total_amount,
    contactless_exemption_transaction_currency,
    created_time,
    cvv_number,
    expedite,
    expiration,
    expiration_time,
    fulfillment,
    fulfillment_status,
    instrument_type,
    last_four,
    last_modified_time,
    metadata,
    new_pan_from_card_token,
    pan,
    pin_is_set,
    reissue_pan_from_card_token,
    state,
    state_reason,
    token,
    translate_pin_from_card_token,
    user,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
