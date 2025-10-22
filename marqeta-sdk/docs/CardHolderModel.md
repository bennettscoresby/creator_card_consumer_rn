# CardHolderModel

Contains information about a cardholder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_holder_group_token** | **string** | Associates the specified account holder group with the cardholder.  Send a &#x60;GET&#x60; request to &#x60;/accountholdergroups&#x60; to retrieve account holder group tokens. | [optional] [default to undefined]
**active** | **boolean** | Specifies if the cardholder is in the &#x60;ACTIVE&#x60; state on the Marqeta platform.  *NOTE:* Do not set the value of the &#x60;user.active&#x60; field directly. Instead, use the &#x60;/usertransitions&#x60; endpoints to transition user resources between statuses. For more information on status changes, see &lt;&lt;/core-api/user-transitions#postUsertransitions, Create User Transition&gt;&gt;. | [optional] [default to true]
**address1** | **string** | Cardholder\&#39;s address.  *NOTE:* Required for KYC verification (US-based cardholders only). Cannot perform KYC if set to a PO Box. | [optional] [default to undefined]
**address2** | **string** | Additional address information for the cardholder.  *NOTE:* Cannot perform KYC if set to a PO Box. | [optional] [default to undefined]
**birth_date** | **string** | Cardholder\&#39;s date of birth.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**birth_place** | **string** | Country where the cardholder was born. | [optional] [default to undefined]
**city** | **string** | City where the cardholder resides.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**company** | **string** | Company name. | [optional] [default to undefined]
**corporate_card_holder** | **boolean** | Specifies if the cardholder holds a corporate card. | [optional] [default to false]
**country** | **string** | Country where the cardholder resides.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**email** | **string** | Valid email address of the cardholder.  This value must be unique among users.  *NOTE:* Required for KYC verification by certain banks (US-based cardholders only). To determine if you must provide an email address, contact your Marqeta representative. | [optional] [default to undefined]
**first_name** | **string** | Cardholder\&#39;s first name.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**gender** | **string** | Gender of the cardholder. | [optional] [default to undefined]
**honorific** | **string** | Cardholder\&#39;s title or prefix: Dr., Miss, Mr., Ms., and so on. | [optional] [default to undefined]
**id_card_expiration_date** | **string** | Expiration date of the cardholder\&#39;s identification card. | [optional] [default to undefined]
**id_card_number** | **string** | Cardholder\&#39;s identification card number. | [optional] [default to undefined]
**identifications** | [**Array&lt;IdentificationRequestModel&gt;**](IdentificationRequestModel.md) | One or more objects containing identifications associated with the cardholder. | [optional] [default to undefined]
**ip_address** | **string** | Cardholder\&#39;s IP address. | [optional] [default to undefined]
**last_name** | **string** | Cardholder\&#39;s last name.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Associates any additional metadata you provide with the cardholder. | [optional] [default to undefined]
**middle_name** | **string** | Cardholder\&#39;s middle name. | [optional] [default to undefined]
**nationality** | **string** | Cardholder\&#39;s nationality. | [optional] [default to undefined]
**notes** | **string** | Any additional information pertaining to the cardholder. | [optional] [default to undefined]
**parent_token** | **string** | Unique identifier of the parent user or business resource. Send a &#x60;GET&#x60; request to &#x60;/users&#x60; to retrieve user resource tokens or to &#x60;/businesses&#x60; to retrieve business resource tokens.  Required if &#x60;uses_parent_account &#x3D; true&#x60;. This user or business is configured as the parent of the current user. | [optional] [default to undefined]
**passport_expiration_date** | **string** | Expiration date of the cardholder\&#39;s passport. | [optional] [default to undefined]
**passport_number** | **string** | Cardholder\&#39;s passport number. | [optional] [default to undefined]
**password** | **string** | Password to the cardholder\&#39;s user account on the Marqeta platform.  * Must contain at least one numeral + * Must contain at least one lowercase letter + * Must contain at least one uppercase letter + * Must contain at least one of these symbols:   +  &#x60;@&#x60; &#x60;#&#x60; &#x60;$&#x60; &#x60;%&#x60; &#x60;!&#x60; &#x60;^&#x60; &#x60;&amp;&#x60; &#x60;*&#x60; &#x60;(&#x60; &#x60;)&#x60;   +  &#x60;\\&#x60; &#x60;_&#x60; &#x60;+&#x60; &#x60;~&#x60; &#x60;-&#x60; &#x60;&#x3D;&#x60; &#x60;[&#x60; &#x60;]&#x60; &#x60;{&#x60; &#x60;}&#x60;   +  &#x60;,&#x60; &#x60;;&#x60; &#x60;:&#x60; &#x60;\&#39;&#x60; &#x60;\&quot;&#x60; &#x60;.&#x60; &#x60;/&#x60; &#x60;&lt;&#x60; &#x60;&gt;&#x60; &#x60;?&#x60; &#x60;&#x60;&#x60; | [optional] [default to undefined]
**phone** | **string** | Telephone number of the cardholder (including area code), prepended by the &#x60;+&#x60; symbol and the 1- to 3-digit country calling code. Do not include hyphens, spaces, or parentheses.  *NOTE:* Required for KYC verification by certain banks (US-based cardholders only). To determine if you must provide a phone number, contact your Marqeta representative. | [optional] [default to undefined]
**postal_code** | **string** | Postal code of the cardholder\&#39;s address.  *NOTE:* Required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**ssn** | **string** | Cardholder\&#39;s Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN). | [optional] [default to undefined]
**state** | **string** | State or province where the cardholder resides.  *NOTE:* &lt;&lt;/core-api/kyc-verification#_valid_state_provincial_territorial_and_federal_abbreviations, Valid two-character abbreviation&gt;&gt; required for KYC verification (US-based cardholders only). | [optional] [default to undefined]
**title** | **string** | Professional title of the cardholder, such as Chief Comptroller.  *NOTE:* Do not use this field for honorific titles such as Mr., Mrs., Miss, Ms., Mx., Sir, or Dame. Instead, add these to the &#x60;honorific&#x60; field. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the cardholder. If you do not include a token, the system generates one automatically. This token is necessary for use in other API calls, so we recommend that rather than let the system generate one, you use a simple string that is easy to remember. This value cannot be updated. | [optional] [default to undefined]
**uses_parent_account** | **boolean** | Indicates whether the child shares balances with the parent (&#x60;true&#x60;), or the child\&#39;s balances are independent of the parent (&#x60;false&#x60;).  If set to &#x60;true&#x60;, you must also include a &#x60;parent_token&#x60; in the request. This value cannot be updated. | [optional] [default to false]

## Example

```typescript
import { CardHolderModel } from './api';

const instance: CardHolderModel = {
    account_holder_group_token,
    active,
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
