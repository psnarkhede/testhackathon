# API Documentation - Version: [object Object]

## Endpoints

### GET /items
Retrieve list of items.

**Request:** None

**Response:**
```json
[
  {
    "id": "string",
    "name": "string",
    "price": 0
  }
]
```

### POST /items
Create a new item.

**Request:**
```json
{
  "name": "string",
  "price": 0
}
```

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "price": 0
}
```
