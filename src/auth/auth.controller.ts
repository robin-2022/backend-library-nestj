import { Controller, HttpStatus, Post, Res, Body } from '@nestjs/common';
import { ApiService } from './auth.service';
import { Response } from 'express';
import { LoginAuthDTO } from './dto/api.dto';
import { SignUpDto } from './dto/signup.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Login')
@Controller('api')
export class ApiController {
    constructor(
        private readonly apiService:ApiService
    ){}

    @Post('auth-login')
    async authLogin(@Res() res:Response,@Body()loginAuthDTO:LoginAuthDTO){
        try {
            const response = await this.apiService.loginAuth(loginAuthDTO)
            return res.status(HttpStatus.OK).json({response})
        } catch (error) {
            throw error
        }
    }
    @Post('auth-register')
    async authRegister(@Res() res:Response,@Body()signUpDto:SignUpDto){
        try {
            const response = await this.apiService.signAuth(signUpDto)
            return res.status(HttpStatus.OK).json({response})
        } catch (error) {
            throw error
        }
    }
}
