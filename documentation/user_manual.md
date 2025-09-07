**User Manual**

**Version:** [object Object].version

Welcome to the system! This guide will help you understand how to interact with our APIs in a simple way.

### What can you do?

Our system allows you to manage users. You can:
- See all users
- Add a new user
- Get details of a specific user
- Update user information
- Delete a user

### How to interact with the system?

You use URLs (web addresses) with some commands called HTTP methods.

1. **Get all users**
   - Go to: `/users` with a GET command.
   - You will receive a list of users.

2. **Add a new user**
   - Send a POST request to `/users` with the new user's name and email.
   - Example: "Add a user named Alice with alice@example.com"

3. **Get info about a user**
   - Use GET on `/users/{id}` replacing `{id}` with the user's ID.

4. **Update a user**
   - Send a PUT request to `/users/{id}` with the updated name and email.

5. **Delete a user**
   - Send a DELETE request to `/users/{id}`.

### Examples

**Example: Adding a user**

Say you want to add Alice:

Send a POST request to `/users` with:
```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com"
}
```

You will receive confirmation with Alice's new user ID.

**Example: Getting all users**

A GET request to `/users` will return:
```json
[
  {"id": "1", "name": "John Doe", "email": "john@example.com"},
  {"id": "2", "name": "Jane Smith", "email": "jane@example.com"}
]
```

This manual simplifies using the system without technical knowledge.