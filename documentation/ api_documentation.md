## API Documentation

**Version:** [object Object].version

---

### Endpoint: `/users`

**Method:** GET

**Description:** Retrieve a list of all users.

**Request:** No body parameters required.

**Response:**
```json
[
  {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

---

### Endpoint: `/users/{id}`

**Method:** GET

**Description:** Retrieve information about a single user by ID.

**Request Parameters:**
- `id` (path): The unique identifier of the user.

**Response:**
```json
{
  "id": "123",
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

### Endpoint: `/users`

**Method:** POST

**Description:** Create a new user.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

**Response:**
```json
{
  "id": "124",
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

---

*Note: This is a template example. Replace with actual API endpoints and DTOs from input.*