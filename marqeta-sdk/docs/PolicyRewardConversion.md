# PolicyRewardConversion

Defines the conversion properties intended for a reward policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_increment** | **number** | The static amount to reward if the rule conditions are met. | [default to undefined]
**conversion_rate** | **number** | The rate that points are worth with converting the REDEMPTION_TYPE indicated. | [default to undefined]
**currency** | **string** | Type of currency used with the conversion rate. | [optional] [default to undefined]
**type** | [**PolicyRewardConversionType**](PolicyRewardConversionType.md) |  | [default to undefined]

## Example

```typescript
import { PolicyRewardConversion } from './api';

const instance: PolicyRewardConversion = {
    conversion_increment,
    conversion_rate,
    currency,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
