# User Manual - Version: [object Object]

## Using the API

- **Get Items:**

  `GET /items` to list all items.

- **Create Item:**

  `POST /items` with body `{ "name": "item name", "price": 100 }`.

## Error Handling

- Responses include HTTP status codes.
- 400 for bad requests.
- 500 for server errors.
