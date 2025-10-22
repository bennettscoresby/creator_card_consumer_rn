# AdsReportFileResponse

The response schema for the ADS report file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operationType** | **string** | The type of the operation | [optional] [default to undefined]
**operationsCount** | **number** | The number of operations in the report | [optional] [default to undefined]
**originatorActorId** | **string** | The Originator Actor Id | [optional] [default to undefined]
**programId** | **string** | The program ID | [optional] [default to undefined]
**statusCode** | **number** | The status code of the operation | [optional] [default to undefined]

## Example

```typescript
import { AdsReportFileResponse } from './api';

const instance: AdsReportFileResponse = {
    operationType,
    operationsCount,
    originatorActorId,
    programId,
    statusCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
