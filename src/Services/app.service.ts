import { Injectable } from '@nestjs/common';
import { BookingResponseDto } from '../dto/bookinig-response.dto';
import { BookingRequestDto } from '../dto/booking-request.dto';
import { VehicleType } from '../dto/vehicle.dto';
import { PaymentMode, PaymentType } from '../dto/payment.dto';
import { BookingRetrievalDto } from '../dto/booking-retrieval.dto';

@Injectable()
export class AppService {
  createBooking(requet: BookingRequestDto): BookingResponseDto {
    const bookingResponse: BookingResponseDto = {
      message: 'Booking Created Sucessfully',
      uuid: '123e4567-e89b-12d3-a456-426614174000',
    }
    return bookingResponse;
  }

  GetBooking(request: BookingRetrievalDto): BookingRequestDto {
    const bookingResponse: BookingRequestDto = {
      customer: {
        name : "John Doe",
        email : "johndoe@example.com",
        mobilenumber : "9876543210",
        address : "123 Main Street, New Delhi",
        pincode : "110011"
      },
      vehicle: {
        modelId : "550e8400-e29b-41d4-a716-446655440000",
        partId : "660e8400-e29b-41d4-a716-446655440111",
        vehicleType : VehicleType.CAR,
        onRoadPrice : 1250000,
        exShowroomPrice : 1150000
      },
      payment: {
        paymentId : "770e8400-e29b-41d4-a716-446655440222",
        transactionId : "880e8400-e29b-41d4-a716-446655440333",
        paymentDate : "2025-09-08T10:30:00Z",
        merchant : "HDFC Bank",
        amountPaid : 1250000,
        paymentType : PaymentType.FULL,
        paymentMode : PaymentMode.CARD
      }
    }

    return bookingResponse;
  }
}
