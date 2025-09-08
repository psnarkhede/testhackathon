# User Manual

**Version:** a69daa75ed359dfb29965abddd40909638342a9f

---

This system allows users to book a vehicle through a simple API interface.

### How to Use the System

1. **Greeting**
   - You can verify the system is running by sending a simple GET request to the root `/` endpoint.
   - This will return a friendly "Hello World" message.

2. **Making a Booking**
   - To make a booking, send a POST request to the `/bookings` endpoint.
   - You must provide your mobile phone number and a unique ID (UUID) in the request.

### Example Usage

#### Check system availability:
- Request:
  - Method: GET
  - URL: `/`

- Response:
  - "Hello World"

#### Submit a booking:
- Request:
  - Method: POST
  - URL: `/bookings`
  - Body Example:
  ```json
  {
    "mobileNumber": "+1234567890",
    "uuid": "550e8400-e29b-41d4-a716-446655440000"
  }
  ```

- If successful, you will receive a confirmation like:
  ```json
  {
    "vehicle": "Car",
    "uuid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 100
  }
  ```

### Notes:
- Please ensure the mobile number is a valid phone number.
- The UUID should be generated uniquely for each request.
- The response may include additional optional information such as the amount charged.

This user manual helps you interact with the basic booking features of the system.

---