import { IsString, IsNotEmpty, IsNumber, IsUUID, IsEnum, Min } from 'class-validator';

export enum VehicleType {
  CAR = 'CAR',
  BIKE = 'BIKE',
  TRUCK = 'TRUCK',
  BUS = 'BUS',
}

export class VehicleDto {
  @IsUUID()
  @IsNotEmpty()
  modelId: string;

  @IsUUID()
  @IsNotEmpty()
  partId: string;

  @IsEnum(VehicleType, { message: 'vehicleType must be one of CAR, BIKE, TRUCK, BUS' })
  vehicleType: VehicleType;

  @IsNumber()
  onRoadPrice: number;

  @IsNumber()
  exShowroomPrice: number;
}
