import { ApiProperty } from "@nestjs/swagger";
import { MaxLength, MinLength, IsEmail, IsNotEmpty } from "class-validator";

export class LoginAuthDTO{
    @ApiProperty()
    @IsNotEmpty({ message: 'Email is required'})
    @IsEmail()
    email:string;

    @ApiProperty()
    @MinLength(4)
    @MaxLength(12)
    @IsNotEmpty({ message: 'Email is required'})
    password:string;
}