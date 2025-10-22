# UserCardHolderUpdateModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_holder_group_token** | **string** | Associates the specified account holder group with the cardholder. Send a &#x60;GET&#x60; request to &#x60;/accountholdergroups&#x60; to retrieve account holder group tokens. | [optional] [default to undefined]
**address1** | **string** | Cardholder address.  *NOTE:* Required for KYC verification (US-based cardholders only). Cannot perform KYC if set to a PO Box. | [optional] [default to undefined]
**address2** | **string** | Additional address information for the cardholder.  *NOTE:* Cannot perform KYC if set to a PO Box. | [optional] [default to undefined]
**birth_date** | **string** | Cardholder date of birth.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**birth_place** | **string** | Country where the cardholder was born. | [optional] [default to undefined]
**city** | **string** | The city that corresponds to the address.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**company** | **string** | Company name. | [optional] [default to undefined]
**corporate_card_holder** | **boolean** | Specifies if the cardholder holds a corporate card. | [optional] [default to false]
**country** | **string** | Country in which the cardholder resides.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**email** | **string** | Valid email address for the cardholder.  This value must be unique among cardholders. | [optional] [default to undefined]
**first_name** | **string** | Cardholder first name.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**gender** | **string** | Gender of the cardholder. | [optional] [default to undefined]
**honorific** | **string** | Cardholder title or prefix: Ms., Mr., Miss, Mrs. | [optional] [default to undefined]
**id_card_expiration_date** | **string** | Expiration date of the cardholder\&#39;s identification card. | [optional] [default to undefined]
**id_card_number** | **string** | Cardholder\&#39;s identification card number. | [optional] [default to undefined]
**identifications** | [**Array&lt;IdentificationRequestModel&gt;**](IdentificationRequestModel.md) | One or more objects containing identifications associated with the cardholder. | [optional] [default to undefined]
**ip_address** | **string** | Cardholder IP address. | [optional] [default to undefined]
**last_name** | **string** | Cardholder last name.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Associates any additional metadata you provide with the cardholder. | [optional] [default to undefined]
**middle_name** | **string** | Cardholder middle name. | [optional] [default to undefined]
**nationality** | **string** | Cardholder nationality. | [optional] [default to undefined]
**notes** | **string** | Any additional information pertaining to the cardholder. | [optional] [default to undefined]
**parent_token** | **string** | Unique identifier of an existing user or business resource.  Required if &#x60;uses_parent_account &#x3D; true&#x60;. This account holder is configured as the parent of the current cardholder.  To unlink a child account from a parent account, update this field to a null value. | [optional] [default to undefined]
**passport_expiration_date** | **string** | Expiration date of the cardholder\&#39;s passport. | [optional] [default to undefined]
**passport_number** | **string** | Cardholder passport number. | [optional] [default to undefined]
**password** | **string** | Cardholder\&#39;s user account password on the Marqeta platform. | [optional] [default to undefined]
**phone** | **string** | Cardholder telephone number (including area code), prepended by the &#x60;+&#x60; symbol and the 1- to 3-digit country calling code. Do not include hyphens, spaces, or parentheses. | [optional] [default to undefined]
**postal_code** | **string** | Postal code of the cardholder\&#39;s address.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**ssn** | **string** | Cardholder\&#39;s Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN). | [optional] [default to undefined]
**state** | **string** | State where the cardholder resides (&#x60;CA&#x60; for California, for example).  *NOTE:* &lt;&lt;/core-api/kyc-verification#_valid_state_provincial_territorial_and_federal_abbreviations, Two-character abbreviation&gt;&gt; required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**title** | **string** | Professional title of the cardholder, such as Chief Comptroller. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the cardholder. | [optional] [default to undefined]
**uses_parent_account** | **boolean** | Indicates whether the child shares balances with the parent (&#x60;true&#x60;), or the child\&#39;s balances are independent of the parent (&#x60;false&#x60;).  If set to &#x60;true&#x60;, you must also include a &#x60;parent_token&#x60; in the request. This value cannot be updated. | [optional] [default to false]

## Example

```typescript
import { UserCardHolderUpdateModel } from './api';

const instance: UserCardHolderUpdateModel = {
    account_holder_group_token,
    address1,
    address2,
    birth_date,
    birth_place,
    city,
    company,
    corporate_card_holder,
    country,
    email,
    first_name,
    gender,
    honorific,
    id_card_expiration_date,
    id_card_number,
    identifications,
    ip_address,
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
    title,
    token,
    uses_parent_account,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
