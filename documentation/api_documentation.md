# API Documentation

**Version:** cd033e7f2eeffe6d4053e35cab8d03cb0d721491

---

## Endpoint: GetHelloWorld
- **HTTP Method:** GET
- **Path:** /
- **Controller:** app.controller.ts
- **Function Name:** GetHelloWorld
- **Request DTO:** None
- **Response DTO:** None
- **Parameters:**
  - `uuid` (string, query parameter)

---

## Endpoint: CreateBookings
- **HTTP Method:** POST
- **Path:** /bookings
- **Controller:** app.controller.ts
- **Function Name:** CreateBookings
- **Request DTO:** BookingRequestDto

    Properties:

    - customer (CustomerDto) - required

      - name (string) - required

      - email (string) - required

      - mobilenumber (string) - required

      - address (string) - required

      - pincode (string) - required

    - vehicle (VehicleDto) - required

      - modelId (string) - required

      - partId (string) - required

      - vehicleType (VehicleType) - required

      - onRoadPrice (number) - required

      - exShowroomPrice (number) - required

    - payment (PaymentDto) - required

      - paymentId (string) - required

      - transactionId (string) - required

      - paymentDate (string) - required

      - merchant (string) - required

      - amountPaid (number) - required

      - paymentType (PaymentType) - required

      - paymentMode (PaymentMode) - required

- **Response DTO:** BookingResponseDto

    Properties:

    - message (string) - required

    - uuid (string) - required

- **Sample Request Example:**

```json
{
  "customer": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "mobilenumber": "1234567890",
    "address": "123 Main St",
    "pincode": "123456"
  },
  "vehicle": {
    "modelId": "model123",
    "partId": "part456",
    "vehicleType": "SUV",
    "onRoadPrice": 25000.5,
    "exShowroomPrice": 22000
  },
  "payment": {
    "paymentId": "pay789",
    "transactionId": "txn101112",
    "paymentDate": "2024-06-01T12:00:00Z",
    "merchant": "MerchantX",
    "amountPaid": 25000.5,
    "paymentType": "CreditCard",
    "paymentMode": "Online"
  }
}
```

---

## Endpoint: GetBookings
- **HTTP Method:** GET
- **Path:** /bookings
- **Controller:** app.controller.ts
- **Function Name:** GetBookings
- **Request DTO:** BookingRetrievalDto

    Properties:

    - mobileNumber (string) - required

    - uuid (string) - required

- **Response DTO:** BookingRequestDto (same structure as in CreateBookings)

- **Sample Request Example:**

(As this is a GET endpoint, assume parameters are passed as query parameters or request body depending on implementation.)

```json
{
  "mobileNumber": "1234567890",
  "uuid": "unique-uuid-1234"
}
```

- **Sample Response Example:**

```json
{
  "customer": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "mobilenumber": "1234567890",
    "address": "123 Main St",
    "pincode": "123456"
  },
  "vehicle": {
    "modelId": "model123",
    "partId": "part456",
    "vehicleType": "SUV",
    "onRoadPrice": 25000.5,
    "exShowroomPrice": 22000
  },
  "payment": {
    "paymentId": "pay789",
    "transactionId": "txn101112",
    "paymentDate": "2024-06-01T12:00:00Z",
    "merchant": "MerchantX",
    "amountPaid": 25000.5,
    "paymentType": "CreditCard",
    "paymentMode": "Online"
  }
}

---

# API Version: cd033e7f2eeffe6d4053e35cab8d03cb0d721491
