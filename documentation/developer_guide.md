## Developer Guide

### Version: 1.4.2-release

This guide is for developers looking to extend or modify the system.

---

### Project Structure
- `src/` - Core application files
- `src/controllers/` - Handles incoming API requests
- `src/services/` - Business logic and data processing
- `src/dtos/` - Data Transfer Objects (DTOs) definitions

---

### Key Files and Modules
- **`src/controllers/user.controller.ts`**: Manages user-related API endpoints.
- **`src/services/auth.service.ts`**: Handles authentication logic.
- **`src/dtos/login.dto.ts`**: DTO for login requests.

---

### Extending the Login Endpoint

To add new fields to the login process:

1. Update the DTO in `src/dtos/login.dto.ts`:

```typescript
export class LoginDto {
  username: string;
  password: string;
  // Add new field here
  otpCode?: string;
}
```

2. Modify the controller in `src/controllers/user.controller.ts`:

```typescript
@Post('login')
async login(@Body() loginDto: LoginDto) {
  // validate otp code if provided
  if (loginDto.otpCode) {
    await this.authService.validateOtp(loginDto.username, loginDto.otpCode);
  }
  return this.authService.login(loginDto.username, loginDto.password);
}
```

---

### Sample Code Snippet for a Service Method

```typescript
@Injectable()
export class AuthService {
  async login(username: string, password: string): Promise<{ token: string; expiresIn: number }> {
    const user = await this.userRepository.findByUsername(username);
    if (!user || !this.verifyPassword(user, password)) {
      throw new UnauthorizedException();
    }
    const token = this.generateJwt(user);
    return { token, expiresIn: 3600 };
  }
}
```

Please refer to the code comments for further insights.