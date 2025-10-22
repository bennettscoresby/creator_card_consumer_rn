# MigrationsApi

All URIs are relative to */v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAccountBalances**](#getaccountbalances) | **GET** /migrations/accounts/{account_token}/getaccountbalances | Get the current balance and available credit for a credit account|
|[**getFinalizeAccountMigrationStatus**](#getfinalizeaccountmigrationstatus) | **GET** /migrations/accounts/{account_token}/finalize | Get finalize status|
|[**syncStatementAsset**](#syncstatementasset) | **POST** /migrations/accounts/{account_token}/statements/{statement_summary_token}/files | Sync statement asset|

# **getAccountBalances**
> CalculatedBalanceResponse getAccountBalances()

Retrieve the current balance, available credit for a credit account.

### Example

```typescript
import {
    MigrationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MigrationsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to retrieve fees.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)

const { status, data } = await apiInstance.getAccountBalances(
    accountToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to retrieve fees.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**CalculatedBalanceResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response to a valid request. |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFinalizeAccountMigrationStatus**
> FinalizeMigrationStatusResponse getFinalizeAccountMigrationStatus()

Called to retrieve the finalize status of a migrated account 

### Example

```typescript
import {
    MigrationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MigrationsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to get the finalize status.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)

const { status, data } = await apiInstance.getFinalizeAccountMigrationStatus(
    accountToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to get the finalize status.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|


### Return type

**FinalizeMigrationStatusResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response to a valid request |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **syncStatementAsset**
> MigrationResponse syncStatementAsset(syncStatementAssetReq)

Sync a statement asset to a migrated statement summary.

### Example

```typescript
import {
    MigrationsApi,
    Configuration,
    SyncStatementAssetReq
} from './api';

const configuration = new Configuration();
const apiInstance = new MigrationsApi(configuration);

let accountToken: string; //Unique identifier of the credit account for which you want to sync a statement asset.  Send a `GET` request to `/credit/accounts` to retrieve existing credit account tokens. (default to undefined)
let statementSummaryToken: string; //Unique identifier of the migrated statement summary for which you want to sync an asset. (default to undefined)
let syncStatementAssetReq: SyncStatementAssetReq; //

const { status, data } = await apiInstance.syncStatementAsset(
    accountToken,
    statementSummaryToken,
    syncStatementAssetReq
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncStatementAssetReq** | **SyncStatementAssetReq**|  | |
| **accountToken** | [**string**] | Unique identifier of the credit account for which you want to sync a statement asset.  Send a &#x60;GET&#x60; request to &#x60;/credit/accounts&#x60; to retrieve existing credit account tokens. | defaults to undefined|
| **statementSummaryToken** | [**string**] | Unique identifier of the migrated statement summary for which you want to sync an asset. | defaults to undefined|


### Return type

**MigrationResponse**

### Authorization

[mqAppAndAccessToken](../README.md#mqAppAndAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expected response to a valid request |  -  |
|**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

