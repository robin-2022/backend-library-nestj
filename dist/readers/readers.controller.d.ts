import { ReadersService } from './readers.service';
import { CreateReaderDto } from './dto/create-reader.dto';
export declare class ReadersController {
    private readonly readersService;
    constructor(readersService: ReadersService);
    create(createReaderDto: CreateReaderDto): Promise<import("./entities/reader.entity").Reader>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, reader: CreateReaderDto): Promise<any>;
    remove(id: string): Promise<any>;
}
