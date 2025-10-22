# PolicyRewardExclusions

Defines what merchant category codes (MCCs) are excluded from earning rewards. MCCs must be a four-digit number, or a range of two four-digit numbers separated by a hyphen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_exclusions** | **Array&lt;string&gt;** | List of merchant category codes (MCCs). MCCs must be a four-digit number, or a range of two four-digit numbers separated by a hyphen. | [optional] [default to undefined]
**use_default_exclusions** | **boolean** | Indicates whether to use the default exclusion list.  * If &#x60;true&#x60;, the default exclusion list is used. * If &#x60;false&#x60;, the custom exclusion list is used, if custom exclusions are included. | [optional] [default to undefined]

## Example

```typescript
import { PolicyRewardExclusions } from './api';

const instance: PolicyRewardExclusions = {
    custom_exclusions,
    use_default_exclusions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
