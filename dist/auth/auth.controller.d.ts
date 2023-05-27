import { ApiService } from './auth.service';
import { Response } from 'express';
import { LoginAuthDTO } from './dto/api.dto';
import { SignUpDto } from './dto/signup.dto';
export declare class ApiController {
    private readonly apiService;
    constructor(apiService: ApiService);
    authLogin(res: Response, loginAuthDTO: LoginAuthDTO): Promise<Response<any, Record<string, any>>>;
    authRegister(res: Response, signUpDto: SignUpDto): Promise<Response<any, Record<string, any>>>;
}
