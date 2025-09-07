# User Manual - Version: 1.0.0

## Using the API

### Endpoint: GET /hello

#### Description:
Returns a welcome message.

#### Request:
```
GET /hello HTTP/1.1
Host: {server_host}
```

#### Response:
```json
{
  "message": "Hello, World!"
}
```

#### Errors:
No error handling was defined in the source code.
