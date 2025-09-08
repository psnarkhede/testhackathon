import { Controller, Get, Post } from '@nestjs/common';
import { BookingRequestDto } from './dto/booking-request.dto';
import { BookingResponseDto } from './dto/bookinig-response.dto';
import { AppService } from './Services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("bookings")
  CreateBookings(request: BookingRequestDto): BookingResponseDto {
    return this.appService.createBooking(request);
  }

  @Get("/bookings")
  GetBookings(uuid: string): BookingRequestDto {
    return this.appService.GetBooking(uuid);
  }
}
