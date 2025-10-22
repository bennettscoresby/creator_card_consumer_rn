# NetworkMetadata

Contains network-related metadata for the transaction, including details about the card program and the card product. Returned if provided by the card network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_identification_1** | **string** |  | [optional] [default to undefined]
**incoming_response_code** | **string** | Network response code, as provided by the card network.  For example, Visa response code &#x60;59&#x60; indicates suspected fraud. | [optional] [default to undefined]
**network_funding_txn_type** | **string** | Transaction type indicator provided by the card network for original credit and account funding transactions. | [optional] [default to undefined]
**outgoing_response_code** | **string** | Network response code, as provided by Marqeta.  For example, Visa response code &#x60;59&#x60; indicates suspected fraud. | [optional] [default to undefined]
**product_id** | **string** | Product identification value assigned by the card network to each card product. Can be used to track card-level activity by individual account number for premium card products. | [optional] [default to undefined]
**program_id** | **string** | Program identification number used with &#x60;product_id&#x60; that identifies the programs associated with a card within a program registered by the issuer with the card network. | [optional] [default to undefined]
**spend_qualifier** | **string** | Indicates whether or not the base spend-assessment threshold defined by the card network has been met. | [optional] [default to undefined]
**surcharge_free_atm_network** | **string** | Name of the surcharge-free ATM network used to complete the transaction. | [optional] [default to undefined]
**terminal_verification_results** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { NetworkMetadata } from './api';

const instance: NetworkMetadata = {
    account_identification_1,
    incoming_response_code,
    network_funding_txn_type,
    outgoing_response_code,
    product_id,
    program_id,
    spend_qualifier,
    surcharge_free_atm_network,
    terminal_verification_results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
