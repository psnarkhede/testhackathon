# API Documentation

**Version:** 196b5f7a1711cfd1008124dd1cd1f9243e5a4498

---

## POST /bookings

- **Controller:** app.controller.ts
- **Function Name:** CreateBookings

### Request DTO: BookingRequestDto

| Property | Type | Required |
| -------- | ---- | -------- |
| customer | CustomerDto | Yes |
| vehicle | VehicleDto | Yes |
| payment | PaymentDto | Yes |

**CustomerDto properties:**

| Property    | Type   | Required |
| ----------- | ------ | -------- |
| name        | string | Yes      |
| email       | string | Yes      |
| mobilenumber| string | Yes      |
| address     | string | Yes      |
| pincode     | string | Yes      |

**VehicleDto properties:**

| Property       | Type         | Required |
| -------------- | ------------ | -------- |
| modelId        | string       | Yes      |
| partId         | string       | Yes      |
| vehicleType    | VehicleType  | Yes      |
| onRoadPrice    | number       | Yes      |
| exShowroomPrice| number       | Yes      |

**PaymentDto properties:**

| Property      | Type        | Required |
| ------------- | ----------- | -------- |
| paymentId     | string      | Yes      |
| transactionId | string      | Yes      |
| paymentDate   | string      | Yes      |
| merchant      | string      | Yes      |
| amountPaid    | number      | Yes      |
| paymentType   | PaymentType | Yes      |
| paymentMode   | PaymentMode | Yes      |

### Response DTO: BookingResponseDto

| Property | Type   | Required |
| -------- | ------ | -------- |
| message  | string | Yes      |
| uuid     | string | Yes      |

---

## GET /bookings

- **Controller:** app.controller.ts
- **Function Name:** GetBookings

### Request DTO: BookingRetrievalDto

| Property     | Type   | Required |
| ------------ | ------ | -------- |
| mobileNumber | string | Yes      |
| uuid         | string | Yes      |

### Response DTO: BookingRequestDto

| Property | Type        | Required |
| -------- | ----------- | -------- |
| customer | CustomerDto | Yes      |
| vehicle  | VehicleDto  | Yes      |
| payment  | PaymentDto  | Yes      |

**CustomerDto properties:**

| Property    | Type   | Required |
| ----------- | ------ | -------- |
| name        | string | Yes      |
| email       | string | Yes      |
| mobilenumber| string | Yes      |
| address     | string | Yes      |
| pincode     | string | Yes      |

**VehicleDto properties:**

| Property       | Type         | Required |
| -------------- | ------------ | -------- |
| modelId        | string       | Yes      |
| partId         | string       | Yes      |
| vehicleType    | VehicleType  | Yes      |
| onRoadPrice    | number       | Yes      |
| exShowroomPrice| number       | Yes      |

**PaymentDto properties:**

| Property      | Type        | Required |
| ------------- | ----------- | -------- |
| paymentId     | string      | Yes      |
| transactionId | string      | Yes      |
| paymentDate   | string      | Yes      |
| merchant      | string      | Yes      |
| amountPaid    | number      | Yes      |
| paymentType   | PaymentType | Yes      |
| paymentMode   | PaymentMode | Yes      |

---