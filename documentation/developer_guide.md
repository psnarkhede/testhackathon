**Developer Guide**

**Version:** {{version}}

---

This guide is for developers who want to modify or extend the system.

### Project Structure
- `src/controllers/userController.ts`: Handles all user-related API requests.
- `src/services/userService.ts`: Contains business logic for user data manipulation.
- `src/models/userModel.ts`: Database schema and data representation of users.

### Extending the API
To add a new feature:
1. Create or update DTOs in `src/dtos/`.
2. Implement the business logic in `userService.ts`.
3. Add endpoint handlers in `userController.ts`.

### Code Snippet
From the developerGuide section:
```typescript
// Example userService method to add a user
async function addUser(createUserDto: CreateUserDto): Promise<User> {
    // Validate input
    // Save to database
    // Return saved user
}
```

### Testing
Add your tests under `tests/`. Use existing tests as a reference.

---

Remember to keep your code well-typed and follow existing coding conventions.