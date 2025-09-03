import { Injectable } from '@nestjs/common';
import { BookingResponseDto } from './dto/bookinig-response.dto';

@Injectable()
export class AppService {
  getHello(): BookingResponseDto {
    const bookingResponse: BookingResponseDto = {
      vehicle: 'Car',
      uuid: '123e4567-e89b-12d3-a456-426614174000',
      amount: 100
    }
    return bookingResponse;
  }
}
