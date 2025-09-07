## Developer Guide

**Version:** 5c715563a7e7387859534267039d1b3b45b89854

---

### Authentication Service (`auth.service.ts`)

```typescript
@Injectable()
export class AuthService {
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.refreshService.createToken(user.userId),
    };
  }
}
```

---

### User Controller (`user.controller.ts`)

```typescript
@Controller('users')
export class UserController {
  @Get('profile')
  getProfile(@Request() req) {
    return this.userService.findProfile(req.user.userId);
  }

  @Put('profile')
  updateProfile(@Request() req, @Body() updateDto: UpdateProfileDto) {
    return this.userService.updateProfile(req.user.userId, updateDto);
  }
}
```

---

### DTOs

```typescript
export class LoginDto {
  username: string;
  password: string;
}

export class UpdateProfileDto {
  email?: string;
  password?: string;
}
```
