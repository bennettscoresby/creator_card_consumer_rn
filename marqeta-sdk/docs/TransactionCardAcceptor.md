# TransactionCardAcceptor

Contains information about the merchant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Card acceptor\&#39;s address. May be returned if the request uses Transaction Model v1 of the Marqeta Core API. Not returned for Transaction Model v2 requests. | [optional] [default to undefined]
**business_registration_id** | **string** | Business registration identifier, as provided by the Visa card network. | [optional] [default to undefined]
**business_registration_id_type** | **string** | Business registration identifier type, as provided by the Visa card network. | [optional] [default to undefined]
**city** | **string** | Card acceptor\&#39;s city. | [optional] [default to undefined]
**country_code** | **string** | Card acceptor\&#39;s country code. May be returned if the request uses Transaction Model v2 of the Marqeta Core API. Not returned for Transaction Model v1 requests. | [optional] [default to undefined]
**country_of_origin** | **string** | The merchant\&#39;s country of origin.  A merchant\&#39;s country of origin can be different from the country in which the merchant is located. For example, embassies are physically located in countries that are not their country of origin: a Mexican embassy might be physically located in Singapore, but the country of origin is Mexico.  This field is included when the cardholder conducts a transaction with a government-controlled merchant using a Marqeta-issued card. | [optional] [default to undefined]
**customer_service_phone** | **string** |  | [optional] [default to undefined]
**geographic_coordinates** | **string** | Geographic coordinates of the card acceptor in &#x60;latitudeE7,longitudeE7&#x60; format. | [optional] [default to undefined]
**independent_sales_organization_id** | **string** |  | [optional] [default to undefined]
**legal_business_name** | **string** | Legal business name, as provided by the Visa card network. | [optional] [default to undefined]
**mcc** | **string** | Merchant category code (MCC). | [optional] [default to undefined]
**mcc_groups** | **Array&lt;string&gt;** | An array of &#x60;mcc_groups&#x60;. | [optional] [default to undefined]
**merchant_tax_id** | **string** |  | [optional] [default to undefined]
**merchant_vat_registration_id** | **string** | The VAT registration identifier of the merchant. | [optional] [default to undefined]
**mid** | **string** | The merchant identifier. | [optional] [default to undefined]
**name** | **string** | Card acceptor\&#39;s name. | [optional] [default to undefined]
**network_assigned_id** | **string** | Identifier assigned by the card network. | [optional] [default to undefined]
**network_mid** | **string** | The merchant identifier on the card network. | [optional] [default to undefined]
**payment_facilitator_id** | **string** |  | [optional] [default to undefined]
**payment_facilitator_name** | **string** | The name of the payment facilitator, including the sub-merchant identifier, of an original credit transaction. This field is returned when a payment facilitator participates in the transaction. | [optional] [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**poi** | [**TerminalModel**](TerminalModel.md) |  | [optional] [default to undefined]
**postal_code** | **string** | Card acceptor\&#39;s postal code. | [optional] [default to undefined]
**service_geographic_coordinates** | **string** | Geographic coordinates of the service provider in &#x60;latitudeE7,longitudeE7&#x60; format. | [optional] [default to undefined]
**special_merchant_id** | **string** |  | [optional] [default to undefined]
**state** | **string** | State, provincial, territorial, or federal abbreviation (&#x60;CA&#x60; for California or &#x60;CAN&#x60; for Canada, for example).  For the complete list, see &lt;&lt;/core-api/kyc-verification#_valid_state_provincial_territorial_and_federal_abbreviations, Valid state, provincial, territorial, and federal abbreviations&gt;&gt;.  *Note*: Non-US merchants may return more than 2 char for this field. | [optional] [default to undefined]
**sub_merchant_id** | **string** |  | [optional] [default to undefined]
**transfer_service_provider_name** | **string** | The name of the transfer service provider of a money transfer original credit transaction. This field is included when a transfer service provider participates in the transaction. | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionCardAcceptor } from './api';

const instance: TransactionCardAcceptor = {
    address,
    business_registration_id,
    business_registration_id_type,
    city,
    country_code,
    country_of_origin,
    customer_service_phone,
    geographic_coordinates,
    independent_sales_organization_id,
    legal_business_name,
    mcc,
    mcc_groups,
    merchant_tax_id,
    merchant_vat_registration_id,
    mid,
    name,
    network_assigned_id,
    network_mid,
    payment_facilitator_id,
    payment_facilitator_name,
    phone,
    poi,
    postal_code,
    service_geographic_coordinates,
    special_merchant_id,
    state,
    sub_merchant_id,
    transfer_service_provider_name,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
