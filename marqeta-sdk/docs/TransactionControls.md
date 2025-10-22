# TransactionControls


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_countries_token** | **string** | 50 char max (default &#x3D; accept_us_only) | [optional] [default to undefined]
**address_verification** | [**AvsControls**](AvsControls.md) |  | [optional] [default to undefined]
**allow_chip_fallback** | **boolean** |  | [optional] [default to false]
**allow_first_pin_set_via_financial_transaction** | **boolean** |  | [optional] [default to false]
**allow_gpa_auth** | **boolean** |  | [optional] [default to false]
**allow_mcc_group_authorization_controls** | **boolean** |  | [optional] [default to false]
**allow_network_load** | **boolean** |  | [optional] [default to false]
**allow_network_load_card_activation** | **boolean** |  | [optional] [default to false]
**allow_quasi_cash** | **boolean** |  | [optional] [default to false]
**always_require_icc** | **boolean** |  | [optional] [default to false]
**always_require_pin** | **boolean** |  | [optional] [default to false]
**enable_credit_service** | **boolean** |  | [optional] [default to false]
**enable_partial_auth_approval** | **boolean** |  | [optional] [default to false]
**ignore_card_suspended_state** | **boolean** |  | [optional] [default to false]
**notification_language** | **string** |  | [optional] [default to undefined]
**quasi_cash_exempt_merchant_group_token** | **string** | 36 char max | [optional] [default to undefined]
**quasi_cash_exempt_mids** | **string** |  | [optional] [default to undefined]
**require_card_not_present_card_security_code** | **boolean** |  | [optional] [default to false]
**strong_customer_authentication_limits** | [**StrongCustomerAuthenticationLimits**](StrongCustomerAuthenticationLimits.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionControls } from './api';

const instance: TransactionControls = {
    accepted_countries_token,
    address_verification,
    allow_chip_fallback,
    allow_first_pin_set_via_financial_transaction,
    allow_gpa_auth,
    allow_mcc_group_authorization_controls,
    allow_network_load,
    allow_network_load_card_activation,
    allow_quasi_cash,
    always_require_icc,
    always_require_pin,
    enable_credit_service,
    enable_partial_auth_approval,
    ignore_card_suspended_state,
    notification_language,
    quasi_cash_exempt_merchant_group_token,
    quasi_cash_exempt_mids,
    require_card_not_present_card_security_code,
    strong_customer_authentication_limits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
