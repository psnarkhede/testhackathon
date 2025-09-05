import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BookingRequestDto } from './dto/booking-request.dto';
import { BookingResponseDto } from './dto/bookinig-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  GetHelloWorld(): string {
    return 'Hello World';
  }

  @Post("bookings")
  GetBookings(request: BookingRequestDto): BookingResponseDto {
    return this.appService.getHello();
  }
}
