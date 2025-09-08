import { IsString, IsEmail, IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class CustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumberString()
  @Length(10, 15, { message: 'Mobile number must be between 10 to 15 digits' })
  mobilenumber: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumberString()
  @Length(6, 6, { message: 'Pincode must be 6 digits' })
  pincode: string;
}
