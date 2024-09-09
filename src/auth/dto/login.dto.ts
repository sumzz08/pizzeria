import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
   
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email:string
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(2,20)
    password:string
    

}