import { Controller, Get, Post, Query } from '@nestjs/common';
import { BookingRequestDto } from './dto/booking-request.dto';
import { BookingResponseDto } from './dto/bookinig-response.dto';
import { AppService } from './Services/app.service';
import { BookingRetrievalDto } from './dto/booking-retrieval.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("bookings")
  CreateBookings(request: BookingRequestDto): BookingResponseDto {
    return this.appService.createBooking(request);
  }

  @Get("/bookings")
  GetBookings(request:BookingRetrievalDto): BookingRequestDto {
    return this.appService.GetBooking(request);
  }
}
