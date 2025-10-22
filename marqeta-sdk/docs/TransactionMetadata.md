# TransactionMetadata

Contains merchant-provided metadata related to the transaction, including details about lodging- and transit-related purchases.  May be returned if the request uses Transaction Model v2 of the Marqeta Core API. Not returned for Transaction Model v1 requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airline** | [**Airline**](Airline.md) |  | [optional] [default to undefined]
**authorization_life_cycle** | **number** | Number of days the pre-authorization is in effect. | [optional] [default to undefined]
**cross_border_transaction** | **boolean** | Whether the transaction is cross-border, i.e., when the merchant and the cardholder are located in two different countries. | [optional] [default to false]
**is_deferred_authorization** | **boolean** | Indicates an offline authorization made during an interruption of card network connectivity, such as a purchase on a flight. | [optional] [default to undefined]
**is_lodging_auto_rental** | **boolean** | Whether the transaction is a lodging or vehicle rental. | [optional] [default to false]
**lodging_auto_rental_start_date** | **string** | Date and time when the lodging check-in or vehicle rental began. | [optional] [default to undefined]
**memo** | **string** | Indicates a credit or debit adjustment in a clearing transaction. | [optional] [default to undefined]
**moto_indicator** | **string** | Indicates the type of mail or telephone order transaction. | [optional] [default to undefined]
**one_leg_out** | **boolean** |  | [optional] [default to undefined]
**payment_channel** | **string** | Channel from which the transaction was originated. | [optional] [default to undefined]
**special_purchase_id** | **string** |  | [optional] [default to undefined]
**transaction_category** | **string** | Type of product or service being purchased, if provided by the merchant. | [optional] [default to undefined]
**transit** | [**Transit**](Transit.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionMetadata } from './api';

const instance: TransactionMetadata = {
    airline,
    authorization_life_cycle,
    cross_border_transaction,
    is_deferred_authorization,
    is_lodging_auto_rental,
    lodging_auto_rental_start_date,
    memo,
    moto_indicator,
    one_leg_out,
    payment_channel,
    special_purchase_id,
    transaction_category,
    transit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
