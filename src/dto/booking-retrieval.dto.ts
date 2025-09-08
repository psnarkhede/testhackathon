import { IsUUID, IsString, IsNotEmpty } from 'class-validator';

export class BookingRetrievalDto {
  @IsString()
  @IsNotEmpty()
  mobileNumber: string;

  @IsUUID()
  @IsNotEmpty()
  uuid: string;
}
