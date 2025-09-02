import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BookingRequestDto } from './dto/booking-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/bookings")
  GetBookings(request: BookingRequestDto): string {
    return this.appService.getHello();
  }
}
