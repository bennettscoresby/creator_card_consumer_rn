# BusinessCardHolderUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_holder_group_token** | **string** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to true]
**attestation_consent** | **boolean** |  | [optional] [default to false]
**attestation_date** | **string** |  | [optional] [default to undefined]
**attester_name** | **string** |  | [optional] [default to undefined]
**attester_title** | **string** |  | [optional] [default to undefined]
**beneficial_owner1** | [**BeneficialOwnerRequest**](BeneficialOwnerRequest.md) |  | [optional] [default to undefined]
**beneficial_owner2** | [**BeneficialOwnerRequest**](BeneficialOwnerRequest.md) |  | [optional] [default to undefined]
**beneficial_owner3** | [**BeneficialOwnerRequest**](BeneficialOwnerRequest.md) |  | [optional] [default to undefined]
**beneficial_owner4** | [**BeneficialOwnerRequest**](BeneficialOwnerRequest.md) |  | [optional] [default to undefined]
**business_name_dba** | **string** |  | [optional] [default to undefined]
**business_name_legal** | **string** |  | [optional] [default to undefined]
**business_type** | **string** |  | [optional] [default to undefined]
**date_established** | **string** |  | [optional] [default to undefined]
**duns_number** | **string** |  | [optional] [default to undefined]
**general_business_description** | **string** |  | [optional] [default to undefined]
**history** | **string** |  | [optional] [default to undefined]
**identifications** | [**Array&lt;IdentificationRequestModel&gt;**](IdentificationRequestModel.md) |  | [optional] [default to undefined]
**in_current_location_since** | **string** |  | [optional] [default to undefined]
**incorporation** | [**BusinessIncorporation**](BusinessIncorporation.md) |  | [optional] [default to undefined]
**international_office_locations** | **string** |  | [optional] [default to undefined]
**ip_address** | **string** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**notes** | **string** |  | [optional] [default to undefined]
**office_location** | [**AddressRequestModel**](AddressRequestModel.md) |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**primary_contact** | [**PrimaryContactInfoModel**](PrimaryContactInfoModel.md) |  | [optional] [default to undefined]
**proprietor_is_beneficial_owner** | **boolean** |  | [optional] [default to false]
**proprietor_or_officer** | [**BusinessProprietor**](BusinessProprietor.md) |  | [optional] [default to undefined]
**taxpayer_id** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**website** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { BusinessCardHolderUpdate } from './api';

const instance: BusinessCardHolderUpdate = {
    account_holder_group_token,
    active,
    attestation_consent,
    attestation_date,
    attester_name,
    attester_title,
    beneficial_owner1,
    beneficial_owner2,
    beneficial_owner3,
    beneficial_owner4,
    business_name_dba,
    business_name_legal,
    business_type,
    date_established,
    duns_number,
    general_business_description,
    history,
    identifications,
    in_current_location_since,
    incorporation,
    international_office_locations,
    ip_address,
    metadata,
    notes,
    office_location,
    password,
    phone,
    primary_contact,
    proprietor_is_beneficial_owner,
    proprietor_or_officer,
    taxpayer_id,
    token,
    website,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
