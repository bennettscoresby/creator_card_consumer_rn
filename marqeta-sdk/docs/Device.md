# Device

Contains information related to the device being provisioned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **string** | Identity number of the device. | [optional] [default to undefined]
**ip_address** | **string** | Device\&#39;s IP address. | [optional] [default to undefined]
**language_code** | **string** | Language the device is configured to use. | [optional] [default to undefined]
**location** | **string** | Geographic coordinates of the device. | [optional] [default to undefined]
**name** | **string** | Name of the device. | [optional] [default to undefined]
**phone_number** | **string** | Device\&#39;s telephone number. | [optional] [default to undefined]
**token** | **string** | Unique identifier of the device object. | [optional] [default to undefined]
**type** | **string** | Type of device being provisioned. | [optional] [default to undefined]

## Example

```typescript
import { Device } from './api';

const instance: Device = {
    device_id,
    ip_address,
    language_code,
    location,
    name,
    phone_number,
    token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
