# AprScheduleEntryUpdateReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_next_cycle** | **boolean** | Whether the APR can be ignored for the current billing cycle and applied on the next. | [optional] [default to false]
**effective_date** | **string** | Date and time when the APR goes into effect, in UTC.  If you do not include a date-time value, the system uses the date and time when the API request was received.  *NOTE:* When passing multiple &#x60;schedule&#x60; objects, this field is required in all objects but the first. If you do not include &#x60;effective_date&#x60; in the first &#x60;schedule&#x60;, the system uses the date and time when the API request was received. | [optional] [default to undefined]
**margin** | **number** | Number of percentage points added to the prime rate, used to calculate a variable value.  Used for variable values only. | [optional] [default to undefined]
**type** | **string** | Indicates whether the APR value is fixed or variable. | [optional] [default to TypeEnum_Fixed]
**value** | **number** | Percentage value of the APR.  If the APR type is &#x60;FIXED&#x60;, this is the value of the fixed rate. If the APR type is &#x60;VARIABLE&#x60;, the value is calculated by adding the margin to the prime rate that was stored on Marqeta\&#39;s credit platform when your credit program was created.  When backdating an APR, this value cannot be greater than the value of the effective APR on the backdated date. | [default to undefined]

## Example

```typescript
import { AprScheduleEntryUpdateReq } from './api';

const instance: AprScheduleEntryUpdateReq = {
    apply_next_cycle,
    effective_date,
    margin,
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
