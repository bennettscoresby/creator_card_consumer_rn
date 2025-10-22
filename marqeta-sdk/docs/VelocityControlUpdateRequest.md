# VelocityControlUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Indicates whether the velocity control is active. | [optional] [default to undefined]
**amount_limit** | **number** | Maximum monetary sum that can be cleared within the time period defined by the &#x60;velocity_window&#x60; field. Refunds and reversals cannot exceed this limit. | [optional] [default to undefined]
**approvals_only** | **boolean** | If set to &#x60;true&#x60;, only approved transactions are subject to control. If set to &#x60;false&#x60;, only declined transactions are subject to control. | [optional] [default to undefined]
**association** | [**SpendControlAssociation**](SpendControlAssociation.md) |  | [optional] [default to undefined]
**currency_code** | **string** | Three-character ISO 4217 currency code. | [optional] [default to undefined]
**include_cashback** | **boolean** | If set to &#x60;true&#x60;, the cashback components of point-of-sale transactions are subject to control. | [optional] [default to undefined]
**include_credits** | **boolean** | If set to &#x60;true&#x60;, original credit transactions are subject to control. Your request can contain either a &#x60;money_in_transaction&#x60; object or the &#x60;include_credits&#x60; field, not both. | [optional] [default to undefined]
**include_purchases** | **boolean** | If set to &#x60;true&#x60;, the following transactions are subject to control:  * *Account funding:* All account funding transactions * *Cashback:* Only the purchase component of cashback transactions * *Purchase transactions:* All authorizations, PIN debit transactions, and incremental transactions * *Quasi-cash:* All quasi-cash transactions * *Refunds:* All refund transactions (see &lt;&lt;/developer-guides/controlling-spending#_controls_to_limit_amount_and_frequency_of_spending, Controls to limit amount and frequency of spending&gt;&gt; for more information) * *Reversals:* All reversal transactions | [optional] [default to undefined]
**include_transfers** | **boolean** | If set to &#x60;true&#x60;, account-to-account transfers are subject to control. Account-to-account transfers are not currently supported. | [optional] [default to undefined]
**include_withdrawals** | **boolean** | If set to &#x60;true&#x60;, ATM withdrawals are subject to control. | [optional] [default to undefined]
**merchant_scope** | [**MerchantScope**](MerchantScope.md) |  | [optional] [default to undefined]
**money_in_transaction** | [**MoneyInTransaction**](MoneyInTransaction.md) |  | [optional] [default to undefined]
**name** | **string** | Description of how the velocity control restricts spending. For example, \&quot;Max spend of $500 per day\&quot; or \&quot;Max spend of $5000 per month for non-exempt employees\&quot;.  Ensure that the description you provide here adequately captures the kind of restriction exerted by this velocity control, because the Marqeta platform will send this information to you in a webhook in the event that the transaction authorization attempt is declined by the velocity control.  *NOTE:* This field is very important. If your program has multiple velocity controls in place, it is not always clear which one prevented the transaction from being approved. Adding specific details to this field gives you more contextual information when debugging or monitoring declined authorization attempts. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the velocity control resource. | [default to undefined]
**usage_limit** | **number** | Maximum number of times a card can be used within the time period defined by the &#x60;velocity_window&#x60; field.  If &#x60;velocity_window&#x60; is set to &#x60;TRANSACTION&#x60;, do not include a &#x60;usage_limit&#x60; in your request. | [optional] [default to undefined]
**velocity_window** | **string** | Defines the time period to which the &#x60;amount_limit&#x60; and &#x60;usage_limit&#x60; fields apply:  * *DAY* – one day; days begin at 00:00:00 UTC. * *WEEK* – one week; weeks begin Sundays at 00:00:00 UTC. * *MONTH* – one month; months begin on the first day of month at 00:00:00 UTC. * *LIFETIME* – forever; time period never expires. * *TRANSACTION* – a single transaction.  // (2023-05-03): This statement was validated by Processing, as part of a customer inquiry. *NOTE:* If set to &#x60;DAY&#x60;, &#x60;WEEK&#x60;, or &#x60;MONTH&#x60;, the velocity control takes effect retroactively from the beginning of the specified period. The amount and usage data already collected within the first period is counted toward the limits. If set to &#x60;LIFETIME&#x60;, the velocity control only applies to transactions on or after the date and time that the velocity control was created. &#x60;LIFETIME&#x60; velocity controls are not retroactively applied to historical transactions.  // (2023-05-03): Commenting this note out, as it is untrue in testing as reported by customers and confirmed by transaction engine team //_*NOTE:* Editing any of the following fields on a velocity control resets its usage and amount count to 0:  //_* &#x60;merchant_scope.mcc&#x60; //_* &#x60;merchant_scope.mid&#x60; //_* &#x60;merchant_scope.mcc_group&#x60; //_* &#x60;association.user_token&#x60; //_* &#x60;association.card_product_token&#x60; | [optional] [default to undefined]

## Example

```typescript
import { VelocityControlUpdateRequest } from './api';

const instance: VelocityControlUpdateRequest = {
    active,
    amount_limit,
    approvals_only,
    association,
    currency_code,
    include_cashback,
    include_credits,
    include_purchases,
    include_transfers,
    include_withdrawals,
    merchant_scope,
    money_in_transaction,
    name,
    token,
    usage_limit,
    velocity_window,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
