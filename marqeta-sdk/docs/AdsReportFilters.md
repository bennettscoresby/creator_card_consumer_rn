# AdsReportFilters

Filters for the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliasStatuses** | **Array&lt;string&gt;** |  | [default to undefined]
**aliasType** | **string** | Type of Visa Alias in the Alias Directory Service (ADS) profile. Visa supports phone and email as Visa Alias types that can be used in place of sensitive payment credentials details. | [default to undefined]
**billingEventTypes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**endDate** | **string** | Date when the report ends in ISO UTC format YYYY-MM-DDThh:mm:ss.000Z | [default to undefined]
**startDate** | **string** | Date when the report starts in ISO UTC format YYYY-MM-DDThh:mm:ss.000Z | [default to undefined]

## Example

```typescript
import { AdsReportFilters } from './api';

const instance: AdsReportFilters = {
    aliasStatuses,
    aliasType,
    billingEventTypes,
    endDate,
    startDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
