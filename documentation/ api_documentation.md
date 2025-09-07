# API Documentation

**Version:** [object Object].version

## Endpoint: /users

### Method: GET

#### Description
Retrieve a list of users.

#### Request Parameters
- None

#### Response DTO
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string"
  }
]
```

#### Example Request
```
GET /users HTTP/1.1
Host: api.example.com
```

#### Example Response
```json
[
  {
    "id": "1",
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  },
  {
    "id": "2",
    "name": "John Smith",
    "email": "john.smith@example.com"
  }
]
```

## Endpoint: /users

### Method: POST

#### Description
Create a new user.

#### Request DTO
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

#### Response DTO
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

#### Example Request
```json
POST /users
{
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com",
  "password": "mypassword"
}
```

#### Example Response
```json
{
  "id": "3",
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com"
}
```
