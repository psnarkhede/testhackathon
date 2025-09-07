**Developer Guide**

**Version:** [object Object].version

This guide covers how to extend and modify the system.

### Key Files and Modules

- **src/main.ts**: Entry point of the application.
- **src/app.module.ts**: Root module defining imports and providers.
- **src/users/**: Contains controllers, services, and DTOs for managing users.

### Extending the User Module

To add a feature:
1. Modify `users.controller.ts` to add new endpoints.
2. Update `users.service.ts` with business logic.
3. Define request/response shapes in DTO files (`create-user.dto.ts`, `update-user.dto.ts`).

### Example: Adding a new service method

```typescript
// users.service.ts
public async findByEmail(email: string): Promise<User | undefined> {
  return this.userRepository.findOne({ email });
}
```

### Example: Updating the controller

```typescript
// users.controller.ts
@Get('email/:email')
async getUserByEmail(@Param('email') email: string) {
  return this.usersService.findByEmail(email);
}
```

### Testing

Tests can be found in `test/` directory.
Use Jest to run tests:
```
npm test
```

### Important Notes

- Follow existing architecture and coding style.
- Use DTOs for data validation.
- Update API documentation after changes.