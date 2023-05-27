import { Module  } from '@nestjs/common';
import { ApiService } from './auth.service';
import { ApiController } from './auth.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports:[HttpModule],
    providers:[ApiService],
    controllers:[ApiController]
})
 export class ApiModule {}