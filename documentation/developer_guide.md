## Developer Guide

**Version:** 04d39232b7f955392abbb0a13145ce0e90ada880

---

This guide helps developers understand how to extend or modify the system.

### Key Modules and Files

- **`src/services/userService.ts`** — Contains business logic for user operations such as creating, reading, and managing user data.
- **`src/controllers/userController.ts`** — Handles routing and API endpoint implementations related to users.
- **`src/dto/user.dto.ts`** — Defines data transfer objects for user-related API requests and responses.
- **`src/app.module.ts`** — Root module that imports and initializes all submodules and services.

### Extending the System

To add a new feature, for example, "deleting users":

1. **Add new service methods** in `userService.ts`:

```typescript
async deleteUser(id: string): Promise<boolean> {
  const result = await this.userRepository.delete(id);
  return result.affected > 0;
}
```

2. **Add new controller endpoint** in `userController.ts`:

```typescript
@Delete(':id')
async remove(@Param('id') id: string) {
  const success = await this.userService.deleteUser(id);
  if (!success) throw new NotFoundException('User not found');
  return { message: 'User deleted successfully' };
}
```

3. **Define necessary DTOs** if request or response needs custom shapes.

4. **Update and add tests** to cover new functionality.

### Important Notes

- The system uses **TypeScript** and **NestJS** framework for backend.
- All services use dependency injection; follow existing patterns for consistency.
- Use **class-validator** decorators in DTOs to enforce validation.

---

Refer to the `developerGuide` source files for more code examples and project structure insights.