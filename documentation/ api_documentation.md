# API Documentation

**Version: [object Object].version**

---

## Endpoint: `/users`

### Method: GET

- **Description:** Retrieves a list of users.
- **Request:** No parameters required.
- **Response:** Array of User DTO objects.

#### User DTO
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

#### Example Request
```
GET /users
```

#### Example Response
```json
[
  {"id": "user1", "name": "Alice", "email": "alice@example.com"},
  {"id": "user2", "name": "Bob", "email": "bob@example.com"}
]
```

---

## Endpoint: `/users/{id}`

### Method: GET

- **Description:** Retrieves a single user by ID.
- **Request Parameters:**
  - `id` (path parameter): ID of the user.
- **Response:** User DTO object.

#### Example Request
```
GET /users/user1
```

#### Example Response
```json
{
  "id": "user1",
  "name": "Alice",
  "email": "alice@example.com"
}
```

---

## Endpoint: `/users`

### Method: POST

- **Description:** Creates a new user.
- **Request Body:** UserCreateRequest DTO

#### UserCreateRequest DTO
```json
{
  "name": "string",
  "email": "string"
}
```

- **Response:** User DTO object for the created user.

#### Example Request
```json
{
  "name": "Charlie",
  "email": "charlie@example.com"
}
```

#### Example Response
```json
{
  "id": "user3",
  "name": "Charlie",
  "email": "charlie@example.com"
}
```
