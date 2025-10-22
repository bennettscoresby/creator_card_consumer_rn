# PINsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postPinsControltoken**](#postpinscontroltoken) | **POST** /pins/controltoken | Create PIN control token|
|[**putPins**](#putpins) | **PUT** /pins | Create or update PIN|
|[**revealPins**](#revealpins) | **POST** /pins/reveal | Reveal PIN|

# **postPinsControltoken**
> ControlTokenResponse postPinsControltoken()

Creates a control token necessary when creating or updating a card\'s personal identification number (PIN).  Creating, updating, or revealing a card\'s PIN is a two-step process. You must first create the control token that is required to create the PIN, and then you create, update, or reveal the PIN itself.  The lifespan of the control token in a production environment is either five minutes or one hour from creation, depending on the token type. If multiple tokens are requested for a single card, only the most recent one is valid. Once redeemed, a token cannot be reused.

### Example

```typescript
import {
    PINsApi,
    Configuration,
    ControlTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PINsApi(configuration);

let controlTokenRequest: ControlTokenRequest; // (optional)

const { status, data } = await apiInstance.postPinsControltoken(
    controlTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controlTokenRequest** | **ControlTokenRequest**|  | |


### Return type

**ControlTokenResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Control token created |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putPins**
> putPins()

Creates or updates a personal identification number (PIN) for an existing card. Although cardholders might choose a four-, five-, or six-digit PIN if they set their PIN at an automated teller machine, they can only set a four-digit PIN using Marqeta\'s Set PIN widget or the create or update PIN endpoint (`PUT /pins`). Cardholders can update their PIN through the API regardless of its length, but the new PIN value they choose must contain four digits.  If you want to manage a card\'s PIN, first create a new control token for the card by sending a `POST` request to `/pins/controltoken`, and then use that token to update the PIN. You must create a card before you can manage a PIN.  Unless PIN reveal functionality has been enabled for your program, you cannot retrieve a PIN that has previously been created. If the PIN has been forgotten, you must either update the card\'s PIN or create a new card and PIN.  If you have enabled PIN reveal functionality for your program, you can send a `POST` request to the `/pins/reveal` endpoint to retrieve an existing PIN. See <</core-api/pins#revealPins, Reveal PIN>> on this page for details.  [WARNING] Sending a request to this endpoint requires PCI DSS compliance. You must comply with PCI DSS data security requirements if you want to store, transmit, or process sensitive card data such as the cardholder\'s primary account number (PAN), personal identification number (PIN), and card expiration date.

### Example

```typescript
import {
    PINsApi,
    Configuration,
    PinRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PINsApi(configuration);

let pinRequest: PinRequest; // (optional)

const { status, data } = await apiInstance.putPins(
    pinRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pinRequest** | **PinRequest**|  | |


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | PIN was successfully set |  -  |
|**400** | Bad request |  -  |
|**412** | Weak PIN |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revealPins**
> revealPins()

Reveals the personal identification number (PIN) of an existing, active card. Be aware that while a cardholder can only set a four-digit PIN using the Marqeta Set PIN widget or `PUT /pins` API, you may see a four-, five-, or six-digit PIN in cases where your cardholders have set a new PIN at an automated teller machine.  [WARNING] Only use this endpoint to access a PIN in order to reveal it to its cardholder. Do not use this endpoint for the purpose of storing a PIN at any location.  Sending a request to this endpoint requires PCI DSS compliance. You must comply with PCI DSS data security requirements if you want to store, transmit, or process sensitive card data such as the cardholder\'s primary account number (PAN), personal identification number (PIN), and card expiration date.  If you want to update a card\'s PIN instead, send a `PUT` request to the `/pins` endpoint. See <</core-api/pins#putPins, Create or Update PIN>> on this page for details.  Revealing a card\'s PIN is a two-step process. You must first create a new control token for the card by sending a `POST` request to `/pins/controltoken`, and then use that token to reveal the PIN.

### Example

```typescript
import {
    PINsApi,
    Configuration,
    PinRevealRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PINsApi(configuration);

let pinRevealRequest: PinRevealRequest; // (optional)

const { status, data } = await apiInstance.revealPins(
    pinRevealRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pinRevealRequest** | **PinRevealRequest**|  | |


### Return type

void (empty response body)

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | PIN was successfully revealed |  -  |
|**400** | Bad request |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

