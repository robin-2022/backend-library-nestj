import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable,  } from 'rxjs';
import { AxiosResponse } from 'axios';
import { LoginAuthDTO } from './dto/api.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable({})
export class ApiService {
    private readonly apiSeguridad = process.env.API_SEGURIDAD
    constructor(
        private readonly HttpService: HttpService,
    ){}
    async test(){
        return "Services"
    }
    
    async loginAuth(loginAuthDTO:LoginAuthDTO):Promise<Observable<AxiosResponse<any[]>>>{
        try {
        console.log(`${this.apiSeguridad}/auth/login`)
        const response = await this.HttpService.post(`${this.apiSeguridad}/auth/login`,loginAuthDTO).toPromise()
        // const response = await this.HttpService.post(`https://icy-fire-7316.fly.dev/auth/login`,loginAuthDTO).toPromise()
        return response.data
        } catch (error) {
            console.log(error)
            throw error.response.data
        }
        // https://icy-fire-7316.fly.dev/
    }
    async signAuth(signUpDto:SignUpDto):Promise<Observable<AxiosResponse<any[]>>>{
        try {
        console.log(`${this.apiSeguridad}/auth/login`)
        const response = await this.HttpService.post(`${this.apiSeguridad}/auth/register`,signUpDto).toPromise()
        // const response = await this.HttpService.post(`https://icy-fire-7316.fly.dev/auth/login`,loginAuthDTO).toPromise()
        return response.data
        } catch (error) {
            console.log(error)
            throw error.response.data
        }
    }


}
