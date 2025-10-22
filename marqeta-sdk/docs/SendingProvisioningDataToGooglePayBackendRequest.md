# SendingProvisioningDataToGooglePayBackendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_setting** | **number** | Indicates if the Funding Primary Account Number (FPAN) will be attempted.  * *1* - FPAN save will be attempted. * *0* - FPAN save will not be attempted. | [default to undefined]
**card_token** | **string** | Unique identifier of the card resource. | [default to undefined]
**client_session_id** | **string** | String provided by Google Wallet that identifies the client session. | [default to undefined]
**integrator_id** | **string** | Google-assigned string that uniquely identifies both the integrator that is initiating the session and the issuer of the card. | [default to undefined]
**public_device_id** | **string** | String provided by Google Wallet that identifies the Android device that will receive the digital wallet token. | [default to undefined]
**public_wallet_id** | **string** | String provided by Google Wallet that identifies the device-scoped wallet that receives the digital wallet token. | [default to undefined]
**server_session_id** | **string** | String provided by Google Wallet that identifies the backend session. | [default to undefined]
**token_setting** | **number** | Indicates if tokenization will be attempted.  * *1* - Tokenization will be attempted. * *0* - Tokenization will not be attempted. | [default to undefined]

## Example

```typescript
import { SendingProvisioningDataToGooglePayBackendRequest } from './api';

const instance: SendingProvisioningDataToGooglePayBackendRequest = {
    card_setting,
    card_token,
    client_session_id,
    integrator_id,
    public_device_id,
    public_wallet_id,
    server_session_id,
    token_setting,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
