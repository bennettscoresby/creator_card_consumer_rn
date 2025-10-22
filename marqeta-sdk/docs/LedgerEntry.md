# LedgerEntry

Contains information about a ledger entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_token** | **string** | Unique identifier of the credit account associated with the credit card used to make the ledger entry. | [default to undefined]
**amount** | **number** | Amount of the ledger entry. | [default to undefined]
**card_token** | **string** | Unique identifier of the credit card used to make the ledger entry. | [default to undefined]
**created_time** | **string** | Date and time when the ledger entry was created on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**detail_object** | **object** | Contains the ledger entry\&#39;s full details. The fields returned in this object vary based on the ledger entry group.  The following lists each ledger entry group and the specific fields returned for each group.  * Purchases and refunds: see the &lt;&lt;/core-api/transactions#getTransactions, transactions&gt;&gt; response fields.  * Disputes: see the &lt;&lt;/core-api/credit-account-disputes#retrieveDispute, account disputes response fields.&gt;&gt;  * Original credit transaction (OCT): see the &lt;&lt;/core-api/push-to-card-payments#_create_push_to_card_disbursement, Push-to-Card disbursement&gt;&gt; fields.  * Rewards: see the &lt;&lt;/core-api/credit-account-rewards#createReward, account reward&gt;&gt; response fields.  * Payments: see the &lt;&lt;/core-api/credit-account-payments#retrievePayment, account payment&gt;&gt; response fields.  * Balance refunds: see the &lt;&lt;/core-api/credit-account-balance-refunds#createBalanceRefund, balance refund&gt;&gt; response fields.  * Adjustments: see the &lt;&lt;/core-api/credit-account-adjustments#retrieveAdjustment, account adjustment&gt;&gt; response fields.  * Interest and fees: see fields below. | [optional] [default to undefined]
**detail_token** | **string** | Unique identifier of the ledger entry\&#39;s full details. | [default to undefined]
**group** | **string** | Group to which the ledger entry belongs. | [default to undefined]
**id** | **string** | Eight-digit numeric identifier of the ledger entry, an alternate identifier to the UUID that is useful for remembering and referencing. | [default to undefined]
**impact_time** | **string** | Date and time when the ledger entry impacts the account balance.  For purchases, this is the time of the authorization.  For purchase authorization clearings, this is the time when the transaction is settled. | [default to undefined]
**memo** | **string** | Merchant name or description for the ledger entry. | [default to undefined]
**original_currency** | [**OriginalCurrency**](OriginalCurrency.md) |  | [optional] [default to undefined]
**related_token** | **string** | Unique identifier of the original ledger entry. If the current ledger entry is the original, this field is returned empty. | [optional] [default to undefined]
**request_time** | **string** | For purchases, the date and time of the authorization, which is when the user initiates the ledger entry.  For other ledger entry groups, equivalent to &#x60;impact_time&#x60;. | [default to undefined]
**root_token** | **string** | Unique identifier of the root ledger entry. If the current ledger entry is the root, this field is returned empty. | [optional] [default to undefined]
**status** | **string** | Status of the ledger entry when it was initially recorded and had an impact on the balance, either &#x60;PENDING&#x60; or &#x60;POSTED&#x60;. This field is immutable and may not represent the current status.  To view the current status of purchases, refunds, OCTs, and payments, see the &#x60;detail_object.state&#x60; field. These journal entries start in &#x60;PENDING&#x60; and can transition to &#x60;CLEARED&#x60;, &#x60;DECLINED&#x60;, or &#x60;ERROR&#x60;. This transition of status is only sent through webhook event notifications.  Ledger entries that are final transactions, such as clearings, start and remain in a &#x60;POSTED&#x60; state.  *NOTE*: &#x60;CLEARED&#x60;, &#x60;DECLINED&#x60;, and &#x60;ERROR&#x60; are special statuses that do not have an impact on the account balance, and are not recorded in the ledger. For these special statuses, &#x60;impact_time&#x60;, &#x60;request_time&#x60;, &#x60;created_time&#x60;, &#x60;token&#x60;, and &#x60;id&#x60; are returned blank. | [default to undefined]
**token** | **string** | Unique identifier of the ledger entry. | [default to undefined]
**type** | **string** | Ledger entry event type. | [default to undefined]

## Example

```typescript
import { LedgerEntry } from './api';

const instance: LedgerEntry = {
    account_token,
    amount,
    card_token,
    created_time,
    currency_code,
    detail_object,
    detail_token,
    group,
    id,
    impact_time,
    memo,
    original_currency,
    related_token,
    request_time,
    root_token,
    status,
    token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
