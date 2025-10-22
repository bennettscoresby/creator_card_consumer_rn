# Acquirer

Contains information about the merchant\'s financial institution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **string** | City of the merchant\&#39;s financial institution. This field appears only in account funding and original credit transactions. | [optional] [default to undefined]
**country_code** | **string** | Country code of the merchant\&#39;s financial institution. This field appears only in account funding and original credit transactions. | [optional] [default to undefined]
**institution_country** | **string** | Country code of the merchant\&#39;s financial institution. | [optional] [default to undefined]
**institution_id_code** | **string** | Identifier code of the merchant\&#39;s financial institution. | [optional] [default to undefined]
**merchant_street_address** | **string** | Street address of the merchant. This field appears only in account funding and original credit transactions. | [optional] [default to undefined]
**name** | **string** | Name of the merchant\&#39;s financial institution. This field appears only in account funding and original credit transactions. | [optional] [default to undefined]
**network_international_id** | **string** | International network identifier. | [optional] [default to undefined]
**postal_code** | **string** | Postal code of the merchant\&#39;s financial institution. This field appears only in account funding and original credit transactions. | [optional] [default to undefined]
**retrieval_reference_number** | **string** | Retrieval reference number of the merchant\&#39;s financial institution. | [optional] [default to undefined]
**state** | **string** | State where the merchant\&#39;s financial institution is located. This field appears only in account funding and original credit transactions. | [optional] [default to undefined]
**street_address** | **string** |  | [optional] [default to undefined]
**system_trace_audit_number** | **string** | System trace audit number of the merchant\&#39;s financial institution. | [optional] [default to undefined]

## Example

```typescript
import { Acquirer } from './api';

const instance: Acquirer = {
    city,
    country_code,
    institution_country,
    institution_id_code,
    merchant_street_address,
    name,
    network_international_id,
    postal_code,
    retrieval_reference_number,
    state,
    street_address,
    system_trace_audit_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
