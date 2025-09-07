# API Documentation

**Version:** 7f2eec614b7c99282052440ca6a0ba82bee672fa

---

## 1. User Management API

### Endpoint: `/users`
- **Method:** GET
- **Description:** Retrieve a list of users.

#### Request Parameters:
- None

#### Response DTO:
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string"
  }
]
```

#### Example Response:
```json
[
  {
    "id": "u123",
    "name": "Alice Smith",
    "email": "alice@example.com"
  },
  {
    "id": "u124",
    "name": "Bob Jones",
    "email": "bob@example.com"
  }
]
```

---

### Endpoint: `/users`
- **Method:** POST
- **Description:** Create a new user.

#### Request DTO:
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

#### Response DTO:
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

#### Example Request:
```json
{
  "name": "Charlie Brown",
  "email": "charlie@example.com",
  "password": "password123"
}
```

#### Example Response:
```json
{
  "id": "u125",
  "name": "Charlie Brown",
  "email": "charlie@example.com"
}
```

---

## 2. Authentication API

### Endpoint: `/auth/login`
- **Method:** POST
- **Description:** Authenticate user and obtain JWT token.

#### Request DTO:
```json
{
  "email": "string",
  "password": "string"
}
```

#### Response DTO:
```json
{
  "token": "string",
  "expiresIn": "number"
}
```

#### Example Request:
```json
{
  "email": "alice@example.com",
  "password": "password123"
}
```

#### Example Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR...",
  "expiresIn": 3600
}
```

---

## 3. Profile API

### Endpoint: `/profile`
- **Method:** GET
- **Description:** Fetch the logged in user's profile.
- **Headers:** `Authorization: Bearer <token>`

#### Response DTO:
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

#### Example Response:
```json
{
  "id": "u123",
  "name": "Alice Smith",
  "email": "alice@example.com"
}
```

---

*Note: This documentation covers the primary API endpoints along with their methods, request and response data contracts, and sample data to guide consumers.*