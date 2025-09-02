// booking-request.dto.ts
import { IsString, IsUUID, IsMobilePhone } from 'class-validator';

export class BookingRequestDto {
  @IsMobilePhone()
  mobileNumber: string;

  @IsUUID()
  uuid: string;
}
