import { IsUUID, IsString, IsNotEmpty } from 'class-validator';

export class BookingResponseDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsUUID()
  @IsNotEmpty()
  uuid: string;
}
