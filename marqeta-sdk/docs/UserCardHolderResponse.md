# UserCardHolderResponse

Contains information about a cardholder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_holder_group_token** | **string** | Associates the specified account holder group with the cardholder. | [optional] [default to undefined]
**active** | **boolean** | Specifies if the cardholder is in the &#x60;ACTIVE&#x60; state on the Marqeta platform. | [optional] [default to false]
**address1** | **string** | Cardholder\&#39;s address. | [optional] [default to undefined]
**address2** | **string** | Additional address information for the cardholder. | [optional] [default to undefined]
**authentication** | [**Authentication**](Authentication.md) |  | [optional] [default to undefined]
**birth_date** | **string** | Cardholder\&#39;s date of birth. | [optional] [default to undefined]
**birth_place** | **string** | Country where the cardholder was born. | [optional] [default to undefined]
**business_token** | **string** | Unique identifier of the business resource. | [optional] [default to undefined]
**city** | **string** | City where the cardholder resides. | [optional] [default to undefined]
**company** | **string** | Company name. | [optional] [default to undefined]
**corporate_card_holder** | **boolean** | Specifies if the cardholder holds a corporate card. | [optional] [default to false]
**country** | **string** | Country where the cardholder resides. | [optional] [default to undefined]
**created_time** | **string** | Date and time when the resource was created, in UTC. | [default to undefined]
**email** | **string** | Valid email address of the cardholder. | [optional] [default to undefined]
**first_name** | **string** | Cardholder\&#39;s first name. | [optional] [default to undefined]
**gender** | **string** | Gender of the cardholder. | [optional] [default to undefined]
**honorific** | **string** | Cardholder\&#39;s title or prefix: Dr., Miss, Mr., Ms., and so on. | [optional] [default to undefined]
**id_card_expiration_date** | **string** | Expiration date of the cardholder\&#39;s identification. | [optional] [readonly] [default to undefined]
**id_card_number** | **string** | Cardholder\&#39;s identification card number. | [optional] [default to undefined]
**identifications** | [**Array&lt;IdentificationResponseModel&gt;**](IdentificationResponseModel.md) | One or more objects containing identifications associated with the cardholder. | [optional] [default to undefined]
**ip_address** | **string** | Cardholder\&#39;s IP address. | [optional] [default to undefined]
**last_modified_time** | **string** | Date and time when the resource was last updated, in UTC. | [default to undefined]
**last_name** | **string** | Cardholder\&#39;s last name. | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Associates any additional metadata you provide with the cardholder. | [optional] [default to undefined]
**middle_name** | **string** | Cardholder\&#39;s middle name. | [optional] [default to undefined]
**nationality** | **string** | Cardholder\&#39;s nationality. | [optional] [default to undefined]
**notes** | **string** | Any additional information pertaining to the cardholder. | [optional] [default to undefined]
**parent_token** | **string** | Unique identifier of the parent user or business resource. | [optional] [default to undefined]
**passport_expiration_date** | **string** | Expiration date of the cardholder\&#39;s passport. | [optional] [readonly] [default to undefined]
**passport_number** | **string** | Cardholder\&#39;s passport number. | [optional] [default to undefined]
**password** | **string** | Password to the cardholder\&#39;s user account on the Marqeta platform. | [optional] [default to undefined]
**phone** | **string** | Cardholder\&#39;s telephone number. | [optional] [default to undefined]
**postal_code** | **string** | Postal code of the cardholder\&#39;s address. | [optional] [default to undefined]
**ssn** | **string** | Cardholder\&#39;s Social Security Number (SSN). | [optional] [default to undefined]
**state** | **string** | State or province where the cardholder resides. | [optional] [default to undefined]
**status** | **string** | Specifies the status of the cardholder on the Marqeta platform. | [optional] [default to undefined]
**title** | **string** | Professional title of the cardholder, such as Chief Comptroller. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the cardholder. | [optional] [default to undefined]
**uses_parent_account** | **boolean** | Indicates whether the child shares balances with the parent (&#x60;true&#x60;), or the child\&#39;s balances are independent of the parent (&#x60;false&#x60;). | [optional] [default to false]
**zip** | **string** | United States ZIP code of the cardholder\&#39;s address. | [optional] [default to undefined]

## Example

```typescript
import { UserCardHolderResponse } from './api';

const instance: UserCardHolderResponse = {
    account_holder_group_token,
    active,
    address1,
    address2,
    authentication,
    birth_date,
    birth_place,
    business_token,
    city,
    company,
    corporate_card_holder,
    country,
    created_time,
    email,
    first_name,
    gender,
    honorific,
    id_card_expiration_date,
    id_card_number,
    identifications,
    ip_address,
    last_modified_time,
    last_name,
    metadata,
    middle_name,
    nationality,
    notes,
    parent_token,
    passport_expiration_date,
    passport_number,
    password,
    phone,
    postal_code,
    ssn,
    state,
    status,
    title,
    token,
    uses_parent_account,
    zip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
