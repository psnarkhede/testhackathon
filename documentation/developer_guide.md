## Developer Guide

**Version:** 7f2eec614b7c99282052440ca6a0ba82bee672fa

---

Welcome developers! This guide provides insights to extend or modify the system.

### Key Components

- **API Controllers:** Located in `/src/controllers/`, these handle incoming HTTP requests.
- **Services:** Logic encapsulated under `/src/services/`, dealing with business rules and data transformations.
- **DTOs (Data Transfer Objects):** Found in `/src/dtos/`, they define the structure of requests and responses.
- **Authentication Module:** Manages login and JWT token handling under `/src/auth/`.

### How to Extend

1. **Adding a New API Endpoint:**
   - Create a new controller file in `/src/controllers/`.
   - Define DTOs for request/response in `/src/dtos/`.
   - Implement logic in the corresponding service under `/src/services/`.

2. **Modifying Existing Features:**
   - Locate the relevant controller and service files.
   - Update DTOs as needed.

### Code Snippet Example

Here is an example from the authentication service to validate user credentials:

```typescript
async validateUser(email: string, password: string): Promise<User | null> {
  const user = await this.userService.findByEmail(email);
  if (user && await bcrypt.compare(password, user.passwordHash)) {
    return user;
  }
  return null;
}
```

### Testing

- Tests are located in `/test/`.
- Use `npm test` to run the test suite.

### Notes

- Follow existing code styles and patterns.
- Use proper error handling and logging.
- Update API documentation when adding or changing endpoints.

Feel free to reach out if you need any setup support or code walkthroughs.