# TransactionOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_data** | **string** |  | [optional] [default to undefined]
**card_expiration_date_yymm** | **string** |  | [optional] [default to undefined]
**database_transaction_timeout** | **number** |  | [optional] [default to undefined]
**encryption_key_id** | **string** |  | [optional] [default to undefined]
**is_async** | **boolean** |  | [optional] [default to false]
**pre_auth_time_limit** | **string** |  | [optional] [default to undefined]
**send_expiration_date** | **boolean** |  | [optional] [default to false]
**send_track_data** | **boolean** |  | [optional] [default to false]
**transaction_timeout_threshold_seconds** | **number** |  | [optional] [default to undefined]
**transaction_token** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionOptions } from './api';

const instance: TransactionOptions = {
    additional_data,
    card_expiration_date_yymm,
    database_transaction_timeout,
    encryption_key_id,
    is_async,
    pre_auth_time_limit,
    send_expiration_date,
    send_track_data,
    transaction_timeout_threshold_seconds,
    transaction_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
