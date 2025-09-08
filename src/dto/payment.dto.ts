import { IsUUID, IsString, IsNotEmpty, IsDateString, IsNumber, Min, IsEnum } from 'class-validator';

export enum PaymentType {
  FULL = 'FULL',
  PARTIAL = 'PARTIAL',
  REFUND = 'REFUND',
}

export enum PaymentMode {
  CASH = 'CASH',
  CARD = 'CARD',
  UPI = 'UPI',
  NETBANKING = 'NETBANKING',
  WALLET = 'WALLET',
}

export class PaymentDto {
  @IsUUID()
  @IsNotEmpty()
  paymentId: string;

  @IsUUID()
  @IsNotEmpty()
  transactionId: string;

  @IsDateString()
  paymentDate: string; // ISO 8601 date string (e.g. 2025-09-08T10:00:00Z)

  @IsString()
  @IsNotEmpty()
  merchant: string;

  @IsNumber()
  @Min(0)
  amountPaid: number;

  @IsEnum(PaymentType, { message: 'paymentType must be FULL, PARTIAL, or REFUND' })
  paymentType: PaymentType;

  @IsEnum(PaymentMode, { message: 'paymentMode must be CASH, CARD, UPI, NETBANKING, or WALLET' })
  paymentMode: PaymentMode;
}
