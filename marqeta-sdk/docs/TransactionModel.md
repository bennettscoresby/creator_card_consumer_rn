# TransactionModel

Transactions are represented by the `transaction` object. The Marqeta platform creates a separate `transaction` object for each transaction message received from the card network. The attributes of a given `transaction` object depend on the transaction type.  This section documents all fields that might be included in a `transaction` object.  // This schema is used by InfoDev to generate API reference documentation. // File location in GitHub is: openapi/transactions/schemas/transaction_model.yaml

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_funding** | [**AccountFunding**](AccountFunding.md) |  | [optional] [default to undefined]
**account_name_verification** | [**AccountNameVerificationModel**](AccountNameVerificationModel.md) |  | [optional] [default to undefined]
**account_owner** | [**AccountOwnerModel**](AccountOwnerModel.md) |  | [optional] [default to undefined]
**accounts** | [**Array&lt;AccountBalance&gt;**](AccountBalance.md) |  | [optional] [default to undefined]
**acquirer** | [**Acquirer**](Acquirer.md) |  | [optional] [default to undefined]
**acquirer_fee_amount** | **number** | Indicates the amount of the acquirer fee. Account holders are sometimes charged an acquirer fee for card use at ATMs, fuel dispensers, and so on. | [optional] [default to undefined]
**acquirer_reference_data** | **string** | Acquirer-assigned unique identifier of the transaction. Useful for settlement and reconciliation. | [optional] [default to undefined]
**acquirer_reference_id** | **string** | Acquirer-assigned unique identifier of the transaction. Useful for settlement and reconciliation. | [optional] [default to undefined]
**acting_user_token** | **string** | Unique identifier of the user who conducted the transaction. This might be a child user configured to share its parent\&#39;s account balance. | [default to undefined]
**address_verification** | [**AddressVerificationModel**](AddressVerificationModel.md) |  | [optional] [default to undefined]
**advice_reason_code** | **string** | Extended stand-in processing (STIP) reason code, as provided by the card network. | [optional] [default to undefined]
**advice_reason_details** | **string** | Extended stand-in processing (STIP) reason details, as provided by the card network. | [optional] [default to undefined]
**amount** | **number** | Amount of the transaction. | [default to undefined]
**amount_to_be_released** | **number** | Amount of original authorization to be released. This field appears in final clearing transactions where the clearing amount is lower than the authorization amount. | [optional] [default to undefined]
**anticipated_amount** | **number** | Anticipated amount of the transaction, as provided by the card network. This field applies to anticipated amount verification transactions (AAVTs). | [optional] [default to undefined]
**approval_code** | **string** | Unique identifier assigned to an authorization, printed on the receipt at point of sale. | [optional] [default to undefined]
**atc_information** | [**ATCInformationModel**](ATCInformationModel.md) |  | [optional] [default to undefined]
**authorization_expiration** | **string** |  | [optional] [default to undefined]
**auto_reload** | [**AutoReloadModel**](AutoReloadModel.md) |  | [optional] [default to undefined]
**bank_transfer_token** | **string** |  | [optional] [default to undefined]
**batch_number** | **string** | The batch number of the transaction. | [optional] [default to undefined]
**billpay** | [**BillPayResponse**](BillPayResponse.md) |  | [optional] [default to undefined]
**business** | [**BusinessMetadata**](BusinessMetadata.md) |  | [optional] [default to undefined]
**business_token** | **string** | Unique identifier of the business that owns the account that funded the transaction. | [optional] [default to undefined]
**card** | [**CardResponse**](CardResponse.md) |  | [optional] [default to undefined]
**card_acceptor** | [**TransactionCardAcceptor**](TransactionCardAcceptor.md) |  | [optional] [default to undefined]
**card_holder_model** | [**UserCardHolderResponse**](UserCardHolderResponse.md) |  | [optional] [default to undefined]
**card_product_token** | **string** | Unique identifier of the card product. | [optional] [default to undefined]
**card_security_code_verification** | [**CardSecurityCodeVerification**](CardSecurityCodeVerification.md) |  | [optional] [default to undefined]
**card_token** | **string** | Unique identifier of the card. Useful when a single account holder has multiple cards. | [optional] [default to undefined]
**cardholder_authentication_data** | [**CardholderAuthenticationData**](CardholderAuthenticationData.md) |  | [optional] [default to undefined]
**cash_back_amount** | **number** | Amount of cash back requested by the cardholder during the transaction. Included in the total transaction amount. | [optional] [default to undefined]
**cashloads_direct** | [**CashloadsResponseModel**](CashloadsResponseModel.md) |  | [optional] [default to undefined]
**chargeback** | [**ChargebackResponse**](ChargebackResponse.md) |  | [optional] [default to undefined]
**clearing_record_sequence_number** | **string** | A sequence number that identifies a specific clearing message among multiple clearing messages for an authorization. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the Marqeta platform created the transaction entry, in UTC format. For example, when Marqeta processed the clearing record for a refund. | [optional] [default to undefined]
**currency_code** | **string** | Currency type of the transaction. | [optional] [default to undefined]
**currency_conversion** | [**CurrencyConversion**](CurrencyConversion.md) |  | [optional] [default to undefined]
**deferred_settlement_days** | **string** |  | [optional] [default to undefined]
**digital_commerce_authentication_indicator** | **string** | Visa Digital Commerce Authentication Program (VDCAP) indicator for U.S. domestic card-not-present transactions. Indicates the presence of key data elements, along with the eligible method used to share authentication data.  * *02:* Visa Secure * *03:* Visa data only * *04:* Visa Payment Passkey with Visa Secure * *05:* Visa Payment Passkey with Visa Token Service * *06:* IDX 3rd party * *07:* Visa Token Service data only | [optional] [default to undefined]
**digital_wallet_token** | [**DigitalWalletToken**](DigitalWalletToken.md) |  | [optional] [default to undefined]
**digital_wallet_token_transaction_service_provider_info** | [**DigitalServiceProvider**](DigitalServiceProvider.md) |  | [optional] [default to undefined]
**direct_deposit** | [**DepositDepositResponse**](DepositDepositResponse.md) |  | [optional] [default to undefined]
**dispute** | [**DisputeModel**](DisputeModel.md) |  | [optional] [default to undefined]
**duration** | **number** | Duration of the transaction on Marqeta\&#39;s servers, in milliseconds. | [optional] [default to undefined]
**enhanced_data_token** | **string** | The enhanced commercial card data token for the transaction. | [optional] [default to undefined]
**estimated_authorization** | **boolean** | Indicates an estimated authorization. An estimated authorization allows the merchant to obtain an approval for funds before the cardholder has finalized exactly what goods or services will be purchased. | [optional] [default to undefined]
**fee** | [**Fee**](Fee.md) |  | [optional] [default to undefined]
**fee_transfer** | [**FeeTransferResponse**](FeeTransferResponse.md) |  | [optional] [default to undefined]
**fees** | [**Array&lt;NetworkFeeModel&gt;**](NetworkFeeModel.md) | List of fees associated with the transaction.  This array is returned if it exists in the resource. | [optional] [default to undefined]
**flex** | [**Flex**](Flex.md) |  | [optional] [default to undefined]
**fraud** | [**FraudView**](FraudView.md) |  | [optional] [default to undefined]
**from_account** | **string** | Specifies the funding account type. | [optional] [default to undefined]
**from_account_token** | **string** |  | [optional] [default to undefined]
**gpa** | [**CardholderBalance**](CardholderBalance.md) |  | [optional] [default to undefined]
**gpa_order** | [**GpaResponse**](GpaResponse.md) |  | [optional] [default to undefined]
**gpa_order_unload** | [**GpaReturns**](GpaReturns.md) |  | [optional] [default to undefined]
**identifier** | **string** | Sequential identifier of the transaction. | [optional] [default to undefined]
**incremental_authorization_transaction_tokens** | **Array&lt;string&gt;** | An array of incremental authorization transaction tokens. | [optional] [default to undefined]
**installment_data** | [**InstallmentData**](InstallmentData.md) |  | [optional] [default to undefined]
**interchange_rate_descriptor** | **string** |  | [optional] [default to undefined]
**is_final_clearing** | **boolean** | Indicates the final clearing event for an authorization. If the final cleared amount is lower than the authorized amount, you must release the hold on the funds per the value in the &#x60;amount_to_be_released&#x60; field. | [optional] [default to undefined]
**is_preauthorization** | **boolean** | Indicates if the transaction is a pre-authorization. | [optional] [default to false]
**isaIndicator** | **string** | The international service assessment indicator indicates if an ISA fee is applicable to the transaction. | [optional] [default to undefined]
**issuer_interchange_amount** | **number** | The amount of interchange charged by the card issuer. | [optional] [default to undefined]
**issuer_payment_node** | **string** | Unique identifier of the Marqeta platform server that received the transaction from the card network. | [optional] [default to undefined]
**issuer_received_time** | **string** | Date and time when the Marqeta platform received the transaction from the card network, in UTC. | [optional] [default to undefined]
**local_transaction_date** | **string** | Indicates the local time of the transaction at the card acceptor\&#39;s location. You can use this field to determine the correct time of the transaction when filing a dispute. | [optional] [default to undefined]
**merchant** | [**MerchantResponseModel**](MerchantResponseModel.md) |  | [optional] [default to undefined]
**merchant_initiated_original_trace_id** | **string** | Unique network identification value formed by combining the 6- to 9-character Mastercard Banknet Reference Number and the 4-digit settlement date for recurring payments and other merchant-initiated transactions. | [optional] [default to undefined]
**multi_clearing_sequence_count** | **string** | If an authorization has multiple clearing transactions, this field displays their total number. For example, if an authorization has four clearing transactions, the sequence count is &#x60;04&#x60;. | [optional] [default to undefined]
**multi_clearing_sequence_number** | **string** | If an authorization has multiple clearing transactions, this field displays the sequence number for the clearing transaction. For example, if this is the second clearing transaction of four, the sequence number is &#x60;02&#x60;. | [optional] [default to undefined]
**national_net_cpd_of_original** | **string** |  | [optional] [default to undefined]
**network** | **string** | Indicates which card network was used to complete the transactions. | [optional] [default to undefined]
**network_metadata** | [**NetworkMetadata**](NetworkMetadata.md) |  | [optional] [default to undefined]
**network_reference_id** | **string** | Network-assigned unique identifier of the transaction. Useful for settlement and reconciliation. | [optional] [default to undefined]
**network_transaction_lifecycle_id** | **string** | Transaction identifier, as provided by the card network. This identifier connects the original transaction to all subsequent activities throughout the transaction lifecycle. | [optional] [default to undefined]
**original_credit** | [**OriginalCredit**](OriginalCredit.md) |  | [optional] [default to undefined]
**original_transaction_token** | **string** | Unique identifier of the original transaction in a series of related transactions. | [optional] [default to undefined]
**payment_facilitator** | [**PaymentFacilitatorModel**](PaymentFacilitatorModel.md) |  | [optional] [default to undefined]
**peer_transfer** | [**PeerTransferResponse**](PeerTransferResponse.md) |  | [optional] [default to undefined]
**polarity** | **string** | Indicates whether the transaction is credit or debit. | [optional] [default to undefined]
**pos** | [**Pos**](Pos.md) |  | [optional] [default to undefined]
**preceding_related_transaction_token** | **string** | Returned for final transaction types.  Unique identifier of the preceding related transaction. Useful for identifying the transaction that preceded the current one.  For example, &#x60;authorization&#x60;, a temporary transaction type, precedes and is completed by &#x60;authorization.clearing&#x60;, a final transaction type. In this case, the &#x60;authorization&#x60; token is returned with this field. For which transaction types are temporary or final, see &lt;&lt;/core-api/event-types#_transaction_events, Transaction events in Event Types&gt;&gt;. | [optional] [default to undefined]
**preceding_transaction** | [**PrecedingTransaction**](PrecedingTransaction.md) |  | [optional] [default to undefined]
**program** | [**Program**](Program.md) |  | [optional] [default to undefined]
**program_reserve_deposit_info** | [**ProgramReserveTransactionResponse**](ProgramReserveTransactionResponse.md) |  | [optional] [default to undefined]
**program_transfer** | [**ProgramTransferResponse**](ProgramTransferResponse.md) |  | [optional] [default to undefined]
**real_time_fee_group** | [**RealTimeFeeGroup**](RealTimeFeeGroup.md) |  | [optional] [default to undefined]
**relay_resistance_protocol_result** | **string** |  | [optional] [default to undefined]
**request_amount** | **number** | Merchant-requested amount, including any fees. | [optional] [default to undefined]
**response** | [**Response**](Response.md) |  | [optional] [default to undefined]
**settlement_date** | **string** | Date and time when funds were moved for a transaction, in UTC. For example, in the case of a refund, when funds were credited to the cardholder. | [optional] [default to undefined]
**settlement_indicator** | **string** | Indicates the settlement service used for the transaction. | [optional] [default to undefined]
**standin_approved_by** | **string** | Indicates which party approved a transaction: the card network using stand-in processing, or Marqeta using Commando Mode. Returned only when a transaction is approved. | [optional] [default to undefined]
**standin_by** | **string** | Indicates which party approved a transaction: the card network using stand-in processing, or Marqeta using Commando Mode. | [optional] [default to undefined]
**standin_reason** | **string** | Indicates why the card network handled a transaction requiring stand-in processing. | [optional] [default to undefined]
**state** | **string** | Current state of the transaction. For more information about the &#x60;state&#x60; field, see &lt;&lt;/developer-guides/about-transactions#_the_transaction_lifecycle, The transaction lifecycle&gt;&gt;. | [default to undefined]
**store** | [**StoreResponseModel**](StoreResponseModel.md) |  | [optional] [default to undefined]
**strong_customer_authentication** | [**StrongCustomerAuthenticationModel**](StrongCustomerAuthenticationModel.md) |  | [optional] [default to undefined]
**subnetwork** | **string** | Indicates which subnetwork was used to complete the transaction. Possible values include the following:  * *VISANET* – Used for VisaNet signature-based transactions. * *VISANETDEBIT* – Used for VisaNet Debit PIN-based transaction. * *VISAINTERLINK* – Used for Visa Interlink PIN-based transactions. * *VISAPLUS* – Used for ATM withdrawals on Visa. * *MAESTRO* – Used for PIN-based transactions on Mastercard. * *CIRRUS* – Used for ATM withdrawals on Mastercard. * *MASTERCARDDEBIT* – Used for signature-based transactions on Mastercard. * *GATEWAY_JIT* – Used for Gateway JIT Funding transactions. * *MANAGED_JIT* – Used for Managed JIT Funding transactions or for transactions that occur while Commando Mode is enabled. | [optional] [default to undefined]
**to_account** | **string** | Specifies the receiving account type. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the transaction, formatted as a UUID.  *NOTE:* For subsequent related transactions, this token value appears as the &#x60;preceding_related_transaction_token&#x60;. | [readonly] [default to undefined]
**transaction_attributes** | **{ [key: string]: string; }** | Additional transaction attributes. | [optional] [default to undefined]
**transaction_metadata** | [**TransactionMetadata**](TransactionMetadata.md) |  | [optional] [default to undefined]
**type** | **string** | Transaction event type. For more information about the &#x60;type&#x60; field, see &lt;&lt;/core-api/event-types#_transaction_events, Transaction events&gt;&gt;. | [default to undefined]
**user** | [**CardholderMetadata**](CardholderMetadata.md) |  | [optional] [default to undefined]
**user_token** | **string** | Unique identifier of the user who owns the account that funded the transaction; subsequent related transactions retain the same &#x60;user_token&#x60;, even if the card used to complete the transaction moves to another user. | [optional] [default to undefined]
**user_transaction_time** | **string** | Date and time when the user initiated the transaction, in UTC. For example, when a merchant performed the original authorization for a refund. | [optional] [default to undefined]
**vdcap_qualified** | **boolean** |  | [optional] [default to undefined]
**velocity_control_balances** | [**{ [key: string]: Available; }**](Available.md) |  | [optional] [default to undefined]
**visa_pop_code** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionModel } from './api';

const instance: TransactionModel = {
    account_funding,
    account_name_verification,
    account_owner,
    accounts,
    acquirer,
    acquirer_fee_amount,
    acquirer_reference_data,
    acquirer_reference_id,
    acting_user_token,
    address_verification,
    advice_reason_code,
    advice_reason_details,
    amount,
    amount_to_be_released,
    anticipated_amount,
    approval_code,
    atc_information,
    authorization_expiration,
    auto_reload,
    bank_transfer_token,
    batch_number,
    billpay,
    business,
    business_token,
    card,
    card_acceptor,
    card_holder_model,
    card_product_token,
    card_security_code_verification,
    card_token,
    cardholder_authentication_data,
    cash_back_amount,
    cashloads_direct,
    chargeback,
    clearing_record_sequence_number,
    created_time,
    currency_code,
    currency_conversion,
    deferred_settlement_days,
    digital_commerce_authentication_indicator,
    digital_wallet_token,
    digital_wallet_token_transaction_service_provider_info,
    direct_deposit,
    dispute,
    duration,
    enhanced_data_token,
    estimated_authorization,
    fee,
    fee_transfer,
    fees,
    flex,
    fraud,
    from_account,
    from_account_token,
    gpa,
    gpa_order,
    gpa_order_unload,
    identifier,
    incremental_authorization_transaction_tokens,
    installment_data,
    interchange_rate_descriptor,
    is_final_clearing,
    is_preauthorization,
    isaIndicator,
    issuer_interchange_amount,
    issuer_payment_node,
    issuer_received_time,
    local_transaction_date,
    merchant,
    merchant_initiated_original_trace_id,
    multi_clearing_sequence_count,
    multi_clearing_sequence_number,
    national_net_cpd_of_original,
    network,
    network_metadata,
    network_reference_id,
    network_transaction_lifecycle_id,
    original_credit,
    original_transaction_token,
    payment_facilitator,
    peer_transfer,
    polarity,
    pos,
    preceding_related_transaction_token,
    preceding_transaction,
    program,
    program_reserve_deposit_info,
    program_transfer,
    real_time_fee_group,
    relay_resistance_protocol_result,
    request_amount,
    response,
    settlement_date,
    settlement_indicator,
    standin_approved_by,
    standin_by,
    standin_reason,
    state,
    store,
    strong_customer_authentication,
    subnetwork,
    to_account,
    token,
    transaction_attributes,
    transaction_metadata,
    type,
    user,
    user_token,
    user_transaction_time,
    vdcap_qualified,
    velocity_control_balances,
    visa_pop_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
