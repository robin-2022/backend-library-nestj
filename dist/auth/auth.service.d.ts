import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { LoginAuthDTO } from './dto/api.dto';
import { SignUpDto } from './dto/signup.dto';
export declare class ApiService {
    private readonly HttpService;
    private readonly apiSeguridad;
    constructor(HttpService: HttpService);
    test(): Promise<string>;
    loginAuth(loginAuthDTO: LoginAuthDTO): Promise<Observable<AxiosResponse<any[]>>>;
    signAuth(signUpDto: SignUpDto): Promise<Observable<AxiosResponse<any[]>>>;
}
