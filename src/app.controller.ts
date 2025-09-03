import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BookingRequestDto } from './dto/booking-request.dto';
import { BookingResponseDto } from './dto/bookinig-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  Get(): string {
    return 'Hello World!';
  }

  @Get("bookings")
  GetBookings(request: BookingRequestDto): BookingResponseDto {
    return this.appService.getHello();
  }
}
