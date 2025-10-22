# AccountResponse

Contains information on a credit account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_time** | **string** | Date and time when the credit account was activated on Marqeta\&#39;s credit platform, in UTC. | [optional] [default to undefined]
**available_credit** | **number** | Amount of credit available for use on the credit account. | [default to undefined]
**bundle_token** | **string** | Unique identifier of the associated bundle product. | [optional] [default to undefined]
**business_substatuses** | **Array&lt;string&gt;** | Substatuses of the business under the credit account. | [optional] [default to undefined]
**business_token** | **string** | Unique identifier of the parent business program.  Either a &#x60;user_token&#x60; or &#x60;business_token&#x60; is returned, not both. | [optional] [default to undefined]
**config** | [**AccountConfigResponse**](AccountConfigResponse.md) |  | [default to undefined]
**created_time** | **string** | Date and time when the credit account was created on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**credit_limit** | **number** | Maximum balance the credit account can carry. | [default to undefined]
**credit_product_token** | **string** | Unique identifier of the associated credit product. | [optional] [default to undefined]
**currency_code** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]
**current_balance** | **number** | Current purchase balance on the credit account. | [default to undefined]
**description** | **string** | Description for the credit account. | [optional] [default to undefined]
**external_offer_id** | **string** | Unique identifier you provide of the associated external credit offer. | [optional] [default to undefined]
**latest_statement_cycle_type** | [**CycleType**](CycleType.md) |  | [optional] [default to undefined]
**max_apr_schedules** | [**Array&lt;MaxAPRSchedulesResponse&gt;**](MaxAPRSchedulesResponse.md) | Contains &#x60;max_apr_schedule&#x60; objects, which provide information about any temporary overrides of the APRs on the credit account. This could include special APR rates due to account/user sub status changes. | [optional] [default to undefined]
**name** | **string** | Name of the credit account. | [optional] [default to undefined]
**remaining_min_payment_due** | **number** | Amount remaining on the latest statement\&#39;s minimum payment, after it\&#39;s adjusted for payments, returned payments, and applicable credits that occurred after the latest statement\&#39;s closing date. | [default to undefined]
**remaining_statement_balance** | **number** | Amount remaining on the latest statement\&#39;s balance, after it\&#39;s adjusted for payments, returned payments, and applicable credits that occurred after the latest statement\&#39;s closing date. | [default to undefined]
**secured_account_token** | **string** | Unique identifier of the secured account. | [optional] [default to undefined]
**status** | [**AccountStatusEnum**](AccountStatusEnum.md) |  | [default to undefined]
**substatuses** | **Array&lt;string&gt;** | Substatuses of the credit account. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the credit account. | [default to undefined]
**type** | [**AccountType**](AccountType.md) |  | [default to undefined]
**updated_time** | **string** | Date and time when the credit account was last updated on Marqeta\&#39;s credit platform, in UTC. | [default to undefined]
**usages** | [**Array&lt;AccountUsageResponse&gt;**](AccountUsageResponse.md) | Contains one or more &#x60;usages&#x60; objects that contain information on how a credit account is used and what types of balances are permitted on the account. | [default to undefined]
**user_substatuses** | **Array&lt;string&gt;** | Substatuses of the users under the credit account. | [optional] [default to undefined]
**user_token** | **string** | Unique identifier of the primary account holder or an administrative user of a business account.  Either a &#x60;user_token&#x60; or &#x60;business_token&#x60; is returned, not both. | [optional] [default to undefined]

## Example

```typescript
import { AccountResponse } from './api';

const instance: AccountResponse = {
    activation_time,
    available_credit,
    bundle_token,
    business_substatuses,
    business_token,
    config,
    created_time,
    credit_limit,
    credit_product_token,
    currency_code,
    current_balance,
    description,
    external_offer_id,
    latest_statement_cycle_type,
    max_apr_schedules,
    name,
    remaining_min_payment_due,
    remaining_statement_balance,
    secured_account_token,
    status,
    substatuses,
    token,
    type,
    updated_time,
    usages,
    user_substatuses,
    user_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
