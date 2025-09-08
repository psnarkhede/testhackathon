import { Type } from 'class-transformer';
import { ValidateNested, IsNotEmpty } from 'class-validator';
import { VehicleDto } from './vehicle.dto';
import { PaymentDto } from './payment.dto';
import { CustomerDto } from './custromer.dto';

export class BookingRequestDto {
  @ValidateNested()
  @Type(() => CustomerDto)
  @IsNotEmpty()
  customer: CustomerDto;

  @ValidateNested()
  @Type(() => VehicleDto)
  @IsNotEmpty()
  vehicle: VehicleDto;

  @ValidateNested()
  @Type(() => PaymentDto)
  @IsNotEmpty()
  payment: PaymentDto;
}
