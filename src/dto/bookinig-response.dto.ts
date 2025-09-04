// booking-request.dto.ts
import { IsString, IsUUID, IsMobilePhone, IsNumber, IsOptional } from 'class-validator';

export class BookingResponseDto {
  @IsString()
  vehicle: string;

  @IsUUID()
  uuid: string;

  @IsNumber()
  @IsOptional()
  amount?: number;

  @IsNumber()
  @IsOptional()
  pinode?: number;
}
